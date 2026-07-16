import React from 'react';
import { Handshake } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const Partners: React.FC = () => {
  const partners: Partner[] = [
    { name: 'Key Resin', logo: '/TerraGuard-Images/Partner-Logos/key-resin.png', url: 'https://www.keyresin.com/' },
    { name: 'FlowResin', logo: '/TerraGuard-Images/Partner-Logos/flow-resin.png', url: 'https://www.flowresinamericas.com/' },
    { name: 'Sika', logo: '/TerraGuard-Images/Partner-Logos/sika.webp', url: 'https://usa.sika.com/' },
    { name: 'Westcoat', logo: '/TerraGuard-Images/Partner-Logos/westcoat.jpg', url: 'https://www.westcoat.com/' },
    { name: 'Sherwin-Williams', logo: '/TerraGuard-Images/Partner-Logos/sherwin.png', url: 'https://www.sherwin-williams.com/' },
    { name: 'Polycoat', logo: '/TerraGuard-Images/Partner-Logos/polycoat.png', url: 'https://www.polycoatusa.com/' },
    { name: 'Crown Polymers', logo: '/TerraGuard-Images/Partner-Logos/crown.webp', url: 'https://crownpolymers.com/' },
    { name: 'Desert Polymer Flooring', logo: '/TerraGuard-Images/Partner-Logos/desert.svg', url: 'https://desertpolymerflooring.com/' },
  ];

  return (
    <section className="py-20 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
            <Handshake className="w-8 h-8 text-green-400" />
          </div>
          <span className="block text-blue-900 font-bold tracking-wider text-sm uppercase mb-3">
            Partners & Manufacturers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Work With Industry-Leading Brands
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a certified applicator, TerraGuard installs flooring systems from the most trusted manufacturers in the industry to deliver the highest quality results on every project.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 md:p-8 flex items-center justify-center shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300"
              title={`Visit ${partner.name}`}
              aria-label={`Visit ${partner.name} website`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} - TerraGuard partner manufacturer logo`}
                loading="lazy"
                className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
