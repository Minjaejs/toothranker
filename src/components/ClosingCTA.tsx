import React from 'react';
import { Calendar, Video } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const ClosingCTA: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Own the Top Spot{' '}
            <span className="text-blue-300">in Your City?</span>
          </h2>

          <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Stop losing patients to competitors. Start dominating local search results
            and watch your practice grow with qualified patients ready to book.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://calendly.com/d/cjnq-qtv-5sf/toothranker-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
            >
              <Calendar className="w-6 h-6" />
              📅 Book a Strategy Call
            </a>

            <span className="text-gray-300 hidden sm:block">or</span>

            <button
              onClick={() => openModal('audit')}
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
            >
              <Video className="w-6 h-6" />
              📹 Get My Free Audit
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-300 mb-2">6-12 Weeks</div>
              <div className="text-sm opacity-75">To see significant ranking improvements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">180%</div>
              <div className="text-sm opacity-75">Average increase in patient calls</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-sm opacity-75">Dental practices served successfully</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;