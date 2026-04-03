import React from 'react';
import LaminateComponent from '../components/Laminate';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Laminate: React.FC = () => {
  const seo = SEO_CONFIG.pages.laminate;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <LaminateComponent />
    </>
  );
};

export default Laminate;

