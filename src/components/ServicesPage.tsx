import React from 'react';
import { ArrowRight, MapPin, Zap, Star, Link, BarChart3, Video, Calendar } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const ServicesPage: React.FC = () => {
  const { openModal } = useModal();
  const calendlyUrl = 'https://calendly.com/d/cjnq-qtv-5sf/toothranker-strategy-call';

  const services = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Google Business Profile Optimization",
      description: "Get found in the 'Dentist Near Me' search.",
      details: [
        "Complete profile setup and optimization",
        "Photo and video management",
        "Post scheduling and updates",
        "Q&A management",
        "Booking integration setup"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Local Citation Building",
      description: "Consistent NAP across top directories.",
      details: [
        "Citation audit and cleanup",
        "Submission to 50+ authoritative directories",
        "NAP (Name, Address, Phone) consistency",
        "Schema markup implementation",
        "Local directory management"
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Website SEO",
      description: "Fast, mobile-friendly, and keyword-optimized.",
      details: [
        "Technical SEO audit",
        "On-page optimization",
        "Mobile responsiveness",
        "Site speed optimization",
        "Schema markup and structured data"
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-600" />,
      title: "Reviews & Reputation Management",
      description: "Automated systems to get more 5-star reviews.",
      details: [
        "Review request automation",
        "Review monitoring across platforms",
        "Response strategy for reviews",
        "Reputation monitoring",
        "Crisis management support"
      ],
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <Link className="w-12 h-12 text-red-600" />,
      title: "Link & Map Pack Authority",
      description: "Earn local links that boost visibility.",
      details: [
        "Local link building campaign",
        "High-authority backlink acquisition",
        "Map Pack optimization",
        "Local partnership development",
        "Authority growth tracking"
      ],
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-indigo-600" />,
      title: "Tracking & Analytics",
      description: "Real-time monitoring with verified tools.",
      details: [
        "Google Search Console setup",
        "CallRail call tracking integration",
        "Monthly reporting & analytics",
        "Performance dashboard access",
        "ROI tracking and optimization"
      ],
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
            alt="Local SEO services for dental practices"
            className="w-full h-full object-cover opacity-10"
            loading="eager"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Local SEO Solutions for{' '}
              <span className="text-blue-600">Dental Practices</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              Our comprehensive suite of services is designed specifically for dental practices that want to dominate local search rankings and attract more qualified patients.
            </p>

            <button
              onClick={() => openModal('audit')}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
            >
              <Video className="w-6 h-6" />
              📹 Get My Free SEO Audit
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Complete{' '}
                <span className="text-blue-600">Service Suite</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything your dental practice needs to dominate local search and attract more patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} ${service.borderColor} border p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Our Process{' '}
                <span className="text-blue-600">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Audit</h3>
                <p className="text-gray-600">We analyze your current online presence and identify opportunities.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">We create a customized plan targeting your ideal patient demographic.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Our team executes the strategy across all channels and platforms.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize</h3>
                <p className="text-gray-600">Continuous monitoring and optimization to maximize your results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transparent{' '}
                <span className="text-blue-600">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No long-term contracts. No hidden fees. Just straightforward, results-based pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$1,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    GBP Optimization
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Local Citations
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Review Management
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Monthly Reports
                  </li>
                </ul>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>

              <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl transform scale-105">
                <div className="bg-white text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-bold mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-blue-100 mb-6">Best for growing practices</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$2,500</span>
                  <span className="text-blue-100">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Everything in Essential
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Website SEO
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Link Building
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Call Tracking (CallRail)
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Bi-weekly Updates
                  </li>
                </ul>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">For serious growth</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$4,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Everything in Growth
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Content Creation
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    Weekly Strategy Calls
                  </li>
                </ul>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Dominate Local Search?
            </h2>

            <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
              Let's talk about how we can help your dental practice attract more qualified patients and grow your revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => openModal('audit')}
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
              >
                <Video className="w-6 h-6" />
                📹 Get My Free Audit
              </button>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
              >
                <Calendar className="w-6 h-6" />
                📅 Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
