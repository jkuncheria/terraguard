import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Clock, Shield, Users, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const Commercial: React.FC = () => {
  const seo = SEO_CONFIG.pages.commercial;

  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Office Buildings',
      description: 'Professional flooring solutions for corporate offices, executive suites, and commercial workspaces.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Retail Spaces',
      description: 'Durable, high-traffic flooring options perfect for stores, shopping centers, and retail environments.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Healthcare Facilities',
      description: 'Specialized flooring solutions meeting strict hygiene and safety requirements for hospitals and clinics.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Educational Institutions',
      description: 'Flooring designed for schools, universities, and educational facilities with high foot traffic.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Hospitality',
      description: 'Elegant and durable flooring for hotels, restaurants, and hospitality venues.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Industrial Facilities',
      description: 'Heavy-duty flooring solutions for warehouses, manufacturing plants, and industrial spaces.'
    }
  ];

  const capabilities = [
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Fast-Track Installations',
      description: 'We understand commercial deadlines. Our team specializes in fast-track, critical path installations that minimize downtime and keep your business operational.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Installation Warranty',
      description: 'Every commercial installation is backed by our comprehensive warranty, ensuring quality workmanship and peace of mind.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Expert Project Management',
      description: 'Our experienced project managers coordinate every aspect of your installation, ensuring seamless execution from start to finish.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Turnkey Solutions',
      description: 'From initial consultation to final installation, we provide complete turnkey flooring solutions for your commercial project.'
    }
  ];

  const sectors = [
    'Public Sector',
    'Federal Projects',
    'Military Installations',
    'Private Commercial',
    'Industrial',
    'Healthcare',
    'Education',
    'Retail',
    'Hospitality'
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
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">COMMERCIAL FLOORING</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Commercial Flooring Solutions
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            TerraGuard specializes in commercial flooring installations across the Southwestern United States. With over 100 years of combined industry experience, we handle projects of any size or complexity, from fast-track installations to highly technical custom solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
          <div className="text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              TerraGuard is a Commercial Priority contractor specializing in all phases of flooring and vertical installations in addition to surface coatings. Commercial flooring is our passion and our preferred discipline in the construction industry that is defined by CSI division 9.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Whether you simply need a certified 3rd party ICRI certified moisture tester or concrete polishing to waterproofing above grade surfaces in order for your tile installation to be TCNA compliant, or your soft goods installation needs to be impeccable all the while adhering to CRI outlines, ABS is there. We offer horizontal and vertical installations across a diverse array of flooring and wall covering materials ranging from vinyl, tile to carpeted goods—nothing is off limits and nothing is impossible.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              ABS delivers premium selections and exceptional craftsmanship along with a strong quality control program at a competitive price point. All of our commercial projects are coordinated after a rigorous review of client needs and construction documents to ensure the best possible outcome for the project, before the work even begins. You can be sure that regardless of your flooring or coatings expectations, ABS has your project covered.
            </p>
          </div>
        </div>

        {/* Expansive Expertise Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Expansive Expertise
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The commercial experience we've built over the years comes from a huge range of projects spanning from heavy duty commercial work at new build sites to light T&I.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We've handled projects in airports and military bases, hotels and restaurants, schools and community centers, office buildings and manufacturing facilities, and everything in between. We've also got a background in local construction code compliance, industry standard methods, municipal regulations, and more. When you partner with TerraGuard for your commercial needs, you can expect perfection in every detail.
              </p>
            </div>
          </div>
        </div>

        {/* Sectors We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Sectors We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-900 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-900">{sector}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Commercial Services
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
            Why Choose ABS for Commercial Projects?
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
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our commercial flooring experts help bring your vision to life.
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

export default Commercial;

