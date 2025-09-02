import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import WeatherSummary from "./components/WeatherSummary";
import Footer from "./components/Footer";
import Toast from "./components/Toast";




function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [recentCities, setRecentCities] = useState([]);
  const [recentLocations, setRecentLocations] = useState([]);
  const [toastMessage, setToastMessage] = useState("");


  const apiKey = import.meta.env.VITE_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecentCities(savedCities);
  }, []);

  const updateRecentCities = (city) => {
    const updatedCities = [city, ...recentCities.filter((c) => c !== city)].slice(0, 5);
    setRecentCities(updatedCities);
    localStorage.setItem("recentCities", JSON.stringify(updatedCities));
  };

  const fetchWeather = async (location) => {
    if (!location) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (data.cod === "200") {
        setWeatherData(data);
        setCity("");
        updateRecentCities(location);
      } else {
        setToastMessage("City not found!");

      }
    } catch (err) {
      console.error("Error fetching weather:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchByGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          setLocationAllowed(true);
          setLoading(true);
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`
            );
            const data = await res.json();
            if (data.cod === "200") {
              setWeatherData(data);
              setCity(data.city.name);
              updateRecentCities(data.city.name);
            }
          } catch (err) {
            console.error("Error fetching by location:", err);
          } finally {
            setLoading(false);
          }
        },
        () => {
          setToastMessage("Location access denied.");

          setLocationAllowed(false);
          setLoading(false);
        }
      );
    } else {
      setToastMessage("Geolocation not supported.");

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchByGeolocation();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen px-4 py-6 bg-gradient-to-br from-blue-200 to-indigo-500 dark:from-gray-900 dark:to-gray-800 text-white transition-all ease-in-out duration-500">
        <div className="relative mb-6">
          <div className="absolute right-1 top-2 sm:top-4">
            <DarkModeToggle />
          </div>
          <Header />
        </div>



        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />

        {/* Recent Searches */}
        {recentCities.length > 0 && (
          <div className="mt-4 flex flex-col items-center gap-1">
            <p className="text-sm mb-2 text-black dark:text-white">Recent Searches:</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6 text-black dark:text-white">
              {recentCities.map((c, idx) => (
                <button
                  key={idx}
                  className="dark:bg-white/20 px-3 py-1 rounded-full dark:hover:bg-white/30 transition text-center bg-gray-200"
                  onClick={() => fetchWeather(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            <p className="ml-3 text-lg">Loading weather data...</p>
          </div>
        ) : weatherData?.list ? (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 px-2 sm:px-20 w-full max-w-7xl mx-auto">
              <div className="w-full flex justify-center">
                <CurrentWeather data={weatherData} />
              </div>
              <div className="w-full flex justify-center">
                <WeatherSummary data={weatherData} />
              </div>
            </div>


            <ForecastCard forecast={weatherData.list.slice(1, 6)} />
            <Footer />
          </div>


        ) : (
          <p className="text-center mt-10">Search for a city to see forecast</p>
        )}

      </div>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}


    </ThemeProvider>
  );
}

export default App;
