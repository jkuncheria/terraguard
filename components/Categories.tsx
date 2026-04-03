import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Zap, Car, Plane, Trophy, Factory, UtensilsCrossed, Sparkles } from 'lucide-react';

const Categories: React.FC = () => {
  const flooringSystems = [
    { 
      id: 'epoxy', 
      name: 'Epoxy Flooring', 
      description: 'Seamless, chemical-resistant coatings for industrial environments',
      href: '/epoxy-flooring',
      icon: Beaker,
      image: '/images/flooring-systems/epoxy-flooring.png'
    },
    { 
      id: 'urethane', 
      name: 'Urethane Cement', 
      description: 'Thermal shock resistant floors for food & beverage facilities',
      href: '/urethane-cement',
      icon: Factory,
      image: '/images/flooring-systems/urethane-cement.png'
    },
    { 
      id: 'esd', 
      name: 'ESD/Conductive', 
      description: 'Static-dissipative flooring for electronics and cleanrooms',
      href: '/esd-conductive',
      icon: Zap,
      image: '/images/flooring-systems/esd-conductive.png'
    },
    { 
      id: 'traffic', 
      name: 'Traffic Coatings', 
      description: 'Durable deck coatings for parking structures and ramps',
      href: '/traffic-coating',
      icon: Car,
      image: '/images/flooring-systems/traffic-coating.png'
    },
    { 
      id: 'polished', 
      name: 'Polished Concrete', 
      description: 'High-gloss, low-maintenance decorative concrete finishes',
      href: '/polished-concrete',
      icon: Sparkles,
      image: '/images/flooring-systems/polished-concrete.png'
    },
  ];

  const industries = [
    { 
      id: 'food', 
      name: 'Food & Beverage', 
      description: 'USDA/FDA compliant flooring for processing facilities',
      href: '/industries/food-beverage', 
      icon: UtensilsCrossed 
    },
    { 
      id: 'auto', 
      name: 'Automotive', 
      description: 'Chemical and abrasion resistant shop floors',
      href: '/industries/automotive', 
      icon: Car 
    },
    { 
      id: 'mfg', 
      name: 'Manufacturing', 
      description: 'Heavy-duty floors for production environments',
      href: '/industries/manufacturing', 
      icon: Factory 
    },
    { 
      id: 'aero', 
      name: 'Aerospace', 
      description: 'Precision flooring for hangars and facilities',
      href: '/industries/aerospace', 
      icon: Plane 
    },
    { 
      id: 'sports', 
      name: 'Sports & Entertainment', 
      description: 'Durable, attractive floors for high-traffic venues',
      href: '/industries/sports-entertainment', 
      icon: Trophy 
    },
  ];

  return (
    <>
      {/* Flooring Systems Section */}
      <section id="flooring-solutions" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="inline-block text-green-600 font-semibold tracking-wider text-sm uppercase mb-3">Our Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Flooring Systems</h2>
            </div>
            <Link 
              to="/flooring-systems"
              className="hidden lg:inline-flex items-center text-blue-900 font-semibold hover:text-green-600 transition-colors mt-4 lg:mt-0"
            >
              View all solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
              {flooringSystems.map((system) => {
                const Icon = system.icon;
                return (
                  <Link 
                    key={system.id} 
                    to={system.href}
                    className="group flex-shrink-0 w-[340px] md:w-[400px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Image */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img 
                        src={system.image} 
                        alt={system.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Icon badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-blue-900 rounded-xl p-2.5">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content below image */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">{system.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{system.description}</p>
                      <span className="inline-flex items-center text-green-600 font-semibold text-sm">
                        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center lg:hidden">
            <Link 
              to="/flooring-systems"
              className="inline-flex items-center text-blue-900 font-semibold hover:text-green-600 transition-colors"
            >
              View all solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 font-semibold tracking-wider text-sm uppercase mb-3">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized flooring expertise for Arizona's most demanding industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.id} 
                  to={industry.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-300 text-center"
                >
                  <div className="bg-blue-900 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-600 transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900">{industry.name}</h3>
                  <p className="text-sm text-gray-500">{industry.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;