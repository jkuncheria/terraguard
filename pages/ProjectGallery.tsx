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

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeProject}
        >
          <div className="relative w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">{selectedProject.name}</h2>
                <p className="text-gray-400 text-sm">{selectedProject.industry}</p>
              </div>
              <button
                onClick={closeProject}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 flex items-center justify-center relative px-4 py-8">
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
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
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

