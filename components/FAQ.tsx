import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What types of industrial flooring does TerraGuard install?',
          answer: 'TerraGuard specializes in high-performance industrial flooring systems including epoxy flooring, urethane cement, ESD/conductive flooring, traffic coatings, and polished concrete. Each system is engineered for specific industrial environments and performance requirements.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including food & beverage processing, automotive manufacturing, aerospace facilities, pharmaceutical plants, warehouses, distribution centers, and sports & entertainment venues. Our flooring solutions are designed to meet the specific regulatory and performance requirements of each industry.'
        },
        {
          question: 'What areas does TerraGuard service?',
          answer: 'TerraGuard is based in Phoenix, Arizona and serves commercial and industrial clients throughout Arizona and the greater Southwest region. Contact us to discuss your project location and we\'ll confirm our availability.'
        },
        {
          question: 'How do I get a quote for my project?',
          answer: 'Submit an inquiry through our website or email us. We\'ll schedule a site visit to assess your facility, discuss your requirements, and provide a detailed, no-obligation quote for your project.'
        }
      ]
    },
    {
      category: 'Flooring Systems',
      questions: [
        {
          question: 'What is epoxy flooring and where is it used?',
          answer: 'Epoxy flooring is a seamless, chemical-resistant coating system ideal for industrial environments. It\'s commonly used in manufacturing facilities, warehouses, automotive shops, and any space requiring durability, easy cleaning, and resistance to chemicals, impacts, and heavy traffic.'
        },
        {
          question: 'What is urethane cement flooring?',
          answer: 'Urethane cement is a heavy-duty flooring system designed for extreme environments. It offers exceptional thermal shock resistance (withstanding temperatures from -40°F to 250°F), making it ideal for food & beverage processing, commercial kitchens, breweries, and pharmaceutical facilities where hot water washdowns and steam cleaning are common.'
        },
        {
          question: 'What is ESD/conductive flooring?',
          answer: 'ESD (Electrostatic Discharge) flooring is designed to safely dissipate static electricity, protecting sensitive electronic components and personnel. It\'s essential for electronics manufacturing, data centers, server rooms, aerospace facilities, and any environment where static discharge could damage equipment or create safety hazards.'
        },
        {
          question: 'What are traffic coatings used for?',
          answer: 'Traffic coatings are durable, waterproof systems designed for parking structures, ramps, walkways, and other vehicular or pedestrian traffic areas. They protect concrete from water infiltration, chemical exposure, and abrasion while providing slip-resistant surfaces for safety.'
        }
      ]
    },
    {
      category: 'Installation Process',
      questions: [
        {
          question: 'How long does industrial flooring installation take?',
          answer: 'Installation timelines vary based on the flooring system, square footage, and surface preparation required. Most projects range from 3-10 days. We work efficiently to minimize downtime and can often schedule work during off-hours or weekends to reduce disruption to your operations.'
        },
        {
          question: 'What surface preparation is required?',
          answer: 'Proper surface preparation is critical for industrial flooring performance. This typically includes concrete grinding, shot blasting, or diamond grinding to create the proper profile for coating adhesion. We also address cracks, spalls, and moisture issues before installation.'
        },
        {
          question: 'Can you install flooring while our facility is operational?',
          answer: 'Yes, we frequently work in occupied facilities. We can phase the installation to keep portions of your facility operational, work during off-hours, or coordinate with your production schedule. We\'ll develop a plan that minimizes impact on your operations.'
        },
        {
          question: 'Do you handle concrete repair before installation?',
          answer: 'Absolutely. Our team addresses all concrete issues including crack repair, spall repair, joint filling, and leveling as part of the surface preparation process. Proper concrete repair is essential for a long-lasting flooring system.'
        }
      ]
    },
    {
      category: 'Performance & Compliance',
      questions: [
        {
          question: 'Are your flooring systems USDA/FDA compliant?',
          answer: 'Yes, we install flooring systems that meet USDA and FDA requirements for food processing and pharmaceutical facilities. Our urethane cement and epoxy systems are designed for environments requiring strict sanitation standards and regulatory compliance.'
        },
        {
          question: 'How do your floors handle chemical exposure?',
          answer: 'Our industrial flooring systems are engineered for chemical resistance. We\'ll recommend the appropriate system based on the specific chemicals in your environment, whether acids, alkalis, solvents, or other industrial chemicals. We can provide chemical resistance charts for each system.'
        },
        {
          question: 'What slip resistance options are available?',
          answer: 'We offer various slip-resistant textures and aggregate additives to meet OSHA requirements and your specific safety needs. Options range from light texture for easy cleaning to heavy-duty anti-slip surfaces for wet or oily environments.'
        },
        {
          question: 'How long will industrial flooring last?',
          answer: 'With proper installation and maintenance, industrial flooring systems typically last 10-20+ years depending on the system type and operating conditions. Urethane cement systems often last 20+ years even in demanding environments. We\'ll recommend the best system for your expected lifespan requirements.'
        }
      ]
    },
    {
      category: 'Warranty & Support',
      questions: [
        {
          question: 'What warranty do you provide?',
          answer: 'TerraGuard provides comprehensive warranties on both materials and workmanship. Specific warranty terms vary by flooring system and will be detailed in your project proposal. We stand behind our installations and are committed to your long-term satisfaction.'
        },
        {
          question: 'Do you offer maintenance services?',
          answer: 'Yes, we offer maintenance programs to extend the life of your flooring investment. This includes periodic inspections, recoating services, and repair work as needed. Regular maintenance can significantly extend the lifespan of your industrial flooring.'
        },
        {
          question: 'What if there\'s an issue with my flooring after installation?',
          answer: 'Contact us immediately if you experience any issues. We respond quickly to address concerns and will assess the situation to determine the appropriate solution. Our goal is to ensure your flooring performs as expected for years to come.'
        },
        {
          question: 'Is TerraGuard a licensed contractor?',
          answer: 'Yes, TerraGuard is a fully licensed and insured Arizona contractor. We carry comprehensive liability insurance and workers\' compensation coverage. We\'re happy to provide certificates of insurance for your records.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Flatten all FAQs for easier management
  const allFaqs = faqs.flatMap(category => category.questions);

  // Add FAQ Schema JSON-LD
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove existing FAQ schema if present
    const existingScript = document.querySelector('script[data-schema="faq"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new FAQ schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'faq');
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="faq"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, installation, and more. 
            Can't find what you're looking for? <Link to="/contact" className="text-blue-900 font-semibold hover:underline">Contact us</Link> and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <HelpCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = faqs.slice(0, categoryIdx).reduce((acc, cat) => acc + cat.questions.length, 0) + idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-900 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                      {openFaq === globalIndex ? (
                        <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === globalIndex && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our flooring experts are here to help. Contact us today and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

