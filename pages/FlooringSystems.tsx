import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';
import { CATEGORIES } from '../constants';
import Contact from '../components/Contact';

const FlooringSystems: React.FC = () => {
  const seo = SEO_CONFIG.pages.flooringSystems;

  const flooringSystems = [
    {
      id: 'epoxy',
      name: 'Epoxy Flooring',
      href: '/epoxy-flooring',
      description: 'High-performance epoxy coatings for industrial and commercial environments. Chemical resistant, durable, and customizable.',
      features: ['Chemical Resistant', 'High Durability', 'Seamless Finish', 'Custom Colors'],
    },
    {
      id: 'urethane-cement',
      name: 'Urethane Cement',
      href: '/urethane-cement',
      description: 'Heavy-duty flooring for extreme environments. Thermal shock resistant and USDA compliant for food processing.',
      features: ['Thermal Shock Resistant', 'USDA Compliant', 'Steam Cleanable', 'Impact Resistant'],
    },
    {
      id: 'esd-conductive',
      name: 'ESD/Conductive Flooring',
      href: '/esd-conductive',
      description: 'Static-dissipative flooring for electronics, aerospace, and sensitive manufacturing environments.',
      features: ['Static Control', 'ANSI/ESD Compliant', 'Grounding Systems', 'Clean Room Compatible'],
    },
    {
      id: 'traffic-coating',
      name: 'Traffic Coating',
      href: '/traffic-coating',
      description: 'Durable waterproof membranes for parking structures, walkways, and high-traffic commercial areas.',
      features: ['Waterproof', 'UV Stable', 'Slip Resistant', 'Crack Bridging'],
    },
    {
      id: 'polished-concrete',
      name: 'Polished & Sealed Concrete',
      href: '/polished-concrete',
      description: 'Professional concrete polishing and sealing for retail, warehouses, and commercial spaces.',
      features: ['Low Maintenance', 'Reflective Finish', 'Dust Proof', 'Cost Effective'],
    },
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
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Flooring Systems</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TerraGuard provides complete industrial and commercial flooring solutions. From high-performance epoxy to specialized ESD flooring, we deliver durable, code-compliant installations for Arizona's most demanding environments.
          </p>
        </div>
      </section>

      {/* Flooring Systems Grid */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Flooring Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each flooring system is engineered for specific applications. Our team will help you select the right solution for your facility's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flooringSystems.map((system) => (
              <Link
                key={system.id}
                to={system.href}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{system.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {system.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{system.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {system.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-900 text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shot Blasting Video Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-green-500 font-semibold tracking-wider text-sm uppercase mb-4">Surface Preparation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shot Blasting Technology</h2>
              <p className="text-gray-600 mb-6">
                Proper surface preparation is critical for flooring system longevity. Our shot blasting equipment removes contaminants and creates the ideal surface profile for coating adhesion.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Removes old coatings and contaminants
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Creates optimal surface profile for adhesion
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dust-free operation with vacuum recovery
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Environmentally friendly process
                </li>
              </ul>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <video 
                className="w-full h-full object-contain"
                controls
                preload="metadata"
                playsInline
                title="Shot blasting concrete surface preparation by TerraGuard Arizona flooring contractor"
                aria-label="Video demonstrating shot blasting equipment preparing concrete surface for industrial flooring installation"
              >
                <source src="/TerraGuard-Images/shot-blaster.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flooring systems are trusted by leading companies across multiple industries throughout Arizona.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Food & Beverage', href: '/industries/food-beverage' },
              { name: 'Automotive', href: '/industries/automotive' },
              { name: 'Manufacturing', href: '/industries/manufacturing' },
              { name: 'Aerospace', href: '/industries/aerospace' },
              { name: 'Sports & Entertainment', href: '/industries/sports-entertainment' },
            ].map((industry) => (
              <Link
                key={industry.name}
                to={industry.href}
                className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-900">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-16 px-4 md:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center gap-8 text-xl text-gray-300">
            <span>Arizona State University</span>
            <span>•</span>
            <span>Pepsi</span>
            <span>•</span>
            <span>JBS Harvest</span>
            <span>•</span>
            <span>University of Arizona</span>
            <span>•</span>
            <span>Royal Oaks</span>
          </div>
        </div>
      </section>

      <Contact simplified={true} />
    </>
  );
};

export default FlooringSystems;
