import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Sparkles, ArrowRight, Zap, Phone, Palette } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const StainedConcrete: React.FC = () => {
  const seo = SEO_CONFIG.pages.stainedConcrete;

  const benefits = [
    {
      icon: <Palette className="w-8 h-8 text-blue-900" />,
      title: 'Custom Design Options',
      description: 'Stained concrete offers endless color and pattern possibilities, allowing you to create unique designs that reflect your brand or aesthetic vision.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Durable & Long-Lasting',
      description: 'Stained concrete is extremely durable and can withstand heavy commercial traffic while maintaining its appearance for years.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Unique Aesthetic',
      description: 'Each stained concrete floor is unique, with natural variations that create a one-of-a-kind look for your commercial space.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Cost-Effective Solution',
      description: 'Transform existing concrete into beautiful floors without the expense of installing new flooring materials.'
    }
  ];

  const applications = [
    'Retail stores and showrooms',
    'Restaurants and cafes',
    'Office lobbies and common areas',
    'Art galleries and creative spaces',
    'Boutique shops',
    'Corporate headquarters',
    'Event spaces',
    'Automotive showrooms'
  ];

  const stainTypes = [
    {
      name: 'Acid Stains',
      description: 'Create rich, earthy tones with natural variations. Acid stains react with the concrete to produce permanent, translucent colors.'
    },
    {
      name: 'Water-Based Stains',
      description: 'Offer a wider range of colors and are easier to apply. Perfect for achieving consistent, vibrant colors throughout your space.'
    },
    {
      name: 'Dye Stains',
      description: 'Provide intense, vivid colors and can be used to create intricate designs and patterns on your concrete floors.'
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
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">STAINED CONCRETE</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Stained Concrete Flooring for Commercial Spaces
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your concrete floors into stunning works of art with professional stained concrete services. 
                Create unique, durable floors that combine functionality with exceptional visual appeal for your commercial space.
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
                  src="/products/tile.jpg" 
                  alt="Stained Concrete Flooring" 
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
              Why Choose Stained Concrete?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stained concrete offers a perfect combination of durability, customization, and visual appeal for commercial applications.
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
              Stained concrete is ideal for commercial spaces where aesthetics and durability are equally important.
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

        {/* Stain Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Concrete Stains
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various staining options to achieve the perfect look for your commercial space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stainTypes.map((type, index) => (
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
            Ready to Transform Your Concrete Floors?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact TerraGuard today for a free consultation and quote on stained concrete flooring for your commercial space.
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

export default StainedConcrete;

