import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
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
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
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

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  function currentLocation(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let apiKey = "1fd01a094c047ffda9a1022db88d180b";
    let units = "metric";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="green">
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
              <button
                type="submit"
                className="btn btn-secondary mb-2 ml-2"
                onClick={getCurrentLocation}
              >
                My location
              </button>
            </form>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
        <div className="graphic">
          <img src="/img/green-01.png" alt="graphic" />
        </div>
        <div className="white">
          <Forecast city={weatherData.city} data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
