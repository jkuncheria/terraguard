import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const AllFlooringProducts: React.FC = () => {
  const seo = SEO_CONFIG.pages.allFlooringProducts;

  const products = [
    'Carpet',
    'Carpet Base',
    'Carpet Tile',
    'Ceramic Tile',
    'Engineered Hardwood',
    'Epoxy Flooring',
    'Granite',
    'Hand Scraped Wood Look Porcelain Tile',
    'Inlaid Vinyl',
    'Laminate',
    'Linoleum',
    'Marble',
    'Polished Concrete',
    'Porcelain Tile',
    'Quarry Tile',
    'Rubber Flooring',
    'Slate',
    'Solid Hardwood',
    'Sports Flooring',
    'Stained Concrete',
    'Stone',
    'Travertine',
    'VCT',
    'Vinyl',
    'Vinyl Base',
    'Wood',
    'Wood-Look Ceramic Tile',
    'Wood-Look Vinyl',
  ];

  // Map products to their routes if they exist
  const getProductRoute = (product: string): string | null => {
    const routeMap: { [key: string]: string } = {
      'Hardwood': '/hardwood',
      'Solid Hardwood': '/hardwood',
      'Engineered Hardwood': '/hardwood',
      'Carpet': '/carpet',
      'Tile': '/tile',
      'Ceramic Tile': '/tile',
      'Porcelain Tile': '/tile',
      'Luxury Vinyl': '/luxury-vinyl',
      'Vinyl': '/luxury-vinyl',
      'Laminate': '/laminate',
    };
    
    // Check exact match first
    if (routeMap[product]) {
      return routeMap[product];
    }
    
    // Check if product contains keywords
    if (product.toLowerCase().includes('hardwood') || product.toLowerCase().includes('wood')) {
      return '/hardwood';
    }
    if (product.toLowerCase().includes('carpet')) {
      return '/carpet';
    }
    if (product.toLowerCase().includes('tile')) {
      return '/tile';
    }
    if (product.toLowerCase().includes('vinyl')) {
      return '/luxury-vinyl';
    }
    if (product.toLowerCase().includes('laminate')) {
      return '/laminate';
    }
    
    return null;
  };

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FLOORING PRODUCTS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            All Flooring Products
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive selection of commercial flooring solutions. From traditional options to cutting-edge materials, we have everything you need for your commercial project.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const route = getProductRoute(product);
            const ProductComponent = route ? Link : 'div';
            const props = route ? { to: route } : {};
            
            return (
              <ProductComponent
                key={index}
                {...props}
                className={`bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${
                  route ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{product}</h3>
                  {route && (
                    <ArrowRight className="w-5 h-5 text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </ProductComponent>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Flooring?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our commercial flooring experts are here to help you select the perfect flooring solution for your project. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:16024151919"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Call 602-415-1919
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default AllFlooringProducts;

