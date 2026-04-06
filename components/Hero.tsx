import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/newhero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 h-full min-h-[90vh] flex items-center">
        <div className="max-w-3xl py-20">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-white/90 text-sm font-medium">Licensed Arizona Contractor</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Industrial Flooring<br />
            <span className="text-green-500">Built to Perform</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            High-performance epoxy, urethane cement, and specialty coatings for Arizona's most demanding facilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              Get a Free Quote
            </Link>
            <Link 
              to="/flooring-systems"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/80">
            <div className="flex items-center">
              <Award className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm">Based in Arizona</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm">20+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm">Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;