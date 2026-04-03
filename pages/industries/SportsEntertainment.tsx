import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { SEO_CONFIG } from '../../seoConfig';
import Contact from '../../components/Contact';
import { CheckCircle, Trophy, Users, Sparkles, Shield } from 'lucide-react';

const SportsEntertainment: React.FC = () => {
  const seo = SEO_CONFIG.pages.sportsEntertainment;

  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-blue-900" />,
      title: 'High Traffic Durability',
      description: 'Engineered to withstand thousands of visitors and heavy foot traffic.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Attractive Finishes',
      description: 'Custom colors, logos, and decorative options to match your brand.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Slip Resistant',
      description: 'Safety-focused textures for wet areas and high-traffic zones.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Easy Maintenance',
      description: 'Seamless surfaces are easy to clean between events.',
    },
  ];

  const applications = [
    'Stadiums & Arenas',
    'Fitness Centers',
    'Recreation Centers',
    'Convention Centers',
    'Entertainment Venues',
    'Locker Rooms',
    'Concession Areas',
    'Training Facilities',
  ];

  const clients = ['Arizona State University', 'University of Arizona'];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-500 font-semibold tracking-wider uppercase">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Sports & Entertainment Flooring</h1>
              <p className="text-xl text-gray-300 mb-8">
                Durable, attractive flooring solutions for stadiums, arenas, fitness centers, and entertainment venues. TerraGuard delivers floors that perform under heavy traffic while maintaining a professional appearance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition text-center"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/flooring-systems"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded transition text-center"
                >
                  View All Systems
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-blue-800/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Trusted By:</h3>
                <ul className="space-y-3">
                  {clients.map((client, idx) => (
                    <li key={idx} className="flex items-center text-lg">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flooring systems combine durability with aesthetics for sports and entertainment facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Systems */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Flooring Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/epoxy-flooring" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Epoxy Flooring</h3>
              <p className="text-gray-600 mb-4">
                Versatile coating with custom colors and logo options for branded environments.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Custom colors & logos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  High durability
                </li>
              </ul>
            </Link>
            <Link to="/polished-concrete" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Polished Concrete</h3>
              <p className="text-gray-600 mb-4">
                Attractive, low-maintenance option for concourses and public areas.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Professional appearance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Easy maintenance
                </li>
              </ul>
            </Link>
            <Link to="/urethane-cement" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-yellow-600">Urethane Cement</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty option for commercial kitchens and back-of-house areas.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Food-safe
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Steam cleanable
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                TerraGuard provides flooring solutions for sports and entertainment facilities throughout Arizona.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-900 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Key Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>High traffic durability for large crowds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Slip-resistant surfaces for safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Attractive finishes for public areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Easy cleanup between events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Custom branding and logo options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for High-Performance Flooring?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact TerraGuard for a consultation on flooring solutions for your sports or entertainment facility.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-lg shadow-lg transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Contact simplified={true} />
    </>
  );
};

export default SportsEntertainment;
