import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, Images } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

interface Project {
  id: string;
  name: string;
  description: string;
  industry: string;
  images: string[];
}

const ProjectGallery: React.FC = () => {
  const seo = SEO_CONFIG.pages.projectGallery;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 'gti-fabrication',
      name: 'GTI Fabrication',
      description: 'ESD (electrostatic dissipative) flooring system spanning 4,800 sq ft at GTI Fabrication. Static-control coating engineered to protect sensitive electronics and equipment from electrostatic discharge in demanding manufacturing environments.',
      industry: 'Manufacturing',
      images: [
        '/TerraGuard-Images/projects/GTI Fabrication/GTI Fabrication (ESD) - After (1).jpg',
        '/TerraGuard-Images/projects/GTI Fabrication/GTI Fabrication (ESD) - After (2).jpg',
        '/TerraGuard-Images/projects/GTI Fabrication/GTI Fabrication (ESD) - After (3).jpg',
        '/TerraGuard-Images/projects/GTI Fabrication/GTI Fabrication (ESD) - After (4).jpg',
      ]
    },
    {
      id: 'kettle-heroes-popcorn',
      name: 'Kettle Heroes Popcorn',
      description: 'Urethane cement flooring installation using Sika Ucrete SLB across 4,798 sq ft at Kettle Heroes Popcorn\'s production facility. USDA-compliant, thermal shock and chemical resistant system engineered for the demanding sanitation requirements of food manufacturing.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Kettle Heroes Popcorn/Kettle Heroes Popcorn (Urethane Cement) - After (1).jpg',
        '/TerraGuard-Images/projects/Kettle Heroes Popcorn/Kettle Heroes Popcorn (Urethane Cement) - After (2).jpg',
        '/TerraGuard-Images/projects/Kettle Heroes Popcorn/Kettle Heroes Popcorn (Urethane Cement) - After (3).jpg',
        '/TerraGuard-Images/projects/Kettle Heroes Popcorn/Kettle Heroes Popcorn (Urethane Cement) - After (4).jpg',
        '/TerraGuard-Images/projects/Kettle Heroes Popcorn/Kettle Heroes Popcorn (Urethane Cement) - After (5).jpg',
      ]
    },
    {
      id: 'asu-wet-lab',
      name: 'ASU Wet Lab',
      description: 'High-performance epoxy flooring installation for Arizona State University\'s wet laboratory facility. Chemical-resistant coating designed to withstand harsh lab environments.',
      industry: 'Education',
      images: [
        '/TerraGuard-Images/projects/ASU Wet Lab/1.png',
        '/TerraGuard-Images/projects/ASU Wet Lab/2.png',
        '/TerraGuard-Images/projects/ASU Wet Lab/3.png',
        '/TerraGuard-Images/projects/ASU Wet Lab/4.png',
        '/TerraGuard-Images/projects/ASU Wet Lab/5.png',
      ]
    },
    {
      id: 'factor-75-goodyear',
      name: 'Factor 75 Goodyear',
      description: 'USDA-compliant urethane cement flooring for Factor 75\'s food production facility in Goodyear. Thermal shock resistant and easy to sanitize.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Factor 75 Goodyear/1.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/2.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/3.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/4.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/5.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/6.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/7.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/8.png',
        '/TerraGuard-Images/projects/Factor 75 Goodyear/9.png',
      ]
    },
    {
      id: 'gkn-aerospace',
      name: 'GKN Aerospace',
      description: 'Industrial epoxy flooring system for GKN Aerospace manufacturing facility. Heavy-duty coating designed for aerospace production environments.',
      industry: 'Aerospace',
      images: [
        '/TerraGuard-Images/projects/GKN Aerospace/1.png',
        '/TerraGuard-Images/projects/GKN Aerospace/2.png',
        '/TerraGuard-Images/projects/GKN Aerospace/3.png',
        '/TerraGuard-Images/projects/GKN Aerospace/4.png',
        '/TerraGuard-Images/projects/GKN Aerospace/5.png',
      ]
    },
    {
      id: 'luke-afb',
      name: 'Luke AFB',
      description: 'Military-grade flooring installation at Luke Air Force Base. Durable epoxy coating for high-traffic military facility applications.',
      industry: 'Government/Military',
      images: [
        '/TerraGuard-Images/projects/Luke AFB/1.png',
        '/TerraGuard-Images/projects/Luke AFB/2.png',
        '/TerraGuard-Images/projects/Luke AFB/3.png',
        '/TerraGuard-Images/projects/Luke AFB/4.png',
        '/TerraGuard-Images/projects/Luke AFB/5.png',
      ]
    },
    {
      id: 'pepsi',
      name: 'Pepsi',
      description: 'Food-grade flooring system for Pepsi beverage production facility. USDA-compliant coating with excellent chemical and thermal resistance.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Pepsi/1.png',
        '/TerraGuard-Images/projects/Pepsi/2.png',
        '/TerraGuard-Images/projects/Pepsi/3.png',
      ]
    },
    {
      id: 'project-discovery',
      name: 'Project Discovery',
      description: 'Custom industrial flooring solution featuring specialized coatings for unique facility requirements.',
      industry: 'Commercial',
      images: [
        '/TerraGuard-Images/projects/Project Discovery/1.png',
        '/TerraGuard-Images/projects/Project Discovery/2.png',
        '/TerraGuard-Images/projects/Project Discovery/3.png',
        '/TerraGuard-Images/projects/Project Discovery/4.png',
        '/TerraGuard-Images/projects/Project Discovery/5.png',
      ]
    },
    {
      id: 'jbs-harvest',
      name: 'JBS Harvest',
      description: 'Urethane cement flooring installation for JBS Harvest food processing facility. USDA-compliant, thermal shock resistant, and engineered to handle the demanding sanitation requirements of meat processing.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/JBS-Harvest/1.png',
        '/TerraGuard-Images/projects/JBS-Harvest/2.png',
        '/TerraGuard-Images/projects/JBS-Harvest/3.png',
        '/TerraGuard-Images/projects/JBS-Harvest/4.png',
        '/TerraGuard-Images/projects/JBS-Harvest/5.png',
      ]
    },
    {
      id: 'dema-vmf',
      name: 'DEMA VMF',
      description: 'Quarter inch epoxy mortar flooring system designed for heavy-duty industrial use. Provides exceptional impact resistance and long-term durability for demanding operational environments.',
      industry: 'Industrial',
      images: [
        '/TerraGuard-Images/projects/Dema-VMF/1.png',
        '/TerraGuard-Images/projects/Dema-VMF/2.png',
      ]
    },
    {
      id: 'jspc-warehouse',
      name: 'JSPC Warehouse',
      description: 'Metallic epoxy flooring installation spanning 15,000 sq ft. Combines a striking decorative finish with the durability and chemical resistance required for warehouse operations.',
      industry: 'Warehouse',
      images: [
        '/TerraGuard-Images/projects/JSPC-Warehouse/1.png',
        '/TerraGuard-Images/projects/JSPC-Warehouse/2.png',
        '/TerraGuard-Images/projects/JSPC-Warehouse/3.png',
        '/TerraGuard-Images/projects/JSPC-Warehouse/4.png',
        '/TerraGuard-Images/projects/JSPC-Warehouse/5.png',
      ]
    },
    {
      id: 'stream-data-center',
      name: 'Stream Data Center',
      description: 'Thin film epoxy flooring system across 25,000 sq ft of mission-critical data center space. Clean, dust-resistant finish engineered for high-traffic technical environments.',
      industry: 'Data Center',
      images: [
        '/TerraGuard-Images/projects/Stream-Data-Center/1.png',
        '/TerraGuard-Images/projects/Stream-Data-Center/2.png',
        '/TerraGuard-Images/projects/Stream-Data-Center/3.png',
      ]
    },
    {
      id: 'halal-guys',
      name: 'Halal Guys',
      description: 'Thin film epoxy flooring installation for The Halal Guys commercial kitchen. Seamless, easy-to-clean finish that meets food service sanitation standards.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Halal-Guys/1.png',
        '/TerraGuard-Images/projects/Halal-Guys/2.png',
        '/TerraGuard-Images/projects/Halal-Guys/3.png',
      ]
    },
    {
      id: 'university-of-arizona-hsib',
      name: 'University of Arizona HSIB',
      description: 'Epoxy quartz flooring installation at the University of Arizona Health Sciences Innovation Building. Slip-resistant, decorative finish engineered for high-performance educational and research environments.',
      industry: 'Education',
      images: [
        '/TerraGuard-Images/projects/University of Arizona HSIB/1.png',
        '/TerraGuard-Images/projects/University of Arizona HSIB/2.png',
        '/TerraGuard-Images/projects/University of Arizona HSIB/3.png',
        '/TerraGuard-Images/projects/University of Arizona HSIB/4.png',
        '/TerraGuard-Images/projects/University of Arizona HSIB/5.png',
        '/TerraGuard-Images/projects/University of Arizona HSIB/6.png',
      ]
    },
    {
      id: 'benchmark-electronics',
      name: 'Benchmark Electronics',
      description: 'Epoxy flake flooring system for Benchmark Electronics manufacturing facility. Decorative, durable finish that provides chemical resistance and easy maintenance for electronics production environments.',
      industry: 'Manufacturing',
      images: [
        '/TerraGuard-Images/projects/Benchmark-Electronics/1.png',
        '/TerraGuard-Images/projects/Benchmark-Electronics/2.png',
        '/TerraGuard-Images/projects/Benchmark-Electronics/3.png',
      ]
    },
    {
      id: 'royal-oaks',
      name: 'Royal Oaks',
      description: 'Polished concrete flooring installation at Royal Oaks. Low-maintenance, reflective finish providing a high-end aesthetic alongside long-term durability.',
      industry: 'Commercial',
      images: [
        '/TerraGuard-Images/projects/Royal-Oaks/1.png',
        '/TerraGuard-Images/projects/Royal-Oaks/2.png',
      ]
    },
    {
      id: 'factor-75-goodyear-grind-seal',
      name: 'Factor 75 Goodyear – Grind & Seal',
      description: 'Grind & seal concrete installation spanning 30,000 sq ft at Factor 75\'s Goodyear food production facility. Provides a durable, low-maintenance finish with enhanced surface protection.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Factor75-Grind/1.png',
        '/TerraGuard-Images/projects/Factor75-Grind/2.png',
        '/TerraGuard-Images/projects/Factor75-Grind/3.png',
      ]
    },
    {
      id: 'factor-75-goodyear-sealed-concrete',
      name: 'Factor 75 Goodyear – Sealed Concrete',
      description: 'Sealed concrete installation spanning 170,000 sq ft at Factor 75\'s Goodyear food production facility. Large-scale densified and sealed finish engineered for warehouse and production environments.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Factor75-Sealed/1.png',
        '/TerraGuard-Images/projects/Factor75-Sealed/2.png',
        '/TerraGuard-Images/projects/Factor75-Sealed/3.png',
      ]
    },
    {
      id: 'one-camelback',
      name: 'One Camelback',
      description: 'Polishable topping installation spanning 12,500 sq ft at One Camelback. High-end decorative concrete finish engineered for premium commercial spaces.',
      industry: 'Commercial',
      images: [
        '/TerraGuard-Images/projects/One-Camelback/1.png',
        '/TerraGuard-Images/projects/One-Camelback/2.png',
        '/TerraGuard-Images/projects/One-Camelback/3.png',
        '/TerraGuard-Images/projects/One-Camelback/4.png',
        '/TerraGuard-Images/projects/One-Camelback/5.png',
      ]
    },
    {
      id: 'mco-joc-jackson-st-garage',
      name: 'MCO JOC Jackson St. Garage',
      description: 'Recently completed Traffic Coating system installation spanning 87,990 sq ft. Durable waterproof membrane protection designed for high-traffic parking structure environments.',
      industry: 'Parking Structure',
      images: [
        '/TerraGuard-Images/projects/Jackson-St-Garage/1.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/2.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/3.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/4.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/5.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/6.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/7.jpg',
        '/TerraGuard-Images/projects/Jackson-St-Garage/8.jpg',
      ]
    },
    {
      id: 'chavez-kitchen-remodel',
      name: 'Chavez Kitchen Remodel',
      description: 'Urethane cement flooring installation spanning 4,600 sq ft as part of a full commercial kitchen remodel. USDA-compliant, thermal shock and chemical resistant system built to hold up to hot water washdowns, grease, and heavy daily foot traffic.',
      industry: 'Food & Beverage',
      images: [
        '/TerraGuard-Images/projects/Chavez-Kitchen/Chavez Kitchen Remodel (Urethane Cement) - After (1).jpg',
        '/TerraGuard-Images/projects/Chavez-Kitchen/Chavez Kitchen Remodel (Urethane Cement) - After (2).jpg',
        '/TerraGuard-Images/projects/Chavez-Kitchen/Chavez Kitchen Remodel (Urethane Cement) - After (3).jpg',
        '/TerraGuard-Images/projects/Chavez-Kitchen/Chavez Kitchen Remodel (Urethane Cement) - After (4).jpg',
        '/TerraGuard-Images/projects/Chavez-Kitchen/Chavez Kitchen Remodel (Urethane Cement) - After (5).jpg',
      ]
    },
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 px-6 lg:px-16">
        <div className="container mx-auto text-center">
          <span className="inline-block text-green-500 font-semibold tracking-wider text-sm uppercase mb-4">Our Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of industrial flooring projects across Arizona. Each project showcases our commitment to quality and performance.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                onClick={() => openProject(project)}
              >
                {/* Project Thumbnail */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img
                    src={project.images[0]}
                    alt={`${project.name} - Industrial flooring project by TerraGuard`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Image count badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                    <Images className="w-4 h-4" />
                    {project.images.length} photos
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50 px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-green-500 font-semibold tracking-wider text-sm uppercase mb-4">See Us In Action</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Power Trowel Finishing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our team use professional power trowel equipment to achieve a smooth, durable concrete finish.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <video 
                className="w-full h-full object-contain"
                controls
                preload="metadata"
                playsInline
                title="Power trowel concrete finishing by TerraGuard Arizona flooring contractor"
                aria-label="Video showing professional power trowel equipment smoothing concrete floor surface"
              >
                <source src="/TerraGuard-Images/power-trowel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeProject}
        >
          <div className="relative w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-4 md:p-6 border-b border-white/10">
              <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-bold text-white">{selectedProject.name}</h2>
                <p className="text-green-500 text-sm font-semibold mb-2">{selectedProject.industry}</p>
                <p className="text-gray-300 text-sm md:text-base">{selectedProject.description}</p>
              </div>
              <button
                onClick={closeProject}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 min-h-0 flex items-center justify-center relative px-4 py-8">
              {/* Previous Button */}
              {currentImageIndex > 0 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Image */}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain rounded-lg"
              />

              {/* Next Button */}
              {currentImageIndex < selectedProject.images.length - 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="p-4 md:p-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-green-500 opacity-100' 
                        : 'border-transparent opacity-50 hover:opacity-75'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-gray-400 text-sm mt-3">
                {currentImageIndex + 1} of {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;

