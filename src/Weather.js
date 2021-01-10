import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Geneva",
    country: "CH",
    updated: "Tuesday, 11:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    humidity: 80,
    wind: 20,
    status: "Rain",
  };
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
            <strong id="city">{weatherData.city}</strong>, {weatherData.country}
            <strong id="country"></strong>
          </div>
        </p>
      </div>
      <div className="row" id="last-updated">
        <p>
          Last updated: &nbsp;{weatherData.updated}
          <div id="location-and-time"></div>
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt=""
            id="icon-big"
            className="float-left"
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6" id="temperature">
              12°
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
                <li id="description-weather">{weatherData.status}</li>
                <li> Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
