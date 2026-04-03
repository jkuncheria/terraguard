/**
 * Script to generate flooring system images using Gemini's image generation
 * Run with: npx ts-node scripts/generate-flooring-images.ts
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error("Error: GEMINI_API_KEY not found in .env.local"); process.exit(1); }
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Flooring system images - bird's eye view industrial flooring
const flooringSystems = [
  { 
    id: "epoxy-flooring", 
    name: "Epoxy Flooring", 
    prompt: "Bird's eye view photograph of industrial epoxy flooring in a warehouse or factory setting. Seamless glossy gray epoxy coating with high-gloss finish reflecting overhead lights. Clean, professional industrial floor. Shot from directly above looking down. Professional commercial photography, high quality, 4K resolution." 
  },
  { 
    id: "urethane-cement", 
    name: "Urethane Cement", 
    prompt: "Bird's eye view photograph of urethane cement flooring in a food processing facility. Textured non-slip surface with slight orange-peel texture, reddish-brown or terracotta color typical of food-grade urethane cement. Floor drains visible. Shot from directly above looking down. Professional commercial photography, high quality, 4K resolution." 
  },
  { 
    id: "esd-conductive", 
    name: "ESD/Conductive Flooring", 
    prompt: "Bird's eye view photograph of ESD conductive flooring in an electronics manufacturing cleanroom. Smooth static-dissipative surface in charcoal gray or black color with subtle conductive pattern. Ultra-clean environment. Shot from directly above looking down. Professional commercial photography, high quality, 4K resolution." 
  },
  { 
    id: "traffic-coating", 
    name: "Traffic Coatings", 
    prompt: "Bird's eye view photograph of traffic coating on a parking garage deck. Gray polyurethane deck coating with painted parking lines and directional arrows visible. Textured non-slip surface. Shot from directly above looking down. Professional commercial photography, high quality, 4K resolution." 
  },
  { 
    id: "polished-concrete", 
    name: "Polished Concrete", 
    prompt: "Bird's eye view photograph of polished concrete flooring in a modern commercial space. High-gloss mirror-like finish showing aggregate and natural concrete variations. Reflective surface catching light. Shot from directly above looking down. Professional commercial photography, high quality, 4K resolution." 
  },
];

const CATEGORY = "flooring-systems";
const OUTPUT_DIR = path.join(process.cwd(), "public", "images", CATEGORY);
const URL_PREFIX = `/images/${CATEGORY}`;

async function generateImage(product: typeof flooringSystems[0]): Promise<string | null> {
  try {
    console.log(`\nGenerating: ${product.name}...`);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp-image-generation" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: product.prompt }] }],
      generationConfig: {
        // @ts-expect-error - responseModalities for image generation
        responseModalities: ["IMAGE", "TEXT"]
      }
    });
    const imageParts = result.response.candidates?.[0]?.content?.parts?.filter((p: any) => p.inlineData?.mimeType?.startsWith('image/')) || [];
    if (!imageParts.length) { console.error(`No image generated for ${product.name}`); return null; }
    const imageData = (imageParts[0] as any).inlineData;
    const buffer = Buffer.from(imageData.data, 'base64');
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const filename = `${product.id}.${imageData.mimeType.split('/')[1] || 'png'}`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), buffer);
    console.log(`✓ Saved: ${filename}`);
    return `${URL_PREFIX}/${filename}`;
  } catch (e) { 
    console.error(`Error generating ${product.name}:`, e); 
    return null; 
  }
}

async function main() {
  console.log(`\n=== Generating Flooring System Images ===`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);
  
  const results: { name: string; url: string | null }[] = [];
  
  for (const flooring of flooringSystems) { 
    const url = await generateImage(flooring); 
    results.push({ name: flooring.name, url });
    // Rate limiting - wait 2 seconds between requests
    await new Promise(r => setTimeout(r, 2000)); 
  }
  
  console.log("\n=== Generation Complete ===");
  console.log("\nResults:");
  results.forEach(r => {
    console.log(`  ${r.name}: ${r.url || 'FAILED'}`);
  });
  
  console.log("\n\nTo use these images in Categories.tsx, update the flooringSystems array with:");
  console.log("image: '/images/flooring-systems/[id].png'");
}

main().catch(console.error);
