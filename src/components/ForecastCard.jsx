// src/components/ForecastCard.jsx
import React from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  Droplets,
  Wind,
  ThermometerSun,
} from "lucide-react";

// Helper to pick an icon based on weather condition
const getWeatherIcon = (main) => {
  const map = {
    Clear: <Sun className="text-yellow-400" size={28} />,
    Clouds: <Cloud className="text-gray-400" size={28} />,
    Rain: <CloudRain className="text-blue-400" size={28} />,
    Drizzle: <CloudRain className="text-blue-300" size={28} />,
    Snow: <CloudSnow className="text-cyan-300" size={28} />,
    Mist: <CloudSun className="text-blue-300" size={28} />,
  };
  return map[main] || <Sun className="text-yellow-400" size={28} />;
};

// Format timestamp to "hh:mm AM/PM"
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const ForecastCard = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return (
      <p className="text-center text-gray-300 dark:text-gray-500">
        Forecast data not available.
      </p>
    );
  }

  return (
    <div className="mt-8 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Next 5 Forecast Hours
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,auto))] gap-4">
        {forecast.map((item, index) => {
          const icon = getWeatherIcon(item.weather[0].main);
          const time = formatTime(item.dt);

          return (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-900 rounded-xl p-4 text-center transition transform hover:scale-[1.03] duration-300 shadow border border-gray-200 dark:border-gray-700"
               style={{ boxShadow: "0 1px 6px rgba(255, 255, 255, 0.08)" }}>
              <div className="text-lg font-medium text-gray-700 dark:text-white mb-1">
                {time}
              </div>
              <div className="flex justify-center mb-1">{icon}</div>
              <p className="capitalize text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.weather[0].description}
              </p>
              <div className="flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <ThermometerSun size={16} />
                  <span>{Math.round(item.main.temp)}°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets size={16} />
                  <span>{item.main.humidity}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind size={16} />
                  <span>{item.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCard;
