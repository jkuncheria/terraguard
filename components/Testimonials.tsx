import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'E S',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'I just dropped off two pallets of flooring, they opened their dock early for me, the people were passionate about the jobs they provide to their community, the "boss man" came out and made sure I was being taken care of and not having to wait to unload, employees were fast, efficient, polite, well groomed, skilled, and gave myself and my co-driver 2 bottles of cold water each when they realized we were from out of town and were just winging it in the desert. Kinda makes me wish I lived nearby just so I could patronize such an awesome business.',
    product: 'Commercial Flooring'
  },
  {
    id: 2,
    name: 'Sean Patrick',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'I can\'t say enough good things about James, Terry, Chris and this company. They just wrapped a ten-location flooring project for one of our customers in the Phoenix Area and throughout the whole process, they maintained excellent communication in relaying project progress, details and completion photos to us at our offices here in Ohio. They even handled the logistics for us regarding the placement and relocating of the refrigeration trucks needed for perishables to be stored while the restaurant coolers were getting their new floors. They worked with us and our customer to schedule and complete these jobs at a time and in a manner that was the least disruptive to our customer\'s business so I would highly recommend them for any flooring job needed and look forward to working with them again in the future.',
    product: 'Tile Installation'
  },
  {
    id: 3,
    name: 'Leanne Kinnard',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Just had a great experience with ABS. The carpet looks beautiful. Great selection, good quality, fair prices superior service. They took great care to come to my house, and guide me to the right products for my situation. They delivered what they promised when they promised in a clean and efficient fashion. Fantastic installer. Highly recommend ABS!',
    product: 'Carpet'
  },
  {
    id: 4,
    name: 'AFSP Arizona',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Working with Terry and his staff have been amazing. Their attention to detail, craftsmanship, and communication have been above my expectations! They are very competitively priced and I will absolutely be coming back for my next project!',
    product: 'Commercial Flooring'
  },
  {
    id: 5,
    name: 'Leigh Adelmann',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Great team! Couldn\'t be happier with the detail and professionalism!',
    product: 'Professional Installation'
  },
  {
    id: 6,
    name: 'Mark Hart',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Good people',
    product: 'Customer Service'
  }
];

const Testimonials: React.FC = () => {

  // Add Review Schema JSON-LD
  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "TerraGuard",
      "image": "https://www.absflooring.com/abslogo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1430 N 29th Ave",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "postalCode": "85009",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": testimonials.length.toString()
      },
      "review": testimonials.map(t => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": t.text
      }))
    };

    // Remove existing review schema if present
    const existingScript = document.querySelector('script[data-schema="reviews"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new review schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'reviews');
    script.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="reviews"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const renderTestimonials = () => (
    <>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-12 h-12 text-blue-900" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
              "{testimonial.text}"
            </p>

            {/* Product Badge */}
            {testimonial.product && (
              <div className="mb-4">
                <span className="inline-block bg-blue-50 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.product}
                </span>
              </div>
            )}

            {/* Customer Info */}
            <div className="border-t border-gray-100 pt-4">
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">WHAT OUR CUSTOMERS SAY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            See What Our Clients Are Saying
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See what real customers have to say about their TerraGuard experience.
          </p>
        </div>

        {/* Google Reviews Header Banner */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Google Logo */}
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xl font-semibold text-gray-900">Reviews</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900">5.0</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(12)</span>
              </div>
            </div>

            {/* Review Button */}
            <a
              href="https://www.google.com/maps/place/ABS+Floor+Covering/@33.4646836,-112.1242513,17z/data=!4m18!1m9!3m8!1s0x872b1397ad96236f:0x13b931f5042e3ed1!2sABS+Floor+Covering!8m2!3d33.4646792!4d-112.1216764!9m1!1b1!16s%2Fg%2F1wnbygyw!3m7!1s0x872b1397ad96236f:0x13b931f5042e3ed1!8m2!3d33.4646792!4d-112.1216764!9m1!1b1!16s%2Fg%2F1wnbygyw?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Review us on Google
            </a>
          </div>
        </div>

        {/* Testimonials */}
        {renderTestimonials()}
      </div>
    </section>
  );
};

export default Testimonials;

