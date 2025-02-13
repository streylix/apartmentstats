import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Where are you moving?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-4 border rounded-lg shadow-sm pl-12"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar