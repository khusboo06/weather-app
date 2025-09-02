import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-3 px-4"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="w-64 md:w-80 px-4 py-2 rounded-lg border border-gray-700 shadow-md focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 text-black"
      />
      <button
        type="submit"
        className="w-64 md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition dark:bg-black dark:hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
