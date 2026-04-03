# Blog Creation Process for TerraGuard

This document outlines the complete process used to create SEO-optimized blog articles for the TerraGuard website.

---

## Overview

Three blog articles were created following a consistent, comprehensive process:

1. **How Retail Flooring Impacts Customer Experience and Sales** (Feb 4, 2026)
2. **LVT vs. Hardwood Flooring: Which Is Right for Your Commercial Space?** (Jan 30, 2026)
3. **2026 Commercial Flooring Trends: What Phoenix Business Owners Need to Know** (Jan 25, 2026)

---

## Step-by-Step Process

### Phase 1: Research & Content Gathering

#### 1.1 Deep Web Research
For each topic, conduct extensive web searches to gather:
- Industry statistics and data points
- Expert quotes and insights
- Current trends and best practices
- Competitor content analysis

**Search queries used:**
```
- "[topic] commercial flooring 2025 2026"
- "[topic] statistics research studies"
- "[topic] expert insights trends"
- "site:youtube.com [topic] flooring"
```

#### 1.2 Source Reading
- Read multiple authoritative sources (3-5 minimum)
- Extract key facts, statistics, and quotes
- Note source URLs for outbound linking
- Identify gaps in existing content to fill

#### 1.3 Video Research
Search YouTube for relevant, high-quality videos:
```
site:youtube.com [topic] flooring comparison
```

**Selection criteria:**
- Professional quality
- Relevant to article topic
- Recent (within 1-2 years)
- Good view count/engagement
- Educational rather than promotional

---

### Phase 2: Content Structure & Writing

#### 2.1 Article Structure Template

```
1. Hero Section
   - Breadcrumb navigation
   - Category tag
   - H1 title
   - Author, date, read time

2. Featured Image
   - High-quality relevant image
   - Descriptive caption

3. Introduction
   - Hook with compelling statistic
   - Problem/opportunity statement
   - What the reader will learn

4. Table of Contents
   - Scannable list of main sections

5. Main Content Sections (5-8 sections)
   - H2 headings for main topics
   - H3 headings for subtopics
   - Mix of paragraphs, lists, tables, callout boxes
   - Embedded videos at strategic points
   - Images breaking up long text

6. FAQ Section
   - 5 common questions
   - Comprehensive answers
   - Schema markup for rich snippets

7. Conclusion
   - Summary of key points
   - Call to action

8. Author Bio
   - Company credentials
   - E-E-A-T signals
   - Trust badges

9. CTA Box
   - Clear value proposition
   - Contact button
   - Phone number

10. Share Section
    - Social sharing buttons

11. Related Posts
    - 3 related articles/pages
```

#### 2.2 Writing Guidelines

- **Word count:** 2,500-3,500 words for comprehensive coverage
- **Tone:** Professional, informative, helpful
- **Local focus:** Phoenix/Scottsdale/Arizona mentions throughout
- **Keyword integration:** Natural placement, not forced
- **Readability:** Short paragraphs, bullet points, visual breaks

---

### Phase 3: SEO Optimization

#### 3.1 On-Page SEO Elements

| Element | Implementation |
|---------|----------------|
| Title Tag | `[Primary Keyword] | TerraGuard` (50-60 chars) |
| Meta Description | Compelling summary with keywords (150-160 chars) |
| H1 | One per page, includes primary keyword |
| H2/H3 | Logical hierarchy, keyword variations |
| URL Slug | Short, descriptive, hyphenated |
| Image Alt Text | Descriptive, keyword-rich, location-specific |

#### 3.2 Structured Data (JSON-LD Schema)

Three schema types implemented per article:

**1. Article Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Meta description",
  "image": "https://www.absflooring.com/image.webp",
  "author": {
    "@type": "Organization",
    "name": "TerraGuard",
    "url": "https://www.absflooring.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TerraGuard",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.absflooring.com/abslogo.png"
    }
  },
  "datePublished": "2026-01-25",
  "dateModified": "2026-01-25",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.absflooring.com/blog/article-slug"
  }
}
```

**2. Breadcrumb Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://..." },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://..." },
    { "@type": "ListItem", "position": 3, "name": "Article Title", "item": "https://..." }
  ]
}
```

**3. FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comprehensive answer text."
      }
    }
  ]
}
```

#### 3.3 E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trustworthiness)

- **Author bio** with credentials (100+ years combined experience)
- **Certifications mentioned** (ICRI certified)
- **Local expertise** (Phoenix, Scottsdale, Arizona focus)
- **Outbound links** to authoritative sources
- **Contact information** prominently displayed

#### 3.4 Internal Linking Strategy

Each article includes links to:
- Other blog posts (related content)
- Service pages (`/commercial`, `/luxury-vinyl`, `/hardwood`)
- Contact page
- Project gallery

#### 3.5 External/Outbound Links

Link to 2-3 authoritative external sources per article:
- Industry publications (ArchDaily, Better Homes & Gardens)
- Research organizations (National Retail Federation)
- Manufacturer resources (Mannington Commercial, Stonhard)

**Link format:**
```html
<a href="URL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
  Source Name
</a>
```

---

### Phase 4: Media Integration

#### 4.1 Images

**Sources used:**
- Existing project gallery images (`/Project-Gallery/`)
- Product images (`/products/`)

**Image optimization checklist:**
- [ ] WebP format for performance
- [ ] Descriptive filename
- [ ] Alt text with keywords + location
- [ ] Lazy loading for below-fold images
- [ ] Caption with context

**Alt text formula:**
```
[Description] in [Location] - [Service type] by TerraGuard [additional context]
```

**Example:**
```
"Commercial hardwood flooring installation in Phoenix office space - comparing LVT vs hardwood flooring options by TerraGuard"
```

#### 4.2 Video Embeds

**YouTube embed format:**
```jsx
<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
  <iframe 
    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Descriptive Title"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

**Placement strategy:**
- First video: After introduction/first major section
- Second video: Middle of article
- Third video: Before conclusion

---

### Phase 5: Technical Implementation

#### 5.1 File Structure

```
/pages/
  Blog.tsx                        # Blog listing page
  BlogPost-RetailFlooring.tsx     # Article 1
  BlogPost-LVTvsHardwood.tsx      # Article 2
  BlogPost-FlooringTrends2026.tsx # Article 3
```

#### 5.2 Required Updates Per Article

1. **Create article component** (`/pages/BlogPost-[Name].tsx`)
2. **Update Blog.tsx** - Add to `blogPosts` array
3. **Update App.tsx** - Add import and route
4. **Update seoConfig.ts** - Add SEO configuration

#### 5.3 Blog Listing Array Structure

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  // Ordered by date (newest first)
  { id: '1', slug: 'article-slug', ... },
];
```

#### 5.4 Routing

```tsx
// App.tsx
import BlogPostName from './pages/BlogPost-Name';

<Route path="/blog/article-slug" element={<BlogPostName />} />
```

---

### Phase 6: Quality Checklist

#### Content Quality
- [ ] 2,500+ words of original content
- [ ] Compelling introduction with hook
- [ ] Clear, logical structure
- [ ] Actionable insights for readers
- [ ] Local (Phoenix/Arizona) relevance
- [ ] Professional tone throughout

#### SEO Quality
- [ ] Title tag optimized (50-60 chars)
- [ ] Meta description compelling (150-160 chars)
- [ ] H1 contains primary keyword
- [ ] H2/H3 hierarchy logical
- [ ] Article schema implemented
- [ ] Breadcrumb schema implemented
- [ ] FAQ schema implemented (5 questions)
- [ ] Image alt text optimized
- [ ] Internal links included (3-5)
- [ ] External authority links (2-3)

#### Technical Quality
- [ ] Component renders without errors
- [ ] Route added to App.tsx
- [ ] SEO config added
- [ ] Blog listing updated
- [ ] Images load correctly
- [ ] Videos embed properly
- [ ] Mobile responsive
- [ ] Social share buttons work

#### E-E-A-T Signals
- [ ] Author bio included
- [ ] Credentials mentioned
- [ ] Contact information visible
- [ ] Trust badges displayed
- [ ] Publication date shown

---

## SEO Scoring Rubric

| Factor | Max Points | Criteria |
|--------|------------|----------|
| Keyword Targeting | 10 | Primary + secondary keywords naturally integrated |
| Content Depth | 10 | Comprehensive coverage, 2,500+ words |
| Internal Linking | 10 | 3-5 relevant internal links |
| External Links | 10 | 2-3 authoritative outbound links |
| Schema Markup | 10 | Article + Breadcrumb + FAQ schemas |
| Image Optimization | 10 | Alt text, lazy loading, WebP format |
| E-E-A-T Signals | 10 | Author bio, credentials, trust signals |
| Meta Tags | 10 | Optimized title and description |
| User Experience | 10 | Readable, scannable, visual breaks |
| Local SEO | 10 | Phoenix/Scottsdale/Arizona mentions |

**Target Score: 85+/100**

---

## Tools & Resources Used

### Research
- Web search for industry data
- YouTube for video content
- Competitor analysis

### Content
- React/TypeScript for components
- Tailwind CSS for styling
- Lucide React for icons

### SEO
- JSON-LD for structured data
- SEO component for meta tags

---

## Maintenance & Updates

### Monthly Tasks
- Review analytics for top-performing content
- Update statistics and data points
- Check for broken links
- Refresh outdated information

### Quarterly Tasks
- Add new blog posts
- Update internal linking
- Review and refresh older posts
- Check schema markup validity

### Annual Tasks
- Comprehensive content audit
- Keyword research refresh
- Competitor analysis
- Strategy review

---

## File Locations Reference

| File | Purpose |
|------|---------|
| `/pages/Blog.tsx` | Blog listing page |
| `/pages/BlogPost-*.tsx` | Individual article components |
| `/App.tsx` | Route definitions |
| `/seoConfig.ts` | SEO metadata configuration |
| `/constants.tsx` | Navigation items (includes Blog link) |
| `/components/SEO.tsx` | SEO component for meta tags |

---

*Document created: February 4, 2026*
*Last updated: February 4, 2026*
