import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Clock, Shield, ArrowRight, Phone, CheckCircle, Users, Award, Zap, FileCheck, TrendingUp, Wrench, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const PhoenixCommercial: React.FC = () => {
  const seo = SEO_CONFIG.pages.phoenixCommercial;

  const serviceTypes = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Office Buildings & Corporate Spaces',
      description: 'Professional flooring solutions for corporate offices, executive suites, and commercial workspaces throughout Phoenix.',
      details: [
        'Executive office suites in downtown Phoenix',
        'Corporate headquarters and business parks',
        'Co-working spaces and shared offices',
        'Conference rooms and meeting spaces',
        'Lobby and reception areas'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Retail & Shopping Centers',
      description: 'Durable, high-traffic flooring options perfect for Phoenix retail stores, shopping centers, and commercial retail environments.',
      details: [
        'Shopping malls and retail centers',
        'Boutique stores and specialty shops',
        'Big box retailers and department stores',
        'Showrooms and display areas',
        'High-traffic commercial corridors'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Healthcare Facilities',
      description: 'Specialized flooring solutions meeting strict hygiene and safety requirements for Phoenix hospitals, clinics, and medical facilities.',
      details: [
        'Hospitals and medical centers',
        'Outpatient clinics and urgent care',
        'Dental offices and medical suites',
        'Laboratories and clean rooms',
        'Pharmacy and healthcare retail spaces'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Hospitality & Hotels',
      description: 'Elegant and durable flooring for Phoenix hotels, restaurants, bars, and hospitality venues that withstand high foot traffic.',
      details: [
        'Hotels and resorts',
        'Restaurants and dining establishments',
        'Bars and entertainment venues',
        'Event spaces and banquet halls',
        'Lobby and common areas'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Industrial & Warehouses',
      description: 'Heavy-duty flooring solutions for Phoenix industrial facilities, warehouses, distribution centers, and manufacturing plants.',
      details: [
        'Warehouses and distribution centers',
        'Manufacturing facilities',
        'Automotive service centers',
        'Food processing plants',
        'Loading docks and industrial spaces'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Educational Institutions',
      description: 'Flooring designed for Phoenix schools, universities, community colleges, and educational facilities with high foot traffic.',
      details: [
        'K-12 schools and districts',
        'Universities and colleges',
        'Community centers and libraries',
        'Gymnasiums and athletic facilities',
        'Administrative buildings'
      ]
    }
  ];

  const advantages = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-900" />,
      title: 'Deep Local Phoenix Knowledge',
      description: 'We understand Phoenix\'s unique commercial construction landscape, including local building codes, permit requirements, and municipal regulations. Our team is familiar with the Valley\'s climate considerations, including how extreme heat and low humidity affect flooring materials and installations.',
      details: [
        'Knowledge of Phoenix building codes and permits',
        'Understanding of desert climate flooring requirements',
        'Familiarity with local suppliers and materials',
        'Established relationships with Phoenix contractors'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Fast-Track Installation Expertise',
      description: 'Phoenix\'s fast-paced commercial construction environment demands quick turnarounds. We specialize in fast-track, critical path installations that minimize downtime and keep your business operational during renovations.',
      details: [
        '24/7 project coordination capabilities',
        'Efficient scheduling to minimize disruption',
        'Quick response times for urgent projects',
        'Experience with tight commercial deadlines'
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Proven Phoenix Track Record',
      description: 'Over 100 years of combined industry experience with successful commercial projects throughout Phoenix and the Valley. We\'ve completed installations in every major commercial sector.',
      details: [
        'Extensive portfolio of Phoenix projects',
        'References from satisfied local businesses',
        'Long-standing relationships with Phoenix contractors',
        'Proven ability to handle complex projects'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Expert Project Management',
      description: 'Our experienced Phoenix-based project managers coordinate every aspect of your installation, ensuring seamless execution from initial consultation to final walkthrough.',
      details: [
        'Dedicated project managers for each job',
        'Regular communication and progress updates',
        'Coordination with other trades and contractors',
        'Quality control at every stage'
      ]
    }
  ];

  const flooringSolutions = [
    {
      category: 'Hard Surface Flooring',
      options: ['Polished Concrete', 'Stained Concrete', 'Epoxy Flooring', 'Luxury Vinyl Tile (LVT)', 'Porcelain & Ceramic Tile', 'Natural Stone', 'Hardwood & Engineered Wood']
    },
    {
      category: 'Soft Surface Flooring',
      options: ['Commercial Carpet', 'Carpet Tile', 'Broadloom Carpet', 'Modular Carpet Systems']
    },
    {
      category: 'Specialty Flooring',
      options: ['Rubber Flooring', 'Sports Flooring', 'VCT (Vinyl Composition Tile)', 'Linoleum', 'Luxury Vinyl Plank']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation & Assessment',
      description: 'We begin with a comprehensive site visit to assess your Phoenix commercial space, discuss your needs, and understand your project goals and timeline.'
    },
    {
      number: '02',
      title: 'Design & Material Selection',
      description: 'Our team helps you select the perfect flooring materials for your Phoenix business, considering traffic patterns, maintenance requirements, and budget.'
    },
    {
      number: '03',
      title: 'Project Planning & Coordination',
      description: 'We develop a detailed project plan, coordinate with other trades, obtain necessary permits, and schedule installation to minimize disruption to your operations.'
    },
    {
      number: '04',
      title: 'Professional Installation',
      description: 'Our certified installers execute the installation with precision, following industry standards and manufacturer specifications for optimal results.'
    },
    {
      number: '05',
      title: 'Quality Inspection & Walkthrough',
      description: 'We conduct thorough quality inspections and provide a final walkthrough to ensure everything meets our high standards and your expectations.'
    },
    {
      number: '06',
      title: 'Warranty & Ongoing Support',
      description: 'Every installation is backed by our comprehensive warranty, and we provide ongoing support and maintenance recommendations for your Phoenix commercial flooring.'
    }
  ];

  const areasServed = [
    'Phoenix', 'Tempe', 'Scottsdale', 'Chandler', 'Mesa', 'Gilbert', 
    'Ahwatukee', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale',
    'Buckeye', 'Paradise Valley', 'Cave Creek', 'Fountain Hills'
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
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">COMMERCIAL FLOORING IN PHOENIX</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Phoenix Commercial Flooring Installation & Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            TerraGuard is Phoenix's trusted commercial flooring contractor. Serving Phoenix, Tempe, Scottsdale, Chandler, Mesa, Gilbert, Ahwatukee, Glendale, and the surrounding Phoenix metro area with professional flooring installations for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:18556837720"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 855-683-7720
            </a>
          </div>
        </div>

        {/* Location & Coverage Section */}
        <div className="mb-20 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-900 p-4 rounded-xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Serving Phoenix & The Valley</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Based in Phoenix, TerraGuard has been serving commercial clients throughout the Phoenix metropolitan area for years. Our local expertise means we understand the unique needs of Phoenix businesses, from downtown office buildings to industrial facilities in the East Valley.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We serve Phoenix and surrounding areas including Tempe, Scottsdale, Chandler, Mesa, Gilbert, Ahwatukee, Glendale, and beyond. Our team is familiar with local building codes, climate considerations, and the fast-paced commercial construction environment that defines Phoenix.
              </p>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">Areas We Serve:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {areasServed.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-900 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Phoenix Businesses Choose ABS</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Over 100 years of combined industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">ICRI Certified moisture testing services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">TCNA and CRI compliant installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fast-track installation capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Comprehensive installation warranty</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Competitive pricing for Phoenix businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose ABS in Phoenix */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TerraGuard in Phoenix?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring unmatched expertise, local knowledge, and proven results to every Phoenix commercial flooring project.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-900 hover:shadow-xl transition-all">
                <div className="bg-blue-50 p-4 rounded-lg w-fit mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{advantage.description}</p>
                <ul className="space-y-2">
                  {advantage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Services in Phoenix */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Flooring Services in Phoenix
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive flooring solutions for every type of commercial space in Phoenix.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 p-6 hover:border-blue-900 hover:shadow-lg transition-all">
                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-900 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Flooring Solutions Available */}
        <div className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Flooring Solutions for Phoenix Businesses
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of commercial flooring materials to meet every need and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flooringSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{solution.category}</h3>
                <ul className="space-y-2">
                  {solution.options.map((option, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-900 flex-shrink-0" />
                      <span className="text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Phoenix Commercial Flooring Process
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven, systematic approach to delivering exceptional results for every Phoenix commercial project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-900 hover:shadow-lg transition-all relative">
                <div className="absolute top-4 right-4 text-6xl font-bold text-blue-50">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pr-16">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Expertise */}
        <div className="mb-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-12 h-12 text-yellow-400" />
                <h2 className="text-3xl font-bold">Certifications & Industry Standards</h2>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                TerraGuard maintains the highest industry certifications and adheres to all relevant standards for commercial flooring installations in Phoenix.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">ICRI Certified Concrete & Slab Moisture Testing Technician</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">TCNA (Tile Council of North America) Compliant Installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">CRI (Carpet & Rug Institute) Standards Adherence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">ASTM Testing Standards Compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100">Commercial Priority Contractor Status</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-bold mb-4">Phoenix Market Expertise</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Our deep understanding of the Phoenix commercial market means we know what works best for local businesses. We understand:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Desert climate flooring considerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Phoenix building codes and permit processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Local supplier relationships and material availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Fast-track project requirements common in Phoenix</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ready for Your Phoenix Commercial Flooring Project?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact TerraGuard today for a free consultation. We're your local Phoenix commercial flooring experts with the experience, expertise, and commitment to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:18556837720"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 855-683-7720
            </a>
          </div>
          <p className="text-sm text-blue-200">
            Serving Phoenix, Tempe, Scottsdale, Chandler, Mesa, Gilbert, and all surrounding areas
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default PhoenixCommercial;
