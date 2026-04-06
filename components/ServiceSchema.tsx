import React, { useEffect } from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  serviceType,
  description,
  url,
  image = '/TerraGuard-Images/terraguard-transparent.png',
  areaServed = ['Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Tucson', 'Arizona']
}) => {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType,
      "name": serviceName,
      "description": description,
      "url": `https://www.terraguardusa.com${url}`,
      "image": `https://www.terraguardusa.com${image}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "TerraGuard",
        "url": "https://www.terraguardusa.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3414 S. 48th Street, Suite #1",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85040",
          "addressCountry": "US"
        }
      },
      "areaServed": areaServed.map(area => ({
        "@type": "City",
        "name": area
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": serviceName,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": serviceName
            }
          }
        ]
      }
    };

    // Remove existing service schema if present
    const existingScript = document.querySelector(`script[data-schema="service-${url}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new service schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', `service-${url}`);
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(`script[data-schema="service-${url}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [serviceName, serviceType, description, url, image, areaServed]);

  return null;
};

export default ServiceSchema;
