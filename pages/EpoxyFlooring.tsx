import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Sparkles, ArrowRight, Zap, Phone, Droplet } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import { SEO_CONFIG } from '../seoConfig';

const EpoxyFlooring: React.FC = () => {
  const seo = SEO_CONFIG.pages.epoxyFlooring;

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Extreme Durability',
      description: 'Epoxy flooring is one of the most durable commercial flooring options, resistant to chemicals, impacts, and heavy traffic.'
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-900" />,
      title: 'Chemical Resistant',
      description: 'Perfect for industrial and commercial environments where chemical spills and exposure are common concerns.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Seamless Surface',
      description: 'Creates a seamless, easy-to-clean surface with no grout lines or joints where dirt and bacteria can accumulate.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Quick Installation',
      description: 'Epoxy can be installed quickly, minimizing downtime for your commercial operations.'
    }
  ];

  const applications = [
    'Manufacturing Facilities',
    'Warehouses & Distribution Centers',
    'Automotive Service Centers',
    'Food Processing Plants',
    'Aerospace Facilities',
    'Pharmaceutical Plants',
    'Commercial Kitchens',
    'Sports & Entertainment Venues'
  ];

  const epoxyTypes = [
    {
      name: 'Standard Epoxy',
      description: 'Cost-effective solution for general commercial use. Provides excellent durability and chemical resistance.'
    },
    {
      name: 'Self-Leveling Epoxy',
      description: 'Creates a perfectly smooth, level surface ideal for areas requiring a seamless finish.'
    },
    {
      name: 'Quartz-Filled Epoxy',
      description: 'Enhanced durability and slip resistance, perfect for high-traffic areas and wet environments.'
    },
    {
      name: 'Metallic Epoxy',
      description: 'Decorative option that creates stunning visual effects with metallic pigments and patterns.'
    }
  ];

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <ServiceSchema
        serviceName="Epoxy Flooring Installation"
        serviceType="Epoxy Flooring"
        description="Professional epoxy flooring installation for commercial and industrial facilities in Arizona. Durable, chemical-resistant coatings for warehouses, manufacturing, and food processing."
        url="/epoxy-flooring"
        image="/images/flooring/epoxy-flooring.png"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-500 font-semibold tracking-wider uppercase">Flooring Systems</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Epoxy Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                Durable, chemical-resistant epoxy flooring solutions for commercial and industrial environments. 
                Perfect for facilities that require extreme durability, easy maintenance, and seamless surfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded shadow-lg transition text-center"
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
                  src="/images/flooring-systems/epoxy-flooring.png" 
                  alt="Commercial epoxy flooring installation in Arizona warehouse by TerraGuard" 
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Epoxy Flooring?
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Epoxy flooring offers unmatched durability and performance for demanding commercial and industrial environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-lg">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-20 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal Commercial & Industrial Applications
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Epoxy flooring is perfect for facilities that require extreme durability and easy maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Epoxy Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Epoxy Flooring
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various epoxy systems to meet your specific commercial or industrial needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {epoxyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Epoxy Flooring Installation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact TerraGuard today for a free consultation and quote on epoxy flooring for your commercial or industrial facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-green-500 hover:bg-green-500 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:18556837720" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 855-683-7720
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default EpoxyFlooring;

