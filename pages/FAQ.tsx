import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const FAQ: React.FC = () => {
  const seo = SEO_CONFIG.pages.faq;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

