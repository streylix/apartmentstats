import React from 'react'
import SearchBar from '../components/SearchBar';
import ApartmentCard from '../components/ApartmentCard';

const ApartmentList = () => {
    const sampleApartments = [
      {
        id: 1,
        name: "Reserve at Stone Port",
        location: "2015 Reserve Circle, Harrisonburg, VA",
        unitsAvailable: 26,
        image: "/api/placeholder/400/300",
        imageCount: 1,
        totalImages: 31
      },
      // Add more sample apartments...
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Find Your Perfect Apartment
          </h1>
          <SearchBar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {sampleApartments.map(apartment => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ApartmentList