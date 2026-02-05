import React from 'react';

const Services: React.FC = () => {

  const services = [
    {
      emoji: "🦷",
      title: "Google Business Profile Optimization",
      description: "Get found in the \"Dentist Near Me\" search."
    },
    {
      emoji: "📍",
      title: "Local Citation Building",
      description: "Consistent NAP across top directories."
    },
    {
      emoji: "💻",
      title: "Website SEO",
      description: "Fast, mobile-friendly, and keyword-optimized."
    },
    {
      emoji: "⭐",
      title: "Reviews & Reputation",
      description: "Automated systems to get more 5-star reviews."
    },
    {
      emoji: "🔗",
      title: "Link & Map Pack Authority",
      description: "Earn local links that boost visibility."
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Local SEO Built Exclusively for{' '}
            <span className="text-blue-600">Dentists</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/d/cjnq-qtv-5sf/toothranker-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;