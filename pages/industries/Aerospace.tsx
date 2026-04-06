import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { SEO_CONFIG } from '../../seoConfig';
import Contact from '../../components/Contact';
import { CheckCircle, Zap, Shield, Plane, Cpu } from 'lucide-react';

const Aerospace: React.FC = () => {
  const seo = SEO_CONFIG.pages.aerospace;

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'ESD Protection',
      description: 'Static-dissipative flooring protects sensitive avionics and electronic components.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Chemical Resistant',
      description: 'Resists aviation fuels, hydraulic fluids, and cleaning solvents.',
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-900" />,
      title: 'Clean Room Compatible',
      description: 'Low particle generation for precision manufacturing environments.',
    },
    {
      icon: <Plane className="w-8 h-8 text-blue-900" />,
      title: 'Heavy Load Capacity',
      description: 'Supports aircraft, heavy equipment, and specialized tooling.',
    },
  ];

  const applications = [
    'Aircraft Manufacturing',
    'MRO Facilities',
    'Avionics Assembly',
    'Component Manufacturing',
    'Hangars',
    'Paint Booths',
    'Clean Rooms',
    'Testing Facilities',
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
              <span className="text-green-500 font-semibold tracking-wider uppercase">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Aerospace Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                Specialized flooring solutions for aerospace manufacturing, MRO facilities, and aviation support operations. TerraGuard delivers floors that meet the stringent requirements of the aerospace industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-500 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition text-center"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/esd-conductive"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded transition text-center"
                >
                  Learn About ESD Flooring
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-blue-800/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">We Serve:</h3>
                <ul className="space-y-2">
                  {applications.slice(0, 5).map((app, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {app}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aerospace-Grade Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flooring systems meet the demanding requirements of aerospace manufacturing and maintenance facilities.
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
            <Link to="/esd-conductive" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">ESD/Conductive</h3>
              <p className="text-gray-600 mb-4">
                Essential for avionics assembly and areas with sensitive electronic components.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  ANSI/ESD compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Clean room compatible
                </li>
              </ul>
            </Link>
            <Link to="/epoxy-flooring" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Epoxy Flooring</h3>
              <p className="text-gray-600 mb-4">
                High-performance coating for hangars, maintenance bays, and general aerospace facilities.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Chemical resistant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Heavy load capacity
                </li>
              </ul>
            </Link>
            <Link to="/urethane-cement" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Urethane Cement</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty option for areas with extreme chemical exposure or thermal cycling.
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
                TerraGuard provides flooring solutions for aerospace facilities throughout Arizona, home to a thriving aerospace industry.
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
                  <span>ESD protection for sensitive electronics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Resistance to aviation fuels and hydraulic fluids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Heavy load capacity for aircraft and equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Clean room compatibility where required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Safety markings and line striping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Aerospace-Grade Flooring?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for a consultation on flooring solutions for your aerospace facility.
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

export default Aerospace;
