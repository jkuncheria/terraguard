import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Phone, Mail } from 'lucide-react';

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
              8110 N 13th Wy, Phoenix, AZ
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /><a href="tel:16027369955" className="hover:text-blue-900">602-736-9955</a></p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /><a href="mailto:info@terraguardusa.com" className="hover:text-blue-900">info@terraguardusa.com</a></p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/terraguard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-900/80 transition-colors"><Linkedin className="w-5 h-5"/></a>
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

          {/* Business Hours */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Business Hours</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Monday</span>
                <span>7 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Tuesday</span>
                <span>7 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Wednesday</span>
                <span>7 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Thursday</span>
                <span>7 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Friday</span>
                <span>7 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Saturday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            
            {/* Clients */}
            <div className="mt-6">
              <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Trusted By</h4>
              <p className="text-xs text-gray-500">Goodyear • ASU • Pepsi • JBS Harvest • U of A • Royal Oaks</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 TerraGuard. All Rights Reserved. Licensed Arizona Contractor.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;