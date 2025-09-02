import React from "react";
import { Sun, CloudRain, Cloud, CloudSun } from "lucide-react";

const getIcon = (condition) => {
  const map = {
    Rain: <CloudRain className="text-blue-600 dark:text-blue-400" size={40} />,
    Clear: <Sun className="text-yellow-400" size={40} />,
    Clouds: <Cloud className="text-gray-800 dark:text-gray-400" size={40} />,
    Drizzle: <CloudRain className="text-blue-300" size={40} />,
    Mist: <CloudSun className="text-blue-300" size={40} />,
  };
  return map[condition] || <Sun size={40} />;
};

const CurrentWeather = ({ data }) => {
  if (!data || !data.list || data.list.length === 0) return null;

  const { name } = data.city;
  const { main, weather, wind } = data.list[0];
  const icon = getIcon(weather[0].main);

  return (
    <div className="flex flex-col h-full bg-blue-100 dark:bg-gray-900 shadow rounded-2xl p-4 sm:p-6 text-center w-full max-w-sm sm:max-w-md lg:max-w-lg transition duration-300 animate-fade-in hover:scale-[1.02] border border-gray-400 dark:border-gray-700"  style={{ boxShadow: "0 1px 6px rgba(255, 255, 255, 0.08)" }}>
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{name}</h2>
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="capitalize text-lg text-gray-700 dark:text-gray-300">{weather[0].description}</p>
      <p className="text-blue-600 dark:text-blue-300 text-3xl font-semibold">{Math.round(main.temp)}°C</p>
      <div className="flex justify-around mt-4 text-sm text-gray-600 dark:text-gray-300">
        <p>💧 Humidity: {main.humidity}%</p>
        <p>🌬 Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
