import React from 'react';
import { Search, AlertTriangle } from 'lucide-react';

const Pain: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Patients Are Searching for a Dentist Right Now.{' '}
            <span className="text-red-600">Are They Finding You?</span>
          </h2>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            80% of dental patients book an appointment with a practice that shows up in the top 3 map results. 
            If you're buried on page 2, you're invisible. We fix that.
          </p>

          <button
            onClick={() => scrollToSection('services')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            See How We Do It
          </button>

          {/* Visual Element */}
          <div className="mt-12 relative">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mb-4">
                <Search className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">dentist near me</span>
              </div>
              <div className="space-y-3 text-left">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg opacity-30">
                  <div className="text-sm text-gray-500">Your Practice - Page 2 📉</div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700">Competitor #1 - Top Spot 🏆</div>
                  <div className="text-xs text-gray-500">Getting all the patients...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pain;