import React from 'react';
import { ArrowRight, MapPin, TrendingUp, Star, CheckCircle, Play, Calendar, Video, Shield, Clock, Users, BarChart3 } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const TrustPage: React.FC = () => {
  const { openModal } = useModal();
  const calendlyUrl = 'https://calendly.com/d/cjnq-qtv-5sf/toothranker-strategy-call';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      metric: "+214%",
      description: "Increase in monthly calls (avg. 3 months)",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      metric: "#1 Rank",
      description: "On Google Maps in 7 competitive cities",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      metric: "50+ Reviews",
      description: "Added per clinic via our systems",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    }
  ];

  const processSteps = [
    { number: "1", title: "Audit", description: "Find Local SEO Gaps" },
    { number: "2", title: "GBP Optimization", description: "Optimize Google Business Profile" },
    { number: "3", title: "Review System Setup", description: "Automated review generation" },
    { number: "4", title: "Local Citations + Links", description: "Build local authority" },
    { number: "5", title: "Map Pack Boosting", description: "Dominate local search" },
    { number: "6", title: "Tracking + Monthly Optimization", description: "Continuous improvement" }
  ];

  const trustFactors = [
    "Dedicated account manager (your direct WhatsApp + email)",
    "U.S. business hours for communication (PST timezone)",
    "Transparent dashboard reporting",
    "Pay-as-you-go, no long contracts",
    "100% results tracking with verified tools (GA, GSC, CallRail)"
  ];

  const testimonials = [
    {
      quote: "We went from page 2 to the top of Google Maps in 6 weeks. Calls are up 200%.",
      author: "Dr. Sarah Lee",
      practice: "Brisbane Family Dental 🇦🇺",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "Patient flow doubled in 3 months — the ROI is insane.",
      author: "Dr. Mark Simmons",
      practice: "Austin Dental 🇦🇺",
      image: "https://images.pexels.com/photos/6812569/pexels-photo-6812569.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
            alt="Professional dental practice with proven SEO results"
            className="w-full h-full object-cover opacity-10"
            loading="eager"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We Don't Talk About Rankings.{' '}
                <span className="text-blue-600">We Show Them.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                ToothRanker isn't another SEO agency — we're a specialized partner for dental clinics.
                After helping 20+ dental practices in Australia dominate Google Maps and triple patient calls,
                we're now bringing that same proven system to U.S. dental clinics.
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 border border-blue-100">
                <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-gray-800">
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    20+ Dental Clinics
                  </span>
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    180% Avg. Call Increase
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    12 Weeks to #1
                  </span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('case-studies')}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
              >
                <Play className="w-6 h-6" />
                📹 See Real Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Australia to America Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Framework That Worked in Australia —{' '}
                <span className="text-blue-600">Now Scaling to the U.S.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🇦🇺</div>
                      <div className="text-sm font-semibold text-gray-600">Australia</div>
                      <div className="text-xs text-gray-500">20+ Clinics Ranked</div>
                    </div>
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                    <div className="text-center">
                      <div className="text-4xl mb-2">🇺🇸</div>
                      <div className="text-sm font-semibold text-gray-600">United States</div>
                      <div className="text-xs text-gray-500">Now Expanding</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold text-blue-800">Proven Framework</div>
                    <div className="text-xs text-blue-600">Same System • Better Results</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  We've refined a local SEO process that consistently ranks dental clinics in competitive cities like Sydney, Melbourne, and Brisbane.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our approach is built on data, patient behavior, and experience in the dental niche.
                  Now, we're applying this proven framework to U.S. cities starting with Phoenix, AZ.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-800 font-medium">Local SEO for dental-specific keywords</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-800 font-medium">Optimized GBP + Reviews Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-800 font-medium">Conversion tracking with CallRail</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-800 font-medium">Month-to-month, transparent reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Data Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Numbers Dentists Can{' '}
                <span className="text-blue-600">Trust</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't rely on promises — only proof. Here's what our partners have achieved.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgColor} ${stat.borderColor} border p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-gray-700 font-medium">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 font-medium">
                All results verified via Google Search Console, Ahrefs, and CallRail.
                Screenshots available upon request or in case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dentists Who{' '}
                <span className="text-blue-600">Partnered With Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author} headshot`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.practice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-blue-600 text-white rounded-xl p-6">
              <p className="text-lg font-medium">
                🌎 Now expanding our proven system to U.S. dental practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Dentists Feel Safe{' '}
                <span className="text-blue-600">Working With Us</span>
              </h2>
              <p className="text-xl text-gray-600">
                We Make It Easy — Even Across Borders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {trustFactors.map((factor, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {factor}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => openModal('audit')}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
              >
                <Video className="w-6 h-6" />
                📹 Get My Free SEO Audit
              </button>
              <p className="text-gray-600 mt-4">See how your practice compares locally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Same 6-Step Framework{' '}
                <span className="text-blue-600">That Ranked 20+ Clinics</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
                >
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              No Tricks. No Lock-ins.{' '}
              <span className="text-blue-600">No Outsourcing.</span>
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Everything we do is 100% transparent.
              We'll show your data live in Google Search Console and CallRail, so you know exactly what's working.
            </p>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <p className="text-lg font-semibold text-blue-800">
                You own your profiles, listings, and access — always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Let Us Show You —{' '}
              <span className="text-blue-300">No Commitment Needed</span>
            </h2>

            <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
              We'll record a 5-minute personalized audit video for your clinic —
              showing your visibility gaps and 3 quick wins to boost your Google ranking.
            </p>

            <p className="text-lg mb-8 opacity-75">
              No contracts. No pushy sales. Just clarity.
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

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">20+</div>
                <div className="text-sm opacity-75">Australian clinics ranked #1</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">214%</div>
                <div className="text-sm opacity-75">Average call increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">12 Weeks</div>
                <div className="text-sm opacity-75">Average time to #1 ranking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustPage;