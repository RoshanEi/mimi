import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '977-9800000000',
      subtitle: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@mimishadiaries.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM',
      subtitle: 'Sat: 10AM-4PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-px bg-sage"></div>
            <span className="font-inter text-sage text-sm tracking-wide uppercase font-semibold">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-sage"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something
            <span className="block text-sage italic">Beautiful Together</span>
          </h2>
          
          <p className="font-inter text-gray-700 text-lg max-w-2xl mx-auto font-medium">
            Ready to bring your floral vision to life? We'd love to hear from you. 
            Schedule a consultation and let's start planning your perfect day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">
                Book Your Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-semibold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-semibold text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-semibold text-gray-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-semibold text-gray-800 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-sm font-semibold text-gray-800 mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 text-gray-800"
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-sm font-semibold text-gray-800 mb-2">
                    Tell us about your vision
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 resize-none text-gray-800"
                    placeholder="Describe your style preferences, color schemes, and any special requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-sage/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900">{info.title}</h4>
                      <p className="font-inter text-gray-700 text-sm font-medium">{info.details}</p>
                      <p className="font-inter text-gray-600 text-xs">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                Visit Us
              </h4>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-sage mx-auto mb-2" />
                  <p className="font-inter text-gray-700 font-medium">Interactive Map</p>
                  <p className="font-inter text-gray-600 text-sm">By appointment only</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/mimishadiaries/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@mimisha.diaries?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-300">
                  <TikTokIcon className="w-6 h-6" />
                </a>
              </div>
              <p className="font-inter text-gray-700 text-sm mt-4 font-medium">
                @mimishadiaries • @mimisha.diaries • Daily inspiration and behind-the-scenes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;