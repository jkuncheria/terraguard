import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { SEO_CONFIG } from '../../seoConfig';
import Contact from '../../components/Contact';
import { CheckCircle, Thermometer, Shield, Droplets, Award } from 'lucide-react';

const FoodBeverage: React.FC = () => {
  const seo = SEO_CONFIG.pages.foodBeverage;

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'USDA/FDA Compliant',
      description: 'All flooring systems meet strict food safety regulations for food contact and processing areas.',
    },
    {
      icon: <Thermometer className="w-8 h-8 text-blue-900" />,
      title: 'Thermal Shock Resistant',
      description: 'Withstands extreme temperature changes from hot washdowns to freezer environments.',
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      title: 'Chemical Resistant',
      description: 'Resists acids, caustics, fats, oils, and aggressive cleaning chemicals.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: 'Antimicrobial Options',
      description: 'Antimicrobial additives inhibit bacteria growth for enhanced food safety.',
    },
  ];

  const applications = [
    'Food Processing Plants',
    'Breweries & Distilleries',
    'Commercial Kitchens',
    'Dairy Processing',
    'Meat & Poultry Plants',
    'Bakeries',
    'Beverage Bottling',
    'Cold Storage & Freezers',
  ];

  const clients = ['JBS Harvest', 'Pepsi', 'Halal Guys'];

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
              <span className="text-green-500 font-semibold tracking-wider uppercase">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Food & Beverage Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                USDA-compliant flooring solutions engineered for the demanding environments of food processing, commercial kitchens, and beverage production. TerraGuard delivers floors that meet the highest standards for food safety and durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-500 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition text-center"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/urethane-cement"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded transition text-center"
                >
                  Learn About Urethane Cement
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-blue-800/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Trusted By:</h3>
                <ul className="space-y-3">
                  {clients.map((client, idx) => (
                    <li key={idx} className="flex items-center text-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Food-Safe Flooring Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flooring systems are specifically designed to meet the rigorous demands of food and beverage facilities.
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

      {/* Recommended Systems */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Flooring Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/urethane-cement" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Urethane Cement</h3>
              <p className="text-gray-600 mb-4">
                The gold standard for food processing. Thermal shock resistant, USDA compliant, and able to withstand the harshest cleaning protocols.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Withstands -40°F to 250°F
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Steam cleanable
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Seamless, hygienic surface
                </li>
              </ul>
            </Link>
            <Link to="/epoxy-flooring" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Epoxy Flooring</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective solution for dry processing areas, packaging, and warehousing where thermal shock is not a concern.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Chemical resistant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Easy to clean
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Slip-resistant options
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                TerraGuard has installed flooring in food and beverage facilities throughout Arizona, from small commercial kitchens to large-scale processing plants.
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
              <h3 className="text-2xl font-bold mb-4">Key Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>USDA/FDA compliance for food contact areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Thermal shock resistance for hot washdowns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Seamless, cove base installation for hygiene</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Slip-resistant textures for wet areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Fast cure times to minimize downtime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Food-Safe Flooring?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for a consultation on flooring solutions for your food or beverage facility.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-500 hover:bg-green-500 text-blue-900 font-bold py-4 px-10 rounded-lg shadow-lg transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Contact simplified={true} />
    </>
  );
};

export default FoodBeverage;
