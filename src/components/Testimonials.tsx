import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Suman&Rohit',
      role: 'Wedding Couple',
      image: 'https://images.pexels.com/photos/32264349/pexels-photo-32264349.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      text: 'Mimisha Diaries transformed our wedding into a fairy tale. Every arrangement was more beautiful than we could have imagined. The attention to detail and personal touch made our special day absolutely perfect.',
      rating: 5,
      event: 'Garden Wedding, 2024'
    },
    {
      id: 2,
      name: 'Isha Shrestha',
      role: 'Event Planner',
      image: 'https://images.pexels.com/photos/32355795/pexels-photo-32355795.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      text: 'Working with Mimisha Diaries has been an absolute pleasure. Their creativity, professionalism, and ability to bring visions to life make them my go-to florist for luxury events. Simply exceptional.',
      rating: 5,
      event: 'Corporate Gala, 2024'
    },
    {
      id: 3,
      name: 'Ayusha lama',
      role: 'Bride',
      image: 'https://images.pexels.com/photos/32287479/pexels-photo-32287479.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      text: 'From the initial consultation to the final setup, everything was flawless. The team understood my vision perfectly and created arrangements that exceeded all expectations. Truly artistry in motion.',
      rating: 5,
      event: 'Intimate Wedding, 2024'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-px bg-sage"></div>
            <span className="font-inter text-sage text-sm tracking-wide uppercase font-semibold">
              Client Stories
            </span>
            <div className="w-12 h-px bg-sage"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Love Stories in
            <span className="block text-sage italic">Full Bloom</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-sage" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-lg text-gray-800 leading-relaxed mb-6 italic font-medium">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Client Info */}
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="font-inter text-sage text-sm mb-1 font-semibold">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="font-inter text-gray-600 text-xs font-medium">
                    {testimonials[currentTestimonial].event}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-sage' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-sage" />
            </div>
            <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">5.0</div>
            <div className="font-inter text-gray-700 text-sm font-medium">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="w-8 h-8 text-sage" />
            </div>
            <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">150+</div>
            <div className="font-inter text-gray-700 text-sm font-medium">Happy Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-sage rounded-full"></div>
            </div>
            <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="font-inter text-gray-700 text-sm font-medium">Recommend Us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;