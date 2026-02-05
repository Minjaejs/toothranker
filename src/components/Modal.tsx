import React, { useState } from 'react';
import { X, Calendar, Video, FileText, CheckCircle } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const Modal: React.FC = () => {
  const { modalType, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    city: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
          closeModal();
          setFormData({
            name: '',
            email: '',
            phone: '',
            practiceName: '',
            city: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        closeModal();
        setFormData({
          name: '',
          email: '',
          phone: '',
          practiceName: '',
          city: ''
        });
      }, 3000);
    }
  };

  if (!modalType) return null;

  const renderModalContent = () => {
    switch (modalType) {
      case 'audit':
        if (showConfirmation) {
          return (
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative text-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">We've received your information and will send you a personalized audit video within 24 hours.</p>
                <p className="text-sm text-gray-500">Check your email for further details.</p>
              </div>
            </div>
          );
        }

        return (
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free SEO Audit</h3>
              <p className="text-gray-600">5-minute personalized video showing your ranking opportunities</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="practiceName"
                placeholder="Practice Name *"
                value={formData.practiceName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="city"
                placeholder="City/Location *"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                📹 Get My Free Audit
              </button>
            </form>

            <div className="mt-4 text-xs text-gray-500 text-center">
              We respect your privacy. No spam, ever.
            </div>
          </div>
        );

      case 'strategy-call':
        return (
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Strategy Call</h3>
              <p className="text-gray-600">15-minute call to discuss your practice growth goals</p>
            </div>

            <div style={{ position: 'relative', paddingBottom: '66.66%', height: '0', overflow: 'hidden' }}>
              <iframe
                title="Book a Strategy Call"
                src="https://calendly.com/d/cjnq-qtv-5sf/toothranker-strategy-call"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        );

      case 'case-studies':
        return (
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600">Real results from dental practices we've helped</p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Brisbane Family Dental</h4>
                <div className="text-sm text-gray-600 mb-3">Dr. Sarah Lee • Brisbane, QLD</div>
                <p className="text-gray-700 mb-4">
                  Challenge: Practice was ranking on page 2 for "dentist Brisbane" with limited online visibility.
                  Solution: Complete Google Business Profile optimization, local citation building, and review management.
                  Results: Achieved #1 Google Maps ranking in 6 weeks, 200% increase in phone calls.
                </p>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                  <div className="text-sm font-semibold text-green-800">Key Results:</div>
                  <div className="text-sm text-green-700">• Page 2 → #1 Google Maps in 6 weeks</div>
                  <div className="text-sm text-green-700">• 200% increase in monthly calls</div>
                  <div className="text-sm text-green-700">• 40+ new 5-star reviews</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Austin Dental Care</h4>
                <div className="text-sm text-gray-600 mb-3">Dr. Mark Simmons • Austin, TX</div>
                <p className="text-gray-700 mb-4">
                  Challenge: New practice struggling to compete with established competitors in competitive Austin market.
                  Solution: Comprehensive local SEO strategy including website optimization, link building, and reputation management.
                  Results: Doubled patient flow in 3 months with outstanding ROI.
                </p>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <div className="text-sm font-semibold text-blue-800">Key Results:</div>
                  <div className="text-sm text-blue-700">• 100% increase in patient flow</div>
                  <div className="text-sm text-blue-700">• Top 3 rankings for 15+ keywords</div>
                  <div className="text-sm text-blue-700">• 8x ROI within first quarter</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  closeModal();
                  setTimeout(() => {
                    document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Your Free Audit
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {renderModalContent()}
      </div>
    </div>
  );
};

export default Modal;