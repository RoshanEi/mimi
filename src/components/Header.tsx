import { useState, useEffect } from 'react';
import { Menu, X, Flower } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-warm-white/98 backdrop-blur-md shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Flower className={`w-8 h-8 ${isScrolled ? 'text-sage' : 'text-white'}`} />
            <span className={`font-playfair text-2xl font-semibold ${
              isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
            }`}>
              Mimisha Diaries
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-inter font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-sage' 
                    : 'text-white hover:text-blush drop-shadow-sm'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-sage' : 'bg-white'
                }`}></span>
              </a>
            ))}
            <button className="bg-sage text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-sage/90 transition-colors duration-300 shadow-md">
              Book Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-warm-white/98 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 font-inter font-medium text-gray-800 hover:text-sage hover:bg-blush/30 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <button className="w-full bg-sage text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-sage/90 transition-colors duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;