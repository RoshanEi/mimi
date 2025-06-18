import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Heart, number: '500+', label: 'Happy Couples' },
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '1000+', label: 'Events Created' },
    { icon: Sparkles, number: '100%', label: 'Custom Designs' },
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-px bg-sage"></div>
              <span className="font-inter text-sage text-sm tracking-wide uppercase font-semibold">
                Our Story
              </span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Beauty
              <span className="block text-sage italic">One Bloom at a Time</span>
            </h2>
            
            <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6 font-medium">
              Welcome to Mimisha Diaries, where passion meets artistry in every petal. 
              Founded with a vision to transform ordinary moments into extraordinary memories, 
              we specialize in creating bespoke floral arrangements that speak to the heart.
            </p>
            
            <p className="font-inter text-gray-700 leading-relaxed mb-8">
              Our journey began with a simple belief: that flowers have the power to tell 
              stories, evoke emotions, and create connections that last a lifetime. From 
              intimate gatherings to grand celebrations, we pour our creativity and expertise 
              into every design.
            </p>
            
            <button className="bg-sage text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://images.pexels.com/photos/10529392/pexels-photo-10529392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Floral designer at work"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-sage">just</div>
                <div className="font-inter text-sm text-gray-700 font-medium">Started Creating Magic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-sage" />
                </div>
              </div>
              <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-gray-700 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;