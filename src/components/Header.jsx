import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-gold tracking-wider">
              GHY REALTRS
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-300 hover:text-gold transition-colors text-sm tracking-wide">
              Properties
            </a>
            <a href="#about" className="text-gray-300 hover:text-gold transition-colors text-sm tracking-wide">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-gold transition-colors text-sm tracking-wide">
              Contact
            </a>
            <button className="bg-gold hover:bg-gold-hover text-background px-6 py-2 rounded-sm text-sm font-medium tracking-wide transition-colors min-h-[48px]">
              Enquire Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
