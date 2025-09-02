
---

# ⛅ WeatherMate – Smart Weather Forecast App

## 📌 Project Overview

WeatherMate is a modern, interactive weather web application built with **React + Tailwind CSS**.
It fetches real-time weather forecasts using the **OpenWeatherMap API**, supports **dark/light themes**, and provides **AI-like weather summaries** to make weather insights more human-friendly.

The app also features geolocation, recent searches, and toast notifications for a seamless user experience.

---


WeatherMate offers:

* Clean, responsive UI with **dark/light mode toggle**.
* **Real-time weather forecasts** (3-hour intervals).
* **Weather Summary**: AI-like, human-readable explanations.
* **Geolocation support** – fetch weather for your current location.
* **Recent Searches** stored in localStorage for quick access.
* **Toast Notifications** for errors like invalid cities or denied location access.

---

## 🛠 Tech Stack

| Component        | Technology Used               |
| ---------------- | ----------------------------- |
| Frontend         | React (Vite)                  |
| Styling          | Tailwind CSS                  |
| API              | OpenWeatherMap API            |
| State Management | React useState + localStorage |
| Notifications    | Custom Toast Component        |

---

## ⚙️ Functionality Breakdown

### 1️⃣ Weather Data Fetch

* Search by city name.
* Fetch weather by current geolocation.
* Error handling (invalid city, denied location).

### 2️⃣ Forecast & Summary

* 5 forecast cards (3-hour interval each).
* AI-like **Weather Summary** component.
* Current weather display (temperature, condition, etc.).

### 3️⃣ Recent Searches

* Stores last 5 searched cities in localStorage.

### 4️⃣ Dark/Light Mode

* Toggle theme with smooth transitions.
* Persistent theme across sessions.

### 5️⃣ Notifications

* Toast messages for errors (city not found, geolocation denied).
* Auto-dismiss after 3 seconds.

---

## 📥 Installation & Setup Guide

### 🛠 Prerequisites:

* Node.js and npm installed

### 📌 Steps to Run Locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weathermate.git
   cd weathermate
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add your OpenWeather API key:

   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Run the app:

   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---


## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to fork this repo and submit a pull request.
