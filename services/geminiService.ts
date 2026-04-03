import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the "TerraGuard Smart Assistant". 
      You are an expert in interior design and flooring materials (Hardwood, Carpet, Tile, Luxury Vinyl, Laminate, Sheet Vinyl).
      TerraGuard Company is a full-service flooring company specializing in the installation of high-quality Hardwood, Laminate, Tile, Carpet and cabinetry.
      We are located at 1430 N 29th Ave, Phoenix, AZ 85009, serving Phoenix, Dallas, El Paso, Denver, Las Vegas, and beyond throughout the Southwestern United States with expert craftsmanship and reliable service.
      We offer free estimates and professional installation services.
      Your goal is to help customers choose the right flooring for their specific needs (pets, kids, moisture, budget).
      Keep answers concise, friendly, and encouraging.
      If asked about store location, mention we're located at 1430 N 29th Ave, Phoenix, AZ 85009.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to our design database. Please try again later.";
  }
};