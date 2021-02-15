import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search">
          <form className="row" id="change-city">
            <div className="form-group mb-2"></div>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                id="write-city"
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
        <div className="row" id="description">
          <p>
            <div>
              <strong id="city">
                {weatherData.city}, {weatherData.country}
              </strong>
              <strong id="country"></strong>
            </div>
          </p>
        </div>
        <div className="row" id="last-updated">
          <p>
            Last updated: &nbsp; <FormattedDate date={weatherData.date} />
            <div id="location-and-time"></div>
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <ReactAnimatedWeather
              icon="FOG"
              color="white"
              size={150}
              animate={false}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6" id="temperature">
                {weatherData.temperature}°
              </div>
              <div className="col-6" id="choose">
                <a href="/" id="celsius">
                  c
                </a>{" "}
                |{" "}
                <a href="/" id="fahrenheit">
                  f
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li id="description-weather">{weatherData.description}</li>
                  <li> Humidity: {weatherData.humidity} %</li>
                  <li>Wind: {weatherData.wind} m/s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cddfb1e3d89e2258740a8f1797f07940";
    let city = "Ljubljana";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
