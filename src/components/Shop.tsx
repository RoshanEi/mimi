import { ShoppingBag, ArrowRight } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Seasonal Bouquet',
      price: 1500,
      image: 'https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Bouquets'
    },
    {
      id: 2,
      name: 'Luxury Rose Box',
      price: 11570,
      image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Gift Boxes'
    },
    {
      id: 3,
      name: 'Dried Flower Arrangement',
      price: 4000,
      image: 'https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Dried Flowers'
    },
    {
      id: 4,
      name: 'Wedding Consultation',
      price: 8000,
      image: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Services'
    },
  ];

  return (
    <section id="shop" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-px bg-sage"></div>
            <span className="font-inter text-sage text-sm tracking-wide uppercase font-semibold">
              Our Shop
            </span>
            <div className="w-12 h-px bg-sage"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bring Home
            <span className="block text-sage italic">Nature's Beauty</span>
          </h2>
          
          <p className="font-inter text-gray-700 text-lg max-w-2xl mx-auto font-medium">
            Explore our curated collection of fresh bouquets, elegant arrangements, 
            and floral gifts for every occasion.
          </p>
        </div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-3 left-3 bg-sage/90 text-white text-xs uppercase font-bold py-1 px-2 rounded-full">
                  {product.category}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="font-inter font-bold text-sage text-lg">
                    NRs {product.price.toLocaleString()}
                  </p>
                  <button className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {['Seasonal Bouquets', 'Wedding Flowers', 'Gift Collections'].map((category, index) => (
            <div 
              key={index}
              className="relative h-64 overflow-hidden rounded-2xl group"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <img 
                src={`https://images.pexels.com/photos/${[1470171, 931158, 1488310][index]}/pexels-photo-${[1470171, 931158, 1488310][index]}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
                alt={category}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-playfair text-2xl font-bold mb-4 drop-shadow-md">
                  {category}
                </h3>
                <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-inter font-medium hover:bg-white transition-all duration-300">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-sage text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto">
            <span>Visit Full Shop</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop; 