import React, { useEffect, useRef, useState } from "react";
import "./Wether.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import rain_icon from "../Assets/rain.png";
import drizzle_icon from "../Assets/drizzle.png";
import snow_icon from "../Assets/snow.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";
// import Deshboad from "../Componet/Deshboad";

function Wether() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState({});

  const allIcons = {
    "01d": clear_icon, // Clear sky (day)
    "01n": clear_icon, // Clear sky (night)
    "02d": cloud_icon, // Few clouds (day)
    "02n": cloud_icon, // Few clouds (night)
    "03d": cloud_icon, // Scattered clouds
    "03n": cloud_icon, // Scattered clouds
    "04d": drizzle_icon, // Broken clouds
    "04n": drizzle_icon, // Broken clouds
    "09d": rain_icon, // Shower rain
    "09n": rain_icon, // Shower rain
    "10d": rain_icon, // Rain (day)
    "10n": rain_icon, // Rain (night)
    "13d": snow_icon, // Snow
    "13n": snow_icon, // Snow
  };

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = "ec82e5b564a68848c0376162316ed418";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      // icons
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });

      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData("kadi");
  }, []);

  return (
    <>
      {/*Wether-app */}
      <div className="Weather">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="search" />
          <img
            src={search_icon}
            alt="Search Icon"
            onClick={() => fetchWeatherData(inputRef.current.value)}
          />
        </div>
        <img
          src={weatherData.icon || clear_icon}
          alt="Weather Icon"
          className="wether_icon"
        />
        <p className="temperature">{weatherData.temperature}°C</p>
        <p className="location">{weatherData.location}</p>

        {/* ************ Wether-Data *********** */}
        <div className="wether-data">
          <div className="col">
            <img src={humidity_icon} alt="Humidity Icon" />
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>

          <div className="col">
            <img src={wind_icon} alt="Wind Icon" />
            <div>
              <p>{weatherData.windspeed} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wether;
