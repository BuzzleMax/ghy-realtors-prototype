import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-gray-800 hover:border-gold/30 transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {property.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gold/90 text-background text-xs font-medium px-3 py-1 rounded-sm tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-sm">
          <span className="text-gold font-semibold text-sm">{property.status}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-serif text-xl font-semibold text-gray-100 mb-1 leading-tight">
            {property.title}
          </h3>
          <p className="text-gray-400 text-sm flex items-center">
            <svg className="w-4 h-4 mr-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-t border-b border-gray-800">
          <div className="text-center">
            <p className="text-gold font-semibold text-sm">{property.specs.bhk}</p>
            <p className="text-gray-500 text-xs mt-1">Configuration</p>
          </div>
          <div className="text-center border-l border-r border-gray-800">
            <p className="text-gold font-semibold text-sm">{property.specs.sqft}</p>
            <p className="text-gray-500 text-xs mt-1">Area</p>
          </div>
          <div className="text-center">
            <p className="text-gold font-semibold text-sm">{property.specs.parking}</p>
            <p className="text-gray-500 text-xs mt-1">Parking</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs">Price</p>
            <p className="text-gold font-bold text-lg">{property.priceDisplay}</p>
          </div>
          <button className="bg-gold hover:bg-gold-hover text-background px-5 py-3 rounded-sm text-sm font-medium tracking-wide transition-colors min-h-[48px]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
