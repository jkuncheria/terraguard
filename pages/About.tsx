import React from 'react';
import AboutComponent from '../components/About';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const About: React.FC = () => {
  const seo = SEO_CONFIG.pages.about;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <AboutComponent />
    </>
  );
};

export default About;

