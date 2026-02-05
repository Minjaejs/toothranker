import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ModalProvider } from './contexts/ModalContext';

// Lazy load page components
const HomePage = lazy(() => import('./components/HomePage'));
const TrustPage = lazy(() => import('./components/TrustPage'));
const CaseStudiesPage = lazy(() => import('./components/CaseStudiesPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

// Component to handle scroll behavior
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure content is rendered before scrolling to hash
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="transition-opacity duration-300">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trust" element={<TrustPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;