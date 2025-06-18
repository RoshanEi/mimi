import { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'events', name: 'Events' },
    { id: 'arrangements', name: 'Arrangements' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-blush/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-px bg-sage"></div>
            <span className="font-inter text-sage text-sm tracking-wide uppercase font-semibold">
              Our Portfolio
            </span>
            <div className="w-12 h-px bg-sage"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Gallery of
            <span className="block text-sage italic">Beautiful Moments</span>
          </h2>
          
          <p className="font-inter text-gray-700 text-lg max-w-2xl mx-auto font-medium">
            Each arrangement tells a unique story. Explore our collection of 
            weddings, events, and special occasions we've had the honor to create.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-inter font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-sage text-white shadow-md'
                    : 'text-gray-700 hover:text-sage'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Coming Soon Section - Enhanced & Attractive */}
        <div className="relative overflow-hidden bg-gradient-to-r from-sage/20 to-blush/30 rounded-3xl shadow-2xl p-12 animate-fade-in">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blush/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mx-auto shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center animate-pulse">
                    <span className="font-playfair text-white text-2xl font-bold">Soon</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-lg">
                  <span className="font-inter text-sage text-xs uppercase font-bold tracking-wider">Coming</span>
                </div>
              </div>
            </div>
            
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio is
              <span className="block text-sage italic mt-2">Coming Soon</span>
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-12 bg-sage/50"></div>
              <div className="h-1 w-20 bg-sage rounded-full"></div>
              <div className="h-px w-12 bg-sage/50"></div>
            </div>
            
            <p className="font-inter text-gray-700 text-lg max-w-2xl mx-auto mb-10">
              We're currently curating our finest floral creations to showcase in our portfolio. 
              Check back soon to explore our stunning collection of weddings, events, and 
              special arrangements that tell unique stories through flowers.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((category) => (
                <div key={category.id} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                  <h4 className="font-playfair text-lg font-semibold text-sage">{category.name}</h4>
                  <p className="font-inter text-sm text-gray-600">Coming Soon</p>
            </div>
          ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-sage text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Notified When Live
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;