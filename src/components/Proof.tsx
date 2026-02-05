import React from 'react';
import { TrendingUp, MapPin, Star } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const Proof: React.FC = () => {
  const { openModal } = useModal();

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      stat: "+214% Increase in Monthly Calls in 3 Months",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      stat: "#1 Google Maps Ranking in Competitive Cities",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      stat: "50+ 5-Star Reviews Generated for Clients",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    }
  ];

  return (
    <section id="proof" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Dentists. Real Rankings.{' '}
            <span className="text-blue-600">Real Patients.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} ${item.borderColor} border p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <div className="flex items-start justify-center gap-2">
                <span className="text-2xl">✅</span>
                <p className="text-lg font-semibold text-gray-800 leading-tight">
                  {item.stat}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => openModal('case-studies')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proof;