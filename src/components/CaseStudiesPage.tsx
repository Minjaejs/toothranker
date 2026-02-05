import React, { useState } from 'react';
import { X, TrendingUp, MapPin, Trophy, Users, Star, CheckCircle, Video, Calendar, ArrowRight, BarChart3, Phone, Search, MessageSquare } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

interface CaseStudy {
  id: string;
  clinic: string;
  location: string;
  country: string;
  timeline: string;
  goal: string;
  mapRanking: string;
  callIncrease: string;
  trafficIncrease: string;
  reviews: string;
  image: string;
  beforeAfter: {
    metric: string;
    before: string;
    after: string;
    change: string;
  }[];
  strategy: string[];
}

const CaseStudiesPage: React.FC = () => {
  const { openModal } = useModal();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const calendlyUrl = 'https://calendly.com/d/cjnq-qtv-5sf/toothranker-strategy-call';

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      clinic: 'Brisbane Family Dental',
      location: 'Brisbane',
      country: 'AU',
      timeline: '3 Months',
      goal: 'Increase local visibility & new patient calls',
      mapRanking: '#1 on Google Maps for "dentist Brisbane"',
      callIncrease: '+214% more calls (via CallRail)',
      trafficIncrease: '+420% increase in local impressions (GSC)',
      reviews: '46 new 5-star reviews',
      image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      beforeAfter: [
        { metric: 'Calls per Month', before: '120', after: '350', change: '+191%' },
        { metric: 'GBP Rankings', before: 'Page 2', after: '#1 for 3 major terms', change: '' },
        { metric: 'Reviews', before: '21', after: '67', change: '+46 new reviews' },
        { metric: 'GSC Impressions', before: '2.5k', after: '10.3k', change: '+312%' }
      ],
      strategy: [
        'Google Business Profile Optimization',
        'Local Citations Cleanup',
        'Review & Reputation Campaign',
        'On-page SEO for service pages',
        'Tracking via CallRail'
      ]
    },
    {
      id: '2',
      clinic: 'Sydney Smile Studio',
      location: 'Sydney CBD',
      country: 'AU',
      timeline: '4 Months',
      goal: 'Dominate cosmetic dentistry search results',
      mapRanking: '#1 for "cosmetic dentist Sydney CBD"',
      callIncrease: '+189% increase in consultation bookings',
      trafficIncrease: '+320% organic traffic growth',
      reviews: '48 new 5-star reviews',
      image: 'https://images.pexels.com/photos/3845784/pexels-photo-3845784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      beforeAfter: [
        { metric: 'Monthly Bookings', before: '85', after: '246', change: '+189%' },
        { metric: 'Organic Traffic', before: '1.2k', after: '5.0k', change: '+320%' },
        { metric: 'Reviews', before: '34', after: '82', change: '+48 new reviews' },
        { metric: 'Map Pack Rank', before: 'Not in top 10', after: '#1 position', change: '' }
      ],
      strategy: [
        'Cosmetic dentistry keyword targeting',
        'Google Business Profile enhancement',
        'Before/after gallery optimization',
        'Review generation system',
        'Local link building campaign'
      ]
    },
    {
      id: '3',
      clinic: 'Melbourne Dental Care',
      location: 'Melbourne',
      country: 'AU',
      timeline: '5 Months',
      goal: 'Recover from negative reviews and rank #1',
      mapRanking: '#1 on Google Maps for "family dentist Melbourne"',
      callIncrease: '+267% patient inquiry calls',
      trafficIncrease: '+385% local search visibility',
      reviews: 'Improved from 3.2 to 4.8 stars',
      image: 'https://images.pexels.com/photos/3845630/pexels-photo-3845630.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      beforeAfter: [
        { metric: 'Monthly Calls', before: '95', after: '348', change: '+267%' },
        { metric: 'Star Rating', before: '3.2 stars', after: '4.8 stars', change: '+1.6 stars' },
        { metric: 'Total Reviews', before: '28', after: '91', change: '+63 reviews' },
        { metric: 'Local Visibility', before: '1.8k', after: '8.7k', change: '+385%' }
      ],
      strategy: [
        'Reputation management & recovery',
        'Automated review request system',
        'Response strategy for negative reviews',
        'GBP optimization and posts',
        'Citation building and NAP consistency'
      ]
    }
  ];

  const aggregateStats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      metric: 'Avg. 180%',
      description: 'Increase in patient calls',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      metric: '#1 Map Rank',
      description: 'In 6–12 weeks',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      metric: '20+',
      description: 'Dental clinics ranked',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  const processSteps = [
    { number: '1', title: 'Local Audit', icon: <Search className="w-6 h-6" /> },
    { number: '2', title: 'GBP Optimization', icon: <MapPin className="w-6 h-6" /> },
    { number: '3', title: 'Citation Consistency', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '4', title: 'Review System', icon: <Star className="w-6 h-6" /> },
    { number: '5', title: 'Content & Links', icon: <MessageSquare className="w-6 h-6" /> },
    { number: '6', title: 'Tracking + Adjustments', icon: <BarChart3 className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3846511/pexels-photo-3846511.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
            alt="Dental SEO success case studies"
            className="w-full h-full object-cover opacity-10"
            loading="eager"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              We Don't Talk About Results —{' '}
              <span className="text-blue-600">We Show Them.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              Real dental practices. Real Google rankings. Real patient growth.
              Every case study below is from a clinic that worked with ToothRanker's Local SEO system.
            </p>

            <button
              onClick={() => openModal('audit')}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
            >
              <Video className="w-6 h-6" />
              📹 Get My Free Audit
            </button>
            <p className="text-gray-600 mt-4">See what your clinic's report would look like</p>
          </div>
        </div>
      </section>

      {/* Stats Snapshot Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {aggregateStats.map((stat, index) => (
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
                Data verified via Google Search Console, Ahrefs & CallRail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured{' '}
                <span className="text-blue-600">Case Studies</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={`${study.clinic} case study`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      🇦🇺 {study.country}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.clinic}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {study.location}
                      </span>
                      <span>📅 {study.timeline}</span>
                    </div>

                    <p className="text-gray-700 mb-6">
                      <span className="font-semibold">🎯 Goal:</span> {study.goal}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-800 text-sm">{study.mapRanking}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-800 text-sm">{study.callIncrease}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-800 text-sm">{study.trafficIncrease}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-800 text-sm">{study.reviews}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCase(study)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      View Full Case Study
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center border-2 border-dashed border-blue-300">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                U.S. Case Studies Coming Soon
              </h3>
              <p className="text-gray-700 mb-6">
                We're bringing our proven Australian system to U.S. dental practices.
                Be among the first to experience these results.
              </p>
              <button
                onClick={() => openModal('audit')}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Apply for Pilot Program
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Framework Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Same Process That{' '}
                <span className="text-blue-600">Drives Every Case Study</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-3 text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => openModal('audit')}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
              >
                <Video className="w-6 h-6" />
                🦷 Want results like these? Get your free audit video today.
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Want to See What's Possible{' '}
              <span className="text-blue-300">for Your Clinic?</span>
            </h2>

            <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
              We'll record a 5-minute personalized audit video showing where your practice stands —
              and exactly how we'd replicate these results for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">20+</div>
                <div className="text-sm opacity-75">Clinics ranked #1</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">180%</div>
                <div className="text-sm opacity-75">Average call increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">6-12 Weeks</div>
                <div className="text-sm opacity-75">To #1 ranking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedCase(null)}
              className="sticky top-4 float-right mr-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-4xl font-bold text-gray-900">
                    🦷 {selectedCase.clinic}
                  </h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedCase.location}, {selectedCase.country}
                  </span>
                </div>
                <p className="text-xl text-gray-700 mb-2">
                  <span className="font-semibold">Goal:</span> {selectedCase.goal}
                </p>
                <p className="text-gray-600">Timeline: {selectedCase.timeline}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy</h3>
                <div className="space-y-3">
                  {selectedCase.strategy.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Results</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Metric</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Before</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">After</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCase.beforeAfter.map((result, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-6 py-4 font-medium text-gray-900">{result.metric}</td>
                          <td className="px-6 py-4 text-gray-700">{result.before}</td>
                          <td className="px-6 py-4 text-gray-700 font-semibold">{result.after}</td>
                          <td className="px-6 py-4">
                            {result.change && (
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {result.change}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
                <p className="text-gray-700 font-medium mb-4">
                  Want results like these for your clinic?
                </p>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    openModal('audit');
                  }}
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                >
                  <Video className="w-5 h-5" />
                  Get My Free Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
