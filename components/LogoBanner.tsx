import React from 'react';

const LogoBanner: React.FC = () => {
  const logos: { name: string; image: string; sizeClass?: string; maxWidth?: string }[] = [
    {
      name: 'ASU',
      image: '/Logos/new-logos/asu.png',
    },
    {
      name: 'GKN Aerospace',
      image: '/Logos/new-logos/gkn-aerospace.png',
    },
    {
      name: 'JBS',
      image: '/Logos/new-logos/JBS-Logo.png',
    },
    {
      name: 'Pepsi',
      image: '/Logos/new-logos/pepsi.svg',
      sizeClass: 'h-14 md:h-20',
    },
    {
      name: 'Royal Oaks',
      image: '/Logos/new-logos/royal-oaks.png',
    },
    {
      name: 'University of Arizona',
      image: '/Logos/new-logos/uofa.webp',
    },
    {
      name: 'Factor',
      image: '/Logos/new-logos/factor-food.png',
    },
    {
      name: 'HelloFresh',
      image: '/Logos/new-logos/hello-fresh.png',
    },
    {
      name: 'Purina',
      image: '/Logos/new-logos/Purina-Logo.png',
    },
    {
      name: 'Kettle Heroes Popcorn',
      image: '/Logos/new-logos/kettle-heroes.png',
      sizeClass: 'h-14 md:h-20',
      maxWidth: '150px',
    },
  ];

  const allLogos = [...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-track {
          display: flex;
          width: fit-content;
          animation: scroll-left 30s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .logo-track {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
            Our Past Project Partners
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="logo-track">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 px-8 md:px-12"
              >
                <img
                  src={logo.image}
                  alt={`${logo.name} - TerraGuard project partner`}
                  loading="lazy"
                  className={`${logo.sizeClass ?? 'h-12 md:h-16'} w-auto object-contain`}
                  style={{ minWidth: '100px', maxWidth: logo.maxWidth ?? '160px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoBanner;

