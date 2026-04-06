import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refs = Object.values(dropdownRefs.current) as (HTMLDivElement | null)[];
      const clickedOutside = refs.every(
        (ref: HTMLDivElement | null) => {
          if (!ref) return true;
          return !ref.contains(event.target as Node);
        }
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full flex flex-col font-sans z-50 relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-center items-center border-b border-gray-200">
        <Link 
          to="/contact" 
          onClick={scrollToTop}
          className="text-center text-blue-900 font-semibold hover:text-blue-900/80 transition-colors cursor-pointer"
        >
          <span>🏆 INDUSTRIAL FLOORING EXPERTS | GET YOUR FREE QUOTE</span>
        </Link>
      </div>

      {/* Main Header Content */}
      <div className="bg-white py-5 md:py-6 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex justify-between items-center md:grid md:grid-cols-3 relative min-h-[60px] md:min-h-0">
          
          {/* Mobile Contact Button (Left side on mobile) */}
          <div className="flex items-center md:hidden">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="p-2 border-2 border-blue-900 text-blue-900 rounded-lg"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Logo - Centered */}
          <div className="flex justify-center md:col-start-2 md:col-end-3">
            <Link to="/" onClick={scrollToTop} className="flex items-center justify-center group">
              <img 
                src="/TerraGuard-Images/terraguard-transparent.png" 
                alt="TerraGuard - Industrial Flooring Contractor Arizona" 
                width="200"
                height="80"
                className="h-8 md:h-16 lg:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle (Right side on mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 md:col-start-3 md:col-end-4 md:justify-end">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="flex items-center bg-blue-900 hover:bg-blue-900/90 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>

          {/* Search & Store Locator (Desktop) - COMMENTED OUT */}
          {/* <div className="hidden md:flex flex-1 max-w-2xl mx-8 items-center space-x-4">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search for floors, inspiration, and more..." 
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            <button className="flex items-center text-blue-900 font-semibold text-sm whitespace-nowrap hover:underline">
              <MapPin className="w-4 h-4 mr-1" />
              Find a Store
            </button>
          </div> */}

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-blue-900 text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 text-sm font-extrabold py-4 md:py-0">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="border-b border-blue-900/80 md:border-none last:border-none relative"
              >
                {item.subItems && item.subItems.length > 0 ? (
                  // Dropdown menu
                  <div 
                    className="relative"
                    ref={(el) => {
                      if (el) {
                        dropdownRefs.current[item.label] = el;
                      }
                    }}
                  >
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full md:w-auto flex items-center justify-between py-3 md:py-4 hover:text-green-600 transition-colors"
                    >
                      <span>{item.label.toUpperCase()}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="md:absolute md:top-full md:left-0 md:mt-0 bg-blue-900 md:shadow-lg md:min-w-[200px] md:rounded-b-lg overflow-hidden">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label} className="border-b border-blue-900/70 last:border-none">
                            <Link
                              to={subItem.href}
                              className="block py-3 px-4 md:px-6 hover:bg-blue-900/80 hover:text-green-600 transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                                scrollToTop();
                              }}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.href.startsWith('#') ? (
                  <a 
                    href={item.href} 
                    className="block py-3 md:py-4 hover:text-green-600 transition-colors"
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : item.href.startsWith('http://') || item.href.startsWith('https://') ? (
                  <a 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 md:py-4 hover:text-green-600 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block py-3 md:py-4 hover:text-green-600 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;