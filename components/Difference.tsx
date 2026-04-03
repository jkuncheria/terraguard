import React from 'react';
import { DIFFERENCE_FEATURES } from '../constants';

const Difference: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">The TerraGuard DIFFERENCE</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We are locally owned and operated, and we're dedicated to helping you find the perfect floor for the way you live.
            </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {DIFFERENCE_FEATURES.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="bg-blue-50 p-4 rounded-full flex-shrink-0 mb-4">
                        {feature.icon}
                    </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;