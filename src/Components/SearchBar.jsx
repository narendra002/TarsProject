import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for photos..."
        className="p-2 m-2 border rounded w-4/6"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
