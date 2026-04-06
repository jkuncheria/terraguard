import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import { SEO_CONFIG } from '../seoConfig';
import Contact from '../components/Contact';
import { CheckCircle, Droplets, Sun, Shield } from 'lucide-react';

const TrafficCoating: React.FC = () => {
  const seo = SEO_CONFIG.pages.trafficCoating;

  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      title: 'Waterproof Membrane',
      description: 'Creates a seamless, impermeable barrier that protects structural concrete from water infiltration.',
    },
    {
      icon: <Sun className="w-8 h-8 text-blue-900" />,
      title: 'UV Stable',
      description: 'Resists fading, chalking, and degradation from Arizona\'s intense sun exposure.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Abrasion Resistant',
      description: 'Engineered to withstand heavy vehicular and pedestrian traffic without wearing through.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Crack Bridging',
      description: 'Flexible formulation bridges existing cracks and accommodates thermal movement.',
    },
  ];

  const applications = [
    'Parking Structures',
    'Parking Decks',
    'Pedestrian Walkways',
    'Stadium Concourses',
    'Balconies & Terraces',
    'Mechanical Rooms',
    'Loading Docks',
    'Ramps & Transitions',
  ];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <ServiceSchema
        serviceName="Traffic Coating Systems Installation"
        serviceType="Traffic Coating"
        description="Durable traffic coating systems for parking structures, pedestrian walkways, and high-traffic commercial areas. Waterproof membrane protection."
        url="/traffic-coating"
        image="/images/flooring/traffic-coating.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-500 font-semibold tracking-wider uppercase">Flooring Systems</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Traffic Coating Systems</h1>
              <p className="text-xl text-gray-300 mb-8">
                Protect your parking structures, walkways, and high-traffic areas with durable traffic coating systems. TerraGuard installs waterproof, slip-resistant coatings that extend the life of your concrete surfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-500 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition text-center"
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
                  src="/images/flooring-systems/traffic-coating.png" 
                  alt="Traffic coating systems for parking structures in Arizona by TerraGuard"
                  loading="lazy"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Traffic Coating?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Traffic coatings provide essential protection for concrete surfaces exposed to vehicles, pedestrians, and the elements.
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

      {/* System Types Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Traffic Coating Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Vehicular Traffic</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty systems for parking structures and drive lanes with high abrasion resistance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  40-60 mil DFT
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Aggregate broadcast
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  High wear resistance
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Pedestrian Traffic</h3>
              <p className="text-gray-600 mb-4">
                Slip-resistant coatings for walkways, stairs, and public areas with decorative options.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  20-40 mil DFT
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Multiple colors
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  ADA compliant
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Waterproofing</h3>
              <p className="text-gray-600 mb-4">
                Membrane systems that prevent water infiltration into structural concrete.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Seamless application
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Crack bridging
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Corrosion protection
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                Traffic coating systems protect and extend the service life of concrete surfaces in commercial, industrial, and institutional facilities.
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
                  <span className="font-semibold">20-60 mils</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Elongation</span>
                  <span className="font-semibold">300%+</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">Tensile Strength</span>
                  <span className="font-semibold">2,500+ PSI</span>
                </li>
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span className="text-gray-300">UV Resistance</span>
                  <span className="font-semibold">Excellent</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Service Life</span>
                  <span className="font-semibold">10-15 Years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Investment</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for traffic coating solutions that protect your concrete structures.
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

export default TrafficCoating;
