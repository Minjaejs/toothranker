import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, hash?: string) => {
    if (hash) {
      navigate(`${path}${hash}`);
    } else {
      navigate(path);
    }
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

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://facebook.com/werankdentist',
      label: 'Facebook'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/werankdentist',
      label: 'Instagram'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/company/werankdentist',
      label: 'LinkedIn'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-blue-400 mb-4">ToothRanker</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Local SEO specialists dedicated exclusively to helping dental practices
              dominate Google search results and attract more qualified patients.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:info@werankdentist.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@werankdentist.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Your City, Your State</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path, item.hash)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleNavigation('/privacy')}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('/terms')}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavigation('/', '#audit')}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Free SEO Audit
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ToothRanker. All rights reserved. Built for dental practices who want to dominate local search.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;