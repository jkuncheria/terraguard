import React from 'react';
import TileComponent from '../components/Tile';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Tile: React.FC = () => {
  const seo = SEO_CONFIG.pages.tile;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <TileComponent />
    </>
  );
};

export default Tile;

