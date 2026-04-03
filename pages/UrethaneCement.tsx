import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';
import Contact from '../components/Contact';
import { CheckCircle, Thermometer, Shield, Droplets } from 'lucide-react';

const UrethaneCement: React.FC = () => {
  const seo = SEO_CONFIG.pages.urethaneCement;

  const features = [
    {
      icon: <Thermometer className="w-8 h-8 text-blue-900" />,
      title: 'Thermal Shock Resistant',
      description: 'Withstands extreme temperature fluctuations from steam cleaning, hot water washdowns, and freezer environments.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'USDA/FDA Compliant',
      description: 'Meets strict food safety standards for food processing, beverage production, and pharmaceutical facilities.',
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      title: 'Chemical Resistant',
      description: 'Resists acids, alkalis, fats, oils, and aggressive cleaning chemicals used in industrial environments.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Seamless & Hygienic',
      description: 'Monolithic surface with integral cove bases eliminates bacteria harborage points.',
    },
  ];

  const applications = [
    'Food Processing Plants',
    'Breweries & Distilleries',
    'Commercial Kitchens',
    'Dairy Facilities',
    'Meat Processing',
    'Pharmaceutical Manufacturing',
    'Chemical Plants',
    'Cold Storage Facilities',
  ];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-500 font-semibold tracking-wider uppercase">Flooring Systems</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Urethane Cement Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                The ultimate flooring solution for food & beverage, pharmaceutical, and heavy industrial environments. Urethane cement combines exceptional durability with thermal shock resistance and full regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition text-center"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/flooring-systems"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded transition text-center"
                >
                  All Flooring Systems
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/flooring-systems/urethane-cement.png" 
                  alt="Urethane Cement Flooring"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Urethane Cement?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Urethane cement flooring is engineered for the most demanding industrial environments where standard epoxy systems fall short.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                Urethane cement is the preferred flooring system for facilities that require thermal shock resistance, chemical resistance, and strict hygiene standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-900 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Thickness</span>
                  <span className="font-semibold">1/4" - 3/8"</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Temperature Range</span>
                  <span className="font-semibold">-40°F to 250°F</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Compressive Strength</span>
                  <span className="font-semibold">8,000+ PSI</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Chemical Resistance</span>
                  <span className="font-semibold">Excellent</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Cure Time</span>
                  <span className="font-semibold">24-48 Hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Flooring Solution That Performs?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for a consultation on urethane cement flooring for your facility.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-lg shadow-lg transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Contact simplified={true} />
    </>
  );
};

export default UrethaneCement;
