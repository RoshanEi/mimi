import { Heart, Mail, Phone, Instagram, Flower } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Wedding Florals', href: '#' },
    { name: 'Event Design', href: '#' },
    { name: 'Luxury Arrangements', href: '#' },
    { name: 'Workshops', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Flower className="w-8 h-8 text-sage" />
              <span className="font-playfair text-2xl font-semibold">
                Mimisha Diaries
              </span>
            </div>
            <p className="font-inter text-gray-300 leading-relaxed mb-6 max-w-md">
              Creating timeless moments through the art of floral design. Each arrangement 
              tells a story of elegance, beauty, and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mimishadiaries/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@mimisha.diaries?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300">
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-inter text-gray-300 hover:text-sage transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="font-inter text-gray-300 hover:text-sage transition-colors duration-300 font-medium"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-sage" />
              <span className="font-inter text-gray-300 font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-sage" />
              <span className="font-inter text-gray-300 font-medium">hello@mimishadiaries.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm">
              © 2024 Mimisha Diaries. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <span className="font-inter text-gray-400 text-sm">Made with</span>
              <Heart className="w-4 h-4 text-sage fill-current" />
              <span className="font-inter text-gray-400 text-sm">for beautiful moments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;