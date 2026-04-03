import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AboutHome: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Licensed & Insured' },
  ];

  const capabilities = [
    'Epoxy Floor Coatings',
    'Urethane Cement Systems',
    'ESD/Conductive Flooring',
    'Traffic Coatings',
    'Polished Concrete',
    'Surface Preparation',
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div>
            <span className="inline-block text-green-600 font-semibold tracking-wider text-sm uppercase mb-4">Why TerraGuard</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Performance Flooring for Critical Environments
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in industrial flooring systems that withstand the toughest conditions—chemical exposure, heavy traffic, thermal shock, and strict regulatory requirements. Our solutions are engineered for facilities where failure is not an option.
            </p>
            
            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about"
              onClick={scrollToTop}
              className="inline-flex items-center text-blue-900 font-semibold hover:text-green-600 transition-colors group"
            >
              Learn more about our expertise
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side - Image with overlay card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/about-us-terra.png" 
                alt="TerraGuard Industrial Flooring Project" 
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

