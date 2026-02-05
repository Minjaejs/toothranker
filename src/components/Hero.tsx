import React from 'react';
import { Play } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const Hero: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Top-ranked dentist on Google Maps"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Rank Dentists.{' '}
              <span className="text-blue-600">Period.</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Local SEO that puts your practice at the top of Google — where new patients are searching.
              </p>
              <p className="text-lg text-gray-600">
                Show up first on Google Maps. Get more calls. Fill your chairs.
              </p>
            </div>

            <button
              onClick={() => openModal('audit')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Play size={20} />
              📹 Get My Free SEO Audit
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-2">🔍 dentist near me</div>
                  <div className="space-y-2">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">1</div>
                        <div className="text-sm font-semibold">Your Practice Name</div>
                      </div>
                      <div className="text-xs text-gray-600">★★★★★ (127 reviews)</div>
                      <div className="text-xs text-gray-500">Open • Closes 6PM</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded opacity-50">
                      <div className="text-xs text-gray-400">Competitor #2</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded opacity-30">
                      <div className="text-xs text-gray-400">Competitor #3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;