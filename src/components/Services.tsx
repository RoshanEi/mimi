import { Heart, Users, Gift, Flower2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Florals',
      description: 'Transform your special day with breathtaking bridal bouquets, ceremony arches, and reception centerpieces that capture your love story.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Bridal & Bridesmaid Bouquets', 'Ceremony Decorations', 'Reception Centerpieces', 'Floral Installations']
    },
    {
      icon: Users,
      title: 'Event Design',
      description: 'Elevate corporate events, celebrations, and special occasions with sophisticated floral arrangements that leave lasting impressions.',
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Corporate Events', 'Birthday Celebrations', 'Anniversary Parties', 'Holiday Decorations']
    },
    {
      icon: Gift,
      title: 'Luxury Arrangements',
      description: 'Express your sentiments with our curated collection of premium floral arrangements, perfect for any occasion or just because.',
      image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Seasonal Bouquets', 'Subscription Services', 'Gift Arrangements', 'Sympathy Flowers']
    },
    {
      icon: Flower2,
      title: 'Workshops & Classes',
      description: 'Learn the art of floral design in our intimate workshops, where creativity blooms and new skills are cultivated.',
      image: 'https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Beginner Classes', 'Advanced Techniques', 'Private Sessions', 'Team Building Events']
    }
  ];

  return (
    <section id="services" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-px bg-sage"></div>
            <span className="font-inter text-sage text-sm tracking-wide uppercase font-semibold">
              Our Services
            </span>
            <div className="w-12 h-px bg-sage"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bringing Your Vision
            <span className="block text-sage italic">to Life</span>
          </h2>
          
          <p className="font-inter text-gray-700 text-lg max-w-2xl mx-auto font-medium">
            From intimate moments to grand celebrations, we offer a complete range of 
            floral services tailored to your unique style and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-sage" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-sage rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-sage/10 text-sage px-6 py-3 rounded-full font-inter font-semibold hover:bg-sage hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;