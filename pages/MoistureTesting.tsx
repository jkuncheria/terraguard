import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, FileCheck, ArrowRight, Phone, Award, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const MoistureTesting: React.FC = () => {
  const seo = SEO_CONFIG.pages.moistureTesting;

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: 'ICRI Certified',
      description: 'Our certified technicians have completed ICRI (International Concrete Repair Institute) certification for accurate moisture testing.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Protect Your Investment',
      description: 'Proper moisture testing prevents costly flooring failures and ensures your installation warranty remains valid.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-900" />,
      title: 'Third-Party Testing',
      description: 'We provide independent, unbiased testing services even when we\'re not the installation contractor.'
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-blue-900" />,
      title: 'Industry Compliance',
      description: 'Our testing ensures compliance with TCNA, CRI, and manufacturer requirements for flooring installations.'
    }
  ];

  const tests = [
    {
      name: 'ASTM F710',
      description: 'PH/Alkalinity Test - Measures the pH level and alkalinity of the concrete surface.'
    },
    {
      name: 'ASTM F1869',
      description: 'Calcium Chloride Test - Measures moisture vapor emission rate (MVER) from the concrete slab.'
    },
    {
      name: 'ASTM F2170',
      description: 'In-Situ Probe Relative Humidity Test - Measures relative humidity within the concrete slab using probes.'
    },
    {
      name: 'ASTM 2659',
      description: 'Electronic Moisture Meter Test - Non-invasive testing using electronic moisture meters.'
    },
    {
      name: 'ASTM F3191',
      description: 'Concrete Porosity Test - Evaluates the porosity and density of the concrete substrate.'
    }
  ];

  const whenToTest = [
    'Before installing any floor covering',
    'After HVAC has been operational for 48+ hours',
    'When moisture-related issues are suspected',
    'For warranty compliance requirements',
    'During pre-construction planning',
    'After water damage or flooding'
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
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">MOISTURE TESTING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                ICRI Certified Moisture Testing Services
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Protect your flooring investment with professional, ICRI-certified moisture testing. 
                TerraGuard provides third-party moisture testing services to ensure your concrete slab is ready for flooring installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Schedule Testing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:18556837720" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/products/tile.jpg" 
                  alt="Moisture Testing Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certification Info */}
        <div className="mb-20 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
          <div className="text-center mb-8">
            <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ICRI Certified Testing Company
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto text-left space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              TerraGuard is now an ICRI Certified Testing Company. Our technician, John C. Salinas, has acquired his Certified Concrete and Slab Moisture Testing Technician Certification (CCSMTT), allowing ABS to perform certified testing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              ABS can also be utilized as a certified 3rd party testing agency on projects or installations whereby we are not the flooring installation company. Our services are available locally in the Valley of the Sun and across all the Southwest.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Moisture Testing is Essential
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proper moisture testing protects your investment and ensures successful flooring installations.
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

        {/* Tests Performed Section */}
        <div className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ASTM Tests We Perform
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We perform all standard ASTM moisture tests to ensure comprehensive evaluation of your concrete slab.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tests.map((test, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{test.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When to Test Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When Should Moisture Testing Be Performed?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Testing should be performed after the environment has been acclimated (HVAC) to standard operating conditions for a minimum of 48 hours. Moisture emission is contingent upon vapor pressure differences between the substrate and room interior.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whenToTest.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Moisture Testing Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't risk flooring failure. Contact TerraGuard for professional, ICRI-certified moisture testing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Schedule Testing
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

export default MoistureTesting;

