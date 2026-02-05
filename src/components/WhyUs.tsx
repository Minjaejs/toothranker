import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    "Dental industry expertise",
    "Transparent reporting (no jargon)",
    "Results you can measure in calls & appointments",
    "Month-to-month flexibility"
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Don't Do SEO for Everyone —{' '}
              <span className="text-blue-600">We Rank Dentists. Only.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Why Dental-Specific SEO Matters
            </h3>
            <p className="text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
              General SEO agencies don't understand the unique challenges of dental practices. 
              We know the local search patterns, competition dynamics, and patient behaviors 
              specific to dentistry. That's why our clients see faster, more sustainable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;