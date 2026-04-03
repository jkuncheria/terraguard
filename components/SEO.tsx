import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical,
  ogImage = '/abslogo.png'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.setAttribute(attribute === 'property' ? 'content' : 'content', content);
      } else {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', 'content', description);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', 'content', `https://www.absflooring.com${ogImage}`);
    }

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    if (ogImage) {
      updateMetaTag('meta[name="twitter:image"]', 'content', `https://www.absflooring.com${ogImage}`);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalElement) {
        canonicalElement.href = canonical;
      } else {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        canonicalElement.href = canonical;
        document.head.appendChild(canonicalElement);
      }
      
      // Also update og:url
      updateMetaTag('meta[property="og:url"]', 'content', canonical);
      updateMetaTag('meta[name="twitter:url"]', 'content', canonical);
    }

  }, [title, description, canonical, ogImage]);

  return null;
};

export default SEO;
