import React from 'react';
import { Play, Video } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const Audit: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="audit" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Show You the{' '}
            <span className="text-blue-200">Opportunity.</span>
          </h2>

          <p className="text-xl mb-12 leading-relaxed opacity-90">
            Request a free 5-minute video audit of your website and Google Business profile. 
            We'll show exactly where you stand — and how to outrank competitors.
          </p>

          {/* Video Thumbnail Placeholder */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-sm opacity-75">Sample SEO Audit Video</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => openModal('audit')}
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
          >
            <Video className="w-6 h-6" />
            📹 Get My Free Audit
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-75">
            <span>✓ No commitment required</span>
            <span>✓ 5-minute personalized video</span>
            <span>✓ Actionable insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audit;