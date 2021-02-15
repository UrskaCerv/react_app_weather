import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "cddfb1e3d89e2258740a8f1797f07940";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search" onSubmit={handleSubmit}>
          <form className="row" id="change-city">
            <div className="form-group mb-2"></div>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                id="write-city"
                onChange={handleCityChange}
              />
            </div>
            <button type="submit" className="btn btn-secondary mb-2">
              Search
            </button>
            <button type="submit" className="btn btn-secondary mb-2">
              My location
            </button>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
