import React from 'react';
import CarpetComponent from '../components/Carpet';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Carpet: React.FC = () => {
  const seo = SEO_CONFIG.pages.carpet;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <CarpetComponent />
    </>
  );
};

export default Carpet;

