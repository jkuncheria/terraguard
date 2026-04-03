// SEO Configuration for all pages
export const SEO_CONFIG = {
  baseUrl: 'https://www.terraguardusa.com',
  siteName: 'TerraGuard',
  defaultImage: '/terraguard-logo.png',
  
  pages: {
    home: {
      title: 'TerraGuard | Commercial & Industrial Flooring Contractor Arizona',
      description: "TerraGuard is Arizona's premier commercial and industrial flooring contractor. Expert installation of epoxy, urethane cement, ESD flooring, traffic coatings & polished concrete. Licensed contractor serving food & beverage, automotive, aerospace & more.",
      path: '/'
    },
    flooringSystems: {
      title: 'Industrial Flooring Systems | TerraGuard Arizona',
      description: 'Complete industrial flooring solutions including epoxy, urethane cement, ESD/conductive flooring, traffic coatings, and polished concrete. Licensed Arizona contractor.',
      path: '/flooring-systems'
    },
    epoxyFlooring: {
      title: 'Epoxy Flooring Arizona | Commercial & Industrial | TerraGuard',
      description: 'Professional epoxy flooring installation in Arizona. Durable, chemical-resistant coatings for warehouses, manufacturing, food processing & industrial facilities. Licensed contractor.',
      path: '/epoxy-flooring'
    },
    urethaneCement: {
      title: 'Urethane Cement Flooring Arizona | TerraGuard',
      description: 'Heavy-duty urethane cement flooring for food & beverage, pharmaceutical, and industrial facilities. Thermal shock resistant, USDA compliant. Licensed Arizona contractor.',
      path: '/urethane-cement'
    },
    esdConductive: {
      title: 'ESD & Conductive Flooring Arizona | TerraGuard',
      description: 'Static-dissipative and conductive flooring for electronics manufacturing, aerospace, and data centers. ESD protection for sensitive environments. Licensed Arizona contractor.',
      path: '/esd-conductive'
    },
    trafficCoating: {
      title: 'Traffic Coating Systems Arizona | TerraGuard',
      description: 'Durable traffic coating systems for parking structures, pedestrian walkways, and high-traffic commercial areas. Waterproof membrane protection. Licensed Arizona contractor.',
      path: '/traffic-coating'
    },
    polishedConcrete: {
      title: 'Polished & Sealed Concrete Arizona | TerraGuard',
      description: 'Professional polished and sealed concrete flooring in Arizona. Concrete grinding, honing & polishing for commercial, retail & industrial spaces. Low-maintenance, durable finish.',
      path: '/polished-concrete'
    },
    foodBeverage: {
      title: 'Food & Beverage Flooring Arizona | TerraGuard',
      description: 'USDA-compliant flooring solutions for food processing, breweries, restaurants & commercial kitchens. Antimicrobial, slip-resistant, thermal shock resistant options.',
      path: '/industries/food-beverage'
    },
    automotive: {
      title: 'Automotive Flooring Arizona | TerraGuard',
      description: 'Heavy-duty flooring for automotive manufacturing, service centers, dealerships & warehouses. Chemical resistant, durable epoxy and urethane systems. Trusted by Goodyear.',
      path: '/industries/automotive'
    },
    manufacturing: {
      title: 'Manufacturing Flooring Arizona | TerraGuard',
      description: 'Industrial flooring solutions for manufacturing facilities, warehouses & distribution centers. Impact resistant, chemical resistant, easy to maintain. Licensed Arizona contractor.',
      path: '/industries/manufacturing'
    },
    aerospace: {
      title: 'Aerospace Flooring Arizona | TerraGuard',
      description: 'Specialized flooring for aerospace manufacturing and maintenance facilities. ESD protection, chemical resistance, and precision finishes. Licensed Arizona contractor.',
      path: '/industries/aerospace'
    },
    sportsEntertainment: {
      title: 'Sports & Entertainment Flooring Arizona | TerraGuard',
      description: 'Commercial flooring for stadiums, arenas, fitness centers & entertainment venues. Durable, attractive finishes for high-traffic environments. Trusted by ASU.',
      path: '/industries/sports-entertainment'
    },
    about: {
      title: 'About TerraGuard | Licensed Arizona Flooring Contractor',
      description: 'TerraGuard is a licensed Arizona commercial and industrial flooring contractor. Trusted by Goodyear, ASU, Pepsi, University of Arizona, JBS Harvest & more.',
      path: '/about'
    },
    contact: {
      title: 'Contact TerraGuard | Get a Free Quote | Arizona',
      description: 'Contact TerraGuard for a free industrial flooring consultation. Licensed Arizona contractor serving food & beverage, automotive, aerospace, manufacturing & more.',
      path: '/contact'
    },
    faq: {
      title: 'Industrial Flooring FAQ | TerraGuard Arizona',
      description: 'Frequently asked questions about commercial and industrial flooring. Epoxy, urethane cement, ESD flooring, traffic coatings & polished concrete. Expert answers from TerraGuard.',
      path: '/faq'
    },
    projectGallery: {
      title: 'Commercial Flooring Project Gallery | TerraGuard Arizona',
      description: 'View our portfolio of commercial and industrial flooring projects. Food processing, automotive, aerospace, manufacturing & more. Trusted by Goodyear, ASU, Pepsi.',
      path: '/project-gallery'
    }
  }
};

export type PageKey = keyof typeof SEO_CONFIG.pages;
