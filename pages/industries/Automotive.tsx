import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { SEO_CONFIG } from '../../seoConfig';
import Contact from '../../components/Contact';
import { CheckCircle, Wrench, Shield, Droplets, Car } from 'lucide-react';

const Automotive: React.FC = () => {
  const seo = SEO_CONFIG.pages.automotive;

  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      title: 'Chemical Resistant',
      description: 'Resists oils, fuels, brake fluid, antifreeze, and other automotive chemicals.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Impact Resistant',
      description: 'Withstands dropped tools, heavy equipment, and vehicle traffic.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-900" />,
      title: 'Easy to Clean',
      description: 'Seamless surface makes cleanup of spills and debris quick and efficient.',
    },
    {
      icon: <Car className="w-8 h-8 text-blue-900" />,
      title: 'Heavy Load Capacity',
      description: 'Engineered to support vehicle lifts, heavy machinery, and forklift traffic.',
    },
  ];

  const applications = [
    'Automotive Manufacturing',
    'Service Centers',
    'Dealership Showrooms',
    'Tire Manufacturing',
    'Parts Warehouses',
    'Body Shops',
    'Quick Lube Facilities',
    'Fleet Maintenance',
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
              <span className="text-yellow-500 font-semibold tracking-wider uppercase">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Automotive Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                Heavy-duty flooring solutions for automotive manufacturing, service centers, and dealerships. TerraGuard delivers chemical-resistant, durable floors that stand up to the toughest automotive environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition text-center"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/epoxy-flooring"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded transition text-center"
                >
                  Learn About Epoxy
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-blue-800/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Trusted By:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Goodyear
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Automotive Dealerships
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Service Centers
                  </li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Automotive Environments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flooring systems are engineered to handle the unique challenges of automotive facilities.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/epoxy-flooring" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Epoxy Flooring</h3>
              <p className="text-gray-600 mb-4">
                High-performance epoxy for service bays, manufacturing floors, and warehouses.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Chemical resistant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  High gloss finish
                </li>
              </ul>
            </Link>
            <Link to="/urethane-cement" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Urethane Cement</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty option for areas with extreme chemical exposure or thermal stress.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Superior durability
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Impact resistant
                </li>
              </ul>
            </Link>
            <Link to="/polished-concrete" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Polished Concrete</h3>
              <p className="text-gray-600 mb-4">
                Attractive, low-maintenance option for showrooms and customer-facing areas.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Professional appearance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Easy maintenance
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
                From tire manufacturing to dealership showrooms, TerraGuard provides flooring solutions for every automotive application.
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
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Resistance to oils, fuels, and automotive fluids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Heavy load capacity for lifts and equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Slip-resistant surfaces for safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Easy cleanup of spills and debris</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Professional appearance for customer areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Automotive-Grade Flooring?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for a consultation on flooring solutions for your automotive facility.
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

export default Automotive;
