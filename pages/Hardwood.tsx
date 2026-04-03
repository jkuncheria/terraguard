import React from 'react';
import HardwoodComponent from '../components/Hardwood';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Hardwood: React.FC = () => {
  const seo = SEO_CONFIG.pages.hardwood;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <HardwoodComponent />
    </>
  );
};

export default Hardwood;

