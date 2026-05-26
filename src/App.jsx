import React from 'react';
import Header from './components/Header';
import PropertyCard from './components/PropertyCard';
import MobileNav from './components/MobileNav';
import { properties } from './data/properties';

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main className="pt-20 pb-24 md:pb-8">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="text-center py-12 md:py-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4 tracking-wide">
              Luxury Real Estate in
              <span className="text-gold block mt-2">Guwahati</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-light">
              Discover exclusive properties that redefine luxury living in the heart of Northeast India
            </p>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-100">
              Featured Properties
            </h3>
            <span className="text-gold text-sm tracking-wide">
              {properties.length} Listings
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
          <div className="bg-card rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
                About GHY REALTRS
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We are Guwahati's premier luxury real estate agency, specializing in high-end residential 
                and commercial properties. With years of expertise in the Northeast India market, we connect 
                discerning clients with exceptional properties that match their lifestyle and investment goals.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-gold text-3xl font-bold font-serif">50+</p>
                  <p className="text-gray-500 text-sm mt-1">Properties Sold</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-3xl font-bold font-serif">100+</p>
                  <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-3xl font-bold font-serif">10+</p>
                  <p className="text-gray-500 text-sm mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-3xl font-bold font-serif">24/7</p>
                  <p className="text-gray-500 text-sm mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 mb-12">
          <div className="bg-card rounded-lg p-8 md:p-12 border border-gray-800 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Interested in any of our properties? Contact us today for exclusive viewings and personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="bg-gold hover:bg-gold-hover text-background px-8 py-4 rounded-sm font-medium tracking-wide transition-colors min-h-[48px] w-full sm:w-auto"
              >
                Call Us Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-dark hover:bg-gray-800 text-gold border border-gold/30 px-8 py-4 rounded-sm font-medium tracking-wide transition-colors min-h-[48px] w-full sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}

export default App;
