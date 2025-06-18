import React from 'react';
import { ArrowDown, Heart, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Luxury floral arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-gold fill-current" />
            <span className="font-inter text-white text-sm tracking-wide uppercase font-medium">
              Luxury Floral Design
            </span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Creating
            <span className="block text-blush italic">Timeless</span>
            Moments
          </h1>
          
          <p className="font-inter text-lg text-white mb-8 leading-relaxed max-w-lg drop-shadow-md">
            Transform your most precious occasions with bespoke floral artistry. 
            Each arrangement tells a story of elegance, beauty, and unforgettable memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-sage text-white px-8 py-4 rounded-full font-inter font-medium hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Work
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float hidden lg:block">
        <Heart className="w-6 h-6 text-blush fill-current opacity-60" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-gold rounded-full opacity-40"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white drop-shadow-md" />
      </div>
    </section>
  );
};

export default Hero;