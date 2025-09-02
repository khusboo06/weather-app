
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-black dark:text-gray-400 mt-8 pb-4 px-4">
      {/* Gradient line */}
      <hr className="w-full max-w-lg mx-auto h-1 border-0 bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] dark:bg-gradient-to-r dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 rounded-full" />

      <p className="text-base sm:text-md mt-4">
        Weather data is provided by OpenWeatherMap
      </p>
    </footer>
  );
};

export default Footer;
