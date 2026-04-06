import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
              <img 
                src="/TerraGuard-Images/terraguard-transparent.png" 
                alt="TerraGuard - Industrial Flooring Contractor Arizona" 
                loading="lazy"
                width="160"
                height="64"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Licensed Arizona Contractor<br />
              3414 S. 48th Street, Suite #1, Phoenix, AZ 85040
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /><a href="mailto:caleb@terraguardusa.com" className="hover:text-blue-900">caleb@terraguardusa.com</a></p>
            </div>
          </div>

          {/* Flooring Systems */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Flooring Systems</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/flooring-systems" onClick={scrollToTop} className="hover:text-blue-900">
                  All Flooring Systems
                </Link>
              </li>
              <li>
                <Link to="/epoxy-flooring" onClick={scrollToTop} className="hover:text-blue-900">
                  Epoxy Flooring
                </Link>
              </li>
              <li>
                <Link to="/urethane-cement" onClick={scrollToTop} className="hover:text-blue-900">
                  Urethane Cement
                </Link>
              </li>
              <li>
                <Link to="/esd-conductive" onClick={scrollToTop} className="hover:text-blue-900">
                  ESD/Conductive
                </Link>
              </li>
              <li>
                <Link to="/traffic-coating" onClick={scrollToTop} className="hover:text-blue-900">
                  Traffic Coating
                </Link>
              </li>
              <li>
                <Link to="/polished-concrete" onClick={scrollToTop} className="hover:text-blue-900">
                  Polished Concrete
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/industries/food-beverage" onClick={scrollToTop} className="hover:text-blue-900">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link to="/industries/automotive" onClick={scrollToTop} className="hover:text-blue-900">
                  Automotive
                </Link>
              </li>
              <li>
                <Link to="/industries/manufacturing" onClick={scrollToTop} className="hover:text-blue-900">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/aerospace" onClick={scrollToTop} className="hover:text-blue-900">
                  Aerospace
                </Link>
              </li>
              <li>
                <Link to="/industries/sports-entertainment" onClick={scrollToTop} className="hover:text-blue-900">
                  Sports & Entertainment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-blue-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/project-gallery" onClick={scrollToTop} className="hover:text-blue-900">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-blue-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-xs text-gray-500">
          <p>&copy; 2026 TerraGuard. All Rights Reserved. Licensed Arizona Contractor.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;