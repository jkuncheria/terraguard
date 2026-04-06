import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Clock, Shield, Users, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Residential: React.FC = () => {
  const seo = SEO_CONFIG.pages.residential;

  const services = [
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Single-Family Homes',
      description: 'Complete flooring solutions for new construction, renovations, and remodels in single-family residences.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Multi-Family Housing',
      description: 'Durable, cost-effective flooring options for apartments, condominiums, and multi-unit residential buildings.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Townhomes & Condos',
      description: 'Stylish and practical flooring solutions designed for modern townhome and condominium living.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Senior Living Communities',
      description: 'Safe, comfortable flooring options meeting accessibility and safety requirements for senior living facilities.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Student Housing',
      description: 'High-performance flooring solutions built to withstand heavy use in dormitories and student accommodations.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Custom Homes',
      description: 'Premium flooring selections and expert installation for luxury and custom-built residential properties.'
    }
  ];

  const capabilities = [
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Efficient Installation',
      description: 'Our experienced team works efficiently to minimize disruption to your daily life while delivering exceptional results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Installation Warranty',
      description: 'Every residential installation is backed by our comprehensive warranty, ensuring quality workmanship and your peace of mind.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Expert Consultation',
      description: 'Our flooring experts help you choose the perfect flooring solution for your lifestyle, budget, and design preferences.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Complete Solutions',
      description: 'From material selection to final installation, we provide complete flooring solutions for your residential project.'
    }
  ];

  const projectTypes = [
    'New Construction',
    'Renovations',
    'Remodels',
    'Room Additions',
    'Basement Finishing',
    'Kitchen Updates',
    'Bathroom Remodels',
    'Whole-Home Flooring'
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
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">RESIDENTIAL & MULTI-FAMILY</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Residential & Multi-Family Flooring
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            TerraGuard provides expert flooring solutions for residential and multi-family projects throughout the Southwestern United States. With over 100 years of combined industry experience, we deliver quality installations that enhance your living space.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Need a Professional Home Flooring Contractor to Provide the Best Flooring Solution for Your Home Near Phoenix, AZ?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              At TerraGuard, our flooring technicians aren't just familiar with commercial environments – we service residential contractors, multi-family housing management agencies, and homeowners too. We know that every step in a residential flooring project is important, which is why we specialize in accurate project estimation, installation project coordination, and achieving a superior finished result that enhances the visual appeal and comfort of your living space.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Quality work is never an accident, and while other flooring companies may push for a larger profit or a quicker turnaround, we focus on getting your project right at TerraGuard.
            </p>
          </div>
        </div>

        {/* Wide Variety of Flooring Materials */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Wide Variety of Flooring Materials
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our residential clients love the vast selection in materials and styles we offer at TerraGuard.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                From tile and stone to premium quality hardwood, VCT, vinyl, and carpeting, we carry the market's finest in flooring and carpentry. This exceptional collection of materials is reinforced by our detail-oriented installation service and craftsmanship. If you would like to see our selection in person, we invite you to visit our showroom in Phoenix, AZ to see the vibrant color and the high level of care that goes into every board and tile at TerraGuard.
              </p>
            </div>
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Project Types
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-900 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-900">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Residential Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Residential & Multi-Family Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose ABS for Residential Projects?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-700 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ready to Transform Your Residential Space?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our residential flooring experts help you choose the perfect flooring for your home or multi-family project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:16027369955"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 602-736-9955
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default Residential;

