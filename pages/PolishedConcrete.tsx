import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Sparkles, ArrowRight, Zap, Phone, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const PolishedConcrete: React.FC = () => {
  const seo = SEO_CONFIG.pages.polishedConcrete;

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Extreme Durability',
      description: 'Polished concrete is one of the most durable flooring options available, capable of withstanding heavy commercial traffic for decades.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Modern Aesthetic',
      description: 'Achieve a sleek, contemporary look with a high-gloss finish that reflects light and enhances your commercial space.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Low Maintenance',
      description: 'Easy to clean and maintain. Polished concrete requires minimal upkeep compared to other flooring types.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Cost Effective',
      description: 'Transform existing concrete slabs into beautiful floors without the need for additional materials or extensive preparation.'
    }
  ];

  const applications = [
    'Warehouses & Distribution Centers',
    'Manufacturing Facilities',
    'Retail & Showrooms',
    'Sports & Entertainment Venues',
    'Office Buildings',
    'Educational Institutions',
    'Automotive Dealerships',
    'Convention Centers'
  ];

  const process = [
    {
      step: '1',
      title: 'Surface Preparation',
      description: 'We begin by thoroughly cleaning and preparing the concrete surface, removing any existing coatings or contaminants.'
    },
    {
      step: '2',
      title: 'Grinding & Honing',
      description: 'Using specialized diamond-impregnated tools, we grind the surface to achieve the desired level of smoothness and aggregate exposure.'
    },
    {
      step: '3',
      title: 'Polishing',
      description: 'Progressive polishing with finer grits creates the smooth, reflective surface that defines polished concrete.'
    },
    {
      step: '4',
      title: 'Sealing & Protection',
      description: 'A high-performance sealer is applied to protect the surface and enhance its appearance and durability.'
    }
  ];

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">POLISHED CONCRETE</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Polished Concrete Flooring for Commercial Spaces
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your existing concrete floors into stunning, durable surfaces with our professional polished concrete services. 
                Perfect for commercial spaces seeking a modern, low-maintenance flooring solution that combines beauty with exceptional durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:16024151919" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/images/flooring-systems/polished-concrete.png" 
                  alt="Polished Concrete Flooring" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Polished Concrete?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Polished concrete offers unmatched durability and a modern aesthetic that's perfect for commercial applications.
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
              Perfect for Commercial Applications
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Polished concrete is ideal for a wide range of commercial environments where durability and aesthetics matter.
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

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Polishing Process
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team follows a proven process to deliver exceptional polished concrete results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
                <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Concrete Floors?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact TerraGuard today for a free consultation and quote on polished concrete flooring for your commercial space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:16024151919" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 602-415-1919
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default PolishedConcrete;


