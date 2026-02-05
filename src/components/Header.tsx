import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, hash?: string) => {
    if (hash) {
      navigate(`${path}${hash}`);
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  interface NavigationItem {
    label: string;
    path: string;
    hash?: string;
  }

  const navigationItems: NavigationItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Why Us', path: '/trust' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
          >
            ToothRanker
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path, item.hash)}
                className={`transition-colors duration-200 ${location.pathname === item.path && !item.hash ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/', '#audit')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Get Audit
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path, item.hash)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('/', '#audit')}
                className="block w-full text-left px-4 py-2 mt-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-semibold rounded-lg mx-4"
              >
                Get Audit
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;