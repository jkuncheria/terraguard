import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Clock, Shield, ArrowRight, Phone, CheckCircle, Users, Award, Zap, FileCheck, TrendingUp, Wrench, Star, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const ScottsdaleCommercial: React.FC = () => {
  const seo = SEO_CONFIG.pages.scottsdaleCommercial;

  const serviceTypes = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Luxury Retail & Fashion Square',
      description: 'Premium flooring solutions for Scottsdale\'s upscale retail stores, Fashion Square, and high-end shopping destinations.',
      details: [
        'Fashion Square and luxury retail centers',
        'Boutique stores and designer showrooms',
        'Art galleries and upscale boutiques',
        'Jewelry stores and luxury goods retailers',
        'Premium shopping corridors'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Corporate Headquarters & Executive Offices',
      description: 'Sophisticated flooring for Scottsdale office buildings, corporate headquarters, and executive suites.',
      details: [
        'Corporate headquarters and C-suite offices',
        'Executive suites and premium office spaces',
        'Financial institutions and wealth management',
        'Law firms and professional services',
        'Luxury office buildings'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Resort & Hospitality Venues',
      description: 'Elegant and durable flooring for Scottsdale resorts, luxury hotels, fine dining restaurants, and hospitality venues.',
      details: [
        'Resort properties and luxury hotels',
        'Fine dining restaurants and upscale eateries',
        'Spa facilities and wellness centers',
        'Country clubs and private clubs',
        'Event spaces and banquet facilities'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Medical & Wellness Facilities',
      description: 'Specialized flooring for Scottsdale healthcare facilities, medical offices, and wellness centers.',
      details: [
        'Medical centers and clinics',
        'Specialty medical practices',
        'Wellness centers and spas',
        'Dental offices and orthodontic practices',
        'Aesthetic and cosmetic facilities'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Concrete Polishing & Decorative Surfaces',
      description: 'Professional concrete polishing and decorative concrete services for Scottsdale commercial spaces.',
      details: [
        'Polished concrete floors',
        'Stained concrete installations',
        'Decorative concrete overlays',
        'Epoxy and resinous flooring',
        'Custom concrete finishes'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Fast-Track & Renovation Projects',
      description: 'Quick turnaround installations for Scottsdale businesses requiring minimal disruption to operations.',
      details: [
        'After-hours and weekend installations',
        'Phased installation approaches',
        'Rapid renovation projects',
        'Tenant improvement projects',
        'Time-sensitive commercial updates'
      ]
    }
  ];

  const advantages = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Premium Quality Standards',
      description: 'We deliver flooring solutions that meet Scottsdale\'s high standards for luxury commercial spaces. Our attention to detail and commitment to excellence ensures results that match the sophisticated aesthetic of Scottsdale businesses.',
      details: [
        'Premium material selection and sourcing',
        'Meticulous installation craftsmanship',
        'Luxury-grade finishes and details',
        'Attention to aesthetic excellence'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Minimal Business Disruption',
      description: 'We understand that Scottsdale businesses can\'t afford extended downtime. We work around your schedule, offering after-hours and weekend installations to minimize impact on your operations.',
      details: [
        'Flexible scheduling around business hours',
        'After-hours and weekend installation options',
        'Phased installation approaches',
        'Quick turnaround capabilities'
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Proven Excellence in Scottsdale',
      description: 'Trusted by Scottsdale businesses for quality installations and exceptional service. Our portfolio includes successful projects in Fashion Square, Old Town, and throughout Scottsdale\'s commercial districts.',
      details: [
        'Portfolio of successful Scottsdale projects',
        'References from satisfied local businesses',
        'Experience with luxury commercial spaces',
        'Proven track record in upscale markets'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Expert Project Management',
      description: 'Our experienced project managers understand the unique requirements of Scottsdale commercial projects, ensuring seamless execution from initial consultation to final walkthrough.',
      details: [
        'Dedicated project managers for each job',
        'Regular communication and progress updates',
        'Coordination with luxury contractors and designers',
        'Quality control at every stage'
      ]
    }
  ];

  const flooringSolutions = [
    {
      category: 'Premium Hard Surface',
      options: ['Polished Concrete', 'Stained Concrete', 'Luxury Vinyl Tile (LVT)', 'Porcelain & Ceramic Tile', 'Natural Stone (Marble, Granite, Travertine)', 'Hardwood & Engineered Wood', 'Luxury Vinyl Plank']
    },
    {
      category: 'Upscale Soft Surface',
      options: ['Commercial Carpet', 'Carpet Tile', 'Broadloom Carpet', 'Luxury Carpet Systems']
    },
    {
      category: 'Specialty & Decorative',
      options: ['Epoxy Flooring', 'Decorative Concrete', 'Custom Design Flooring', 'Artistic Floor Installations']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Design Consultation',
      description: 'We begin with a comprehensive consultation to understand your vision, assess your Scottsdale commercial space, and discuss premium flooring options that match your aesthetic goals.'
    },
    {
      number: '02',
      title: 'Premium Material Selection',
      description: 'Our team helps you select from premium flooring materials, considering luxury aesthetics, durability, and maintenance requirements for your Scottsdale business.'
    },
    {
      number: '03',
      title: 'Detailed Project Planning',
      description: 'We develop a comprehensive project plan that minimizes disruption, coordinates with other trades, and ensures your Scottsdale business can continue operating during installation.'
    },
    {
      number: '04',
      title: 'Precision Installation',
      description: 'Our master craftsmen execute the installation with meticulous attention to detail, following industry standards and ensuring flawless results for your Scottsdale commercial space.'
    },
    {
      number: '05',
      title: 'Quality Assurance & Walkthrough',
      description: 'We conduct thorough quality inspections and provide a detailed walkthrough to ensure everything meets our premium standards and exceeds your expectations.'
    },
    {
      number: '06',
      title: 'Warranty & Maintenance Support',
      description: 'Every installation is backed by our comprehensive warranty, and we provide ongoing support and maintenance recommendations to keep your Scottsdale flooring looking exceptional.'
    }
  ];

  const scottsdaleAreas = [
    'Old Town Scottsdale', 'Fashion Square', 'Kierland Commons', 'Scottsdale Quarter',
    'North Scottsdale', 'South Scottsdale', 'McCormick Ranch', 'Gainey Ranch',
    'DC Ranch', 'Troon', 'Paradise Valley (adjacent)', 'Camelback Corridor'
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
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">COMMERCIAL FLOORING IN SCOTTSDALE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Scottsdale Commercial Flooring Installation & Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            TerraGuard provides premium commercial flooring services to businesses throughout Scottsdale. From luxury retail spaces in Fashion Square to high-end office buildings and resort properties, we deliver exceptional flooring solutions that match Scottsdale's sophisticated business environment.
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
              href="tel:16027369955"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 602-736-9955
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
                <h2 className="text-3xl font-bold text-gray-900">Serving Scottsdale Businesses</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Scottsdale's commercial landscape demands flooring solutions that combine durability with sophisticated aesthetics. TerraGuard understands the unique needs of Scottsdale businesses, from upscale retail stores in Fashion Square to luxury hotels, corporate headquarters, and resort properties.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team has extensive experience working with Scottsdale's commercial properties, understanding the importance of minimal disruption to business operations while delivering exceptional results. We serve all of Scottsdale, including Old Town, Fashion Square, Kierland Commons, Scottsdale Quarter, and commercial districts throughout the city.
              </p>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">Key Scottsdale Areas We Serve:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {scottsdaleAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-900 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Scottsdale Businesses Choose ABS</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Premium quality installations for luxury spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Minimal disruption to business operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Experience with upscale commercial projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">After-hours and weekend installation options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">ICRI Certified moisture testing services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Comprehensive warranty and ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose ABS in Scottsdale */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TerraGuard in Scottsdale?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring premium quality, sophisticated aesthetics, and proven excellence to every Scottsdale commercial flooring project.
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

        {/* Commercial Services in Scottsdale */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Commercial Flooring Services in Scottsdale
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive flooring solutions tailored to Scottsdale's luxury commercial market.
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
              Premium Flooring Solutions for Scottsdale Businesses
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of premium commercial flooring materials to meet every need and aesthetic requirement.
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
              Our Scottsdale Commercial Flooring Process
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A refined, systematic approach to delivering exceptional results for every Scottsdale commercial project.
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
                TerraGuard maintains the highest industry certifications and adheres to all relevant standards for commercial flooring installations in Scottsdale.
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
              <h3 className="text-2xl font-bold mb-4">Scottsdale Market Expertise</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Our deep understanding of the Scottsdale commercial market means we know what works best for luxury businesses. We understand:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Premium aesthetic requirements for luxury spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Minimal disruption needs for high-end businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">After-hours installation requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-blue-100 text-sm">Coordination with luxury designers and contractors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ready for Your Scottsdale Commercial Flooring Project?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact TerraGuard today for a free consultation. We're your trusted Scottsdale commercial flooring contractor with the expertise, craftsmanship, and commitment to deliver premium results.
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
              href="tel:16027369955"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 602-736-9955
            </a>
          </div>
          <p className="text-sm text-blue-200">
            Serving Old Town Scottsdale, Fashion Square, Kierland Commons, and all surrounding areas
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default ScottsdaleCommercial;
