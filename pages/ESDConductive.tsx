import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';
import Contact from '../components/Contact';
import { CheckCircle, Zap, Shield, Cpu } from 'lucide-react';

const ESDConductive: React.FC = () => {
  const seo = SEO_CONFIG.pages.esdConductive;

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Static Dissipative',
      description: 'Safely dissipates electrostatic charges to protect sensitive electronics and personnel.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'ANSI/ESD Compliant',
      description: 'Meets ANSI/ESD S20.20 and other industry standards for electrostatic discharge control.',
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-900" />,
      title: 'Clean Room Compatible',
      description: 'Low particle generation suitable for ISO Class 5-8 clean room environments.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Permanent Protection',
      description: 'Conductive properties are integral to the flooring, not a topical treatment that wears off.',
    },
  ];

  const applications = [
    'Electronics Manufacturing',
    'Aerospace Facilities',
    'Data Centers',
    'Semiconductor Plants',
    'Medical Device Manufacturing',
    'Munitions Facilities',
    'Clean Rooms',
    'Server Rooms',
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
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">ESD & Conductive Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                Protect sensitive electronics, equipment, and personnel with professional ESD flooring systems. TerraGuard installs static-dissipative and conductive flooring that meets the strictest industry standards.
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
                  src="/images/flooring-systems/esd-conductive.png" 
                  alt="ESD Conductive Flooring"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why ESD Flooring?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Electrostatic discharge can damage sensitive components, corrupt data, and create safety hazards. Our ESD flooring provides reliable, permanent protection.
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

      {/* ESD Types Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ESD Flooring Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Static Dissipative</h3>
              <p className="text-gray-600 mb-4">
                Resistance range: 1.0 x 10⁶ to 1.0 x 10⁹ ohms. Provides controlled, slower discharge of static electricity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Electronics assembly areas
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Computer rooms
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  General ESD protection
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Conductive</h3>
              <p className="text-gray-600 mb-4">
                Resistance range: 2.5 x 10⁴ to 1.0 x 10⁶ ohms. Provides rapid discharge for highly sensitive environments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Munitions handling
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Explosive environments
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Critical semiconductor areas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">System Resistance</span>
                  <span className="font-semibold">10⁴ - 10⁹ ohms</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Body Voltage Generation</span>
                  <span className="font-semibold">&lt;100V</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Standards Compliance</span>
                  <span className="font-semibold">ANSI/ESD S20.20</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Grounding</span>
                  <span className="font-semibold">Copper Grid System</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Clean Room Rating</span>
                  <span className="font-semibold">ISO Class 5-8</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                Our ESD flooring systems are installed in facilities where static control is critical to operations, safety, and product quality.
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Sensitive Operations</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for ESD flooring solutions that meet your facility's specific requirements.
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

export default ESDConductive;
