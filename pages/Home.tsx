import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';
import Hero from '../components/Hero';
import LogoBanner from '../components/LogoBanner';
import AboutHome from '../components/AboutHome';
import Categories from '../components/Categories';
import Contact from '../components/Contact';
import { ArrowRight, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const seo = SEO_CONFIG.pages.home;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <Hero />
      <LogoBanner />
      <AboutHome />
      <Categories />
      <Contact simplified={true} />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Facility?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your industrial flooring project. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-lg transition-all"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:18556837720"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              855-683-7720
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

