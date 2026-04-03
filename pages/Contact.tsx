import React from 'react';
import ContactComponent from '../components/Contact';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Contact: React.FC = () => {
  const seo = SEO_CONFIG.pages.contact;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <ContactComponent />
    </>
  );
};

export default Contact;

