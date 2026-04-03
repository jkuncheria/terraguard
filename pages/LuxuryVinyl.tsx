import React from 'react';
import LuxuryVinylComponent from '../components/LuxuryVinyl';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const LuxuryVinyl: React.FC = () => {
  const seo = SEO_CONFIG.pages.luxuryVinyl;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <LuxuryVinylComponent />
    </>
  );
};

export default LuxuryVinyl;

