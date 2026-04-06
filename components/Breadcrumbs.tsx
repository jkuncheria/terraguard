import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeNames: Record<string, string> = {
  '': 'Home',
  'flooring-systems': 'Flooring Systems',
  'epoxy-flooring': 'Epoxy Flooring',
  'urethane-cement': 'Urethane Cement',
  'esd-conductive': 'ESD & Conductive Flooring',
  'traffic-coating': 'Traffic Coating',
  'polished-concrete': 'Polished Concrete',
  'industries': 'Industries',
  'food-beverage': 'Food & Beverage',
  'automotive': 'Automotive',
  'manufacturing': 'Manufacturing',
  'aerospace': 'Aerospace',
  'sports-entertainment': 'Sports & Entertainment',
  'about': 'About Us',
  'contact': 'Contact',
  'faq': 'FAQ',
  'project-gallery': 'Project Gallery',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
};

// Pages that should have a virtual parent breadcrumb
const virtualParents: Record<string, { name: string; path: string }> = {
  'epoxy-flooring': { name: 'Flooring Systems', path: '/flooring-systems' },
  'urethane-cement': { name: 'Flooring Systems', path: '/flooring-systems' },
  'esd-conductive': { name: 'Flooring Systems', path: '/flooring-systems' },
  'traffic-coating': { name: 'Flooring Systems', path: '/flooring-systems' },
  'polished-concrete': { name: 'Flooring Systems', path: '/flooring-systems' },
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
  ];

  // Check if the first segment has a virtual parent
  const firstSegment = pathSegments[0];
  if (firstSegment && virtualParents[firstSegment]) {
    const parent = virtualParents[firstSegment];
    breadcrumbs.push({ name: parent.name, path: parent.path });
  }

  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = routeNames[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    breadcrumbs.push({ name, path: currentPath });
  });

  // Add Breadcrumb Schema
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://www.terraguardusa.com${item.path}`
      }))
    };

    // Remove existing breadcrumb schema if present
    const existingScript = document.querySelector('script[data-schema="breadcrumb"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new breadcrumb schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'breadcrumb');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="breadcrumb"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname]);

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-3">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-600 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-blue-900 hover:text-blue-700 hover:underline flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
