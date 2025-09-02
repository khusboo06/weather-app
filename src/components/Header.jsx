import React from "react";
import { CloudSun } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <header className="text-center mb-6 animate-fade-in-up flex justify-center items-center flex-col gap-3 px-4">
    
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <CloudSun
            className="text-blue-900 dark:text-yellow-400"
            size={50}
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-yellow-300 tracking-wide drop-shadow-lg">
            WeatherMate
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl text-gray-800 dark:text-yellow-100 leading-relaxed px-2">
          Plan your day with confidence — rain or shine.
        </p>
      </header>
    </div>
  );
};

export default Header;
