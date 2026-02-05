import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We went from page 2 to the top of Google Maps in under 6 weeks. Calls are up 200%.",
      author: "Dr. Sarah Lee",
      practice: "Brisbane Family Dental",
      rating: 5,
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "Patient flow doubled in 3 months — the ROI is insane.",
      author: "Dr. Mark Simmons",
      practice: "Austin Dental",
      rating: 5,
      image: "https://images.pexels.com/photos/6812569/pexels-photo-6812569.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Happy Clients.{' '}
            <span className="text-blue-600">Growing Practices.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 mb-6 text-center italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.author} headshot`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  loading="lazy"
                />
                <div className="text-center">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.practice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 100+ Dental Practices Growing with ToothRanker
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Average 180% increase in calls
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                #1 rankings in 6-12 weeks
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                500+ 5-star reviews generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;