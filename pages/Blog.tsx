import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'retail-flooring-customer-experience-sales',
    title: 'How Retail Flooring Impacts Customer Experience and Sales',
    excerpt: 'Discover how strategic flooring choices can increase dwell time, reinforce your brand identity, and drive higher conversion rates in your retail space.',
    image: '/Project-Gallery/coach-stores.webp',
    date: 'February 4, 2026',
    readTime: '12 min read',
    category: 'Commercial Flooring'
  },
  {
    id: '2',
    slug: 'lvt-vs-hardwood-commercial-flooring',
    title: 'LVT vs. Hardwood Flooring: Which Is Right for Your Commercial Space?',
    excerpt: 'Compare luxury vinyl tile (LVT) and hardwood flooring for commercial spaces. Learn about cost, durability, maintenance, and which option is best for your Phoenix business.',
    image: '/products/hardwood.webp',
    date: 'January 30, 2026',
    readTime: '14 min read',
    category: 'Commercial Flooring'
  },
  {
    id: '3',
    slug: '2026-commercial-flooring-trends-phoenix',
    title: '2026 Commercial Flooring Trends: What Phoenix Business Owners Need to Know',
    excerpt: 'Discover the top commercial flooring trends for 2026 including warm tones, sustainable materials, bold patterns, and low-maintenance options for Phoenix businesses.',
    image: '/Project-Gallery/hilton-garden.webp',
    date: 'January 25, 2026',
    readTime: '11 min read',
    category: 'Industry Trends'
  }
];

const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Flooring Blog | Expert Tips & Industry Insights | TerraGuard"
        description="Expert flooring insights, industry trends, and tips from Phoenix's premier commercial flooring contractor. Learn about retail flooring, commercial design, and more."
        path="/blog"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
        <div className="absolute inset-0 bg-[url('/hotel-thumbnail.webp')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flooring Insights & Expert Tips
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Industry trends, expert advice, and practical guides from Phoenix's trusted commercial flooring professionals.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact TerraGuard for expert flooring consultation and installation services in Phoenix and Scottsdale.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
