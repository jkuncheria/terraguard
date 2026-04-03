import React from 'react';
import { Shield, Factory, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const clients = [
    'Goodyear',
    'Arizona State University',
    'Pepsi',
    'JBS Harvest',
    'University of Arizona',
    'Royal Oaks',
    'Halal Guys',
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT TERRAGUARD</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Arizona's Industrial Flooring Experts
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Main Content */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-left">
              <div className="bg-blue-900 rounded-full p-6 shadow-xl inline-flex mb-6">
                <Shield className="w-12 h-12 text-yellow-400" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                TerraGuard is a licensed Arizona contractor specializing in commercial and industrial flooring systems. We deliver high-performance solutions for the most demanding environments across food & beverage, automotive, manufacturing, aerospace, and sports & entertainment industries.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Our team brings extensive expertise in epoxy flooring, urethane cement, ESD/conductive flooring, traffic coatings, and polished concrete. From food processing plants requiring USDA-compliant flooring to aerospace facilities needing ESD protection, we have the experience and technical knowledge to deliver flooring systems that perform.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <Factory className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose TerraGuard?
              </h2>
            </div>

            <div className="text-left space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700"><strong>Licensed Arizona Contractor</strong> – Fully licensed and insured for commercial and industrial flooring projects.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700"><strong>Industry Expertise</strong> – Specialized knowledge in food-safe, ESD, and heavy-duty industrial flooring requirements.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700"><strong>Quality Materials</strong> – We use only premium flooring systems from trusted manufacturers.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700"><strong>Professional Installation</strong> – Certified installers with extensive experience in industrial environments.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700"><strong>Minimal Downtime</strong> – We work efficiently to minimize disruption to your operations.</p>
              </div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client, idx) => (
                <span key={idx} className="bg-white px-6 py-3 rounded-full text-gray-700 font-semibold shadow-md border border-gray-200">
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                INDUSTRIAL FLOORING DONE RIGHT
              </h2>
              <p className="text-xl text-gray-300">Licensed Arizona Contractor • Trusted by Industry Leaders</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


