import React from "react";
import { Sparkles } from "lucide-react";

const WeatherSummary = ({ data }) => {
  if (!data || !data.list || data.list.length === 0) return null;

  const { name } = data.city;
  const { main, weather, wind } = data.list[0];

  const condition = weather[0].main;
  const description = weather[0].description;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const windDir = wind.deg;
  const tempMin = Math.round(main.temp_min);
  const tempMax = Math.round(main.temp_max);

  let mood = "";

  switch (condition) {
    case "Clear":
      mood = "☀️ clear and sunny";
      break;
    case "Clouds":
      mood = "⛅ partly cloudy";
      break;
    case "Rain":
      mood = "🌧️ rainy";
      break;
    case "Drizzle":
      mood = "🌦️ light drizzle";
      break;
    case "Snow":
      mood = "❄️ snowy";
      break;
    case "Mist":
      mood = "🌫️ misty";
      break;
    default:
      mood = `🌤️ ${description}`;
  }

  const windDirection = () => {
    if (windDir >= 45 && windDir < 135) return "east";
    if (windDir >= 135 && windDir < 225) return "south";
    if (windDir >= 225 && windDir < 315) return "west";
    return "north";
  };

  const advice =
    temp >= 30
      ? "🌞 Stay hydrated! It's quite hot today."
      : temp <= 10
      ? "🧥 Dress warmly, it's chilly outside."
      : "😊 It's a pleasant day to go outside.";

  const summary = (
    <>
      <span className="font-medium text-blue-800 dark:text-yellow-300">
        Today in {name}:
      </span>{" "}
      Expect <span className="font-semibold text-indigo-600 dark:text-indigo-300">{mood}</span> conditions with a current temperature of{" "}
      <span className="font-semibold">{temp}°C</span> (feels like{" "}
      <span className="font-semibold">{feelsLike}°C</span>). The skies are mostly{" "}
      <span className="italic">{description}</span>, humidity is around{" "}
      <span className="font-semibold">{humidity}%</span>, and winds are coming from the{" "}
      <span className="capitalize">{windDirection()}</span> at{" "}
      <span className="font-semibold">{windSpeed} m/s</span>. Maximum temperature:{" "}
      <span className="font-semibold">{tempMax}°C</span>, Minimum:{" "}
      <span className="font-semibold">{tempMin}°C</span>. <br /> <br />
      <span className="text-green-700 dark:text-green-300">{advice}</span>
    </>
  );

  return (
    <div className="flex flex-col h-full bg-gray-200 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg text-center text-gray-800 dark:text-gray-100 transition-all duration-300 hover:scale-[1.02]"  style={{ boxShadow: "0 1px 6px rgba(255, 255, 255, 0.08)" }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sparkles className="dark:text-yellow-500 animate-bounce text-blue-950" />
        <h3 className="text-xl font-bold tracking-wide">AI Weather Summary</h3>
      </div>
      <p className="text-sm leading-relaxed">{summary}</p>
    </div>
  );
};

export default WeatherSummary;
