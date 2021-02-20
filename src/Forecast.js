import React, { useState } from "react";
import "./Forecast.css";
import ForecastIcon from "./ForecastIcon";

import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function getDayOfTheWeek(timestamp) {
    var forecastDay = new Date();
    forecastDay.setTime(timestamp * 1000);
    forecastDay.toUTCString();
    let dayIndex = forecastDay.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastDayName = days[dayIndex];
    return forecastDayName;
  }

  if (loaded) {
    let midnightIndex = 0;
    while (forecast.list[midnightIndex].dt_txt[12] !== "0") {
      midnightIndex++;
    }

    return (
      <div className="row" id="forecast">
        <div className="col-3" id="next-days">
          <p>
            {getDayOfTheWeek(forecast.list[midnightIndex + 8 * 0].dt)}
            <br />
            <ForecastIcon className="icon" code={props.data.icon} />
            <strong>
              <span className="day" id="forecastTemperature">
                {Math.round(forecast.list[midnightIndex + 4 + 8 * 0].main.temp)}
                °
              </span>
            </strong>
            <br />
            <span className="night" id="forecastTemperature">
              {Math.round(forecast.list[midnightIndex + 2 + 8 * 0].main.temp)}°
            </span>
          </p>
        </div>
        <div className="col-3" id="next-days">
          <p>
            {getDayOfTheWeek(forecast.list[midnightIndex + 8 * 1].dt)}
            <br />
            <ForecastIcon code={props.data.icon} />
            <strong>
              <span className="day" id="forecastTemperature">
                {Math.round(forecast.list[midnightIndex + 4 + 8 * 1].main.temp)}
                °
              </span>
            </strong>
            <br />
            <span className="night" id="forecastTemperature">
              {Math.round(forecast.list[midnightIndex + 2 + 8 * 1].main.temp)}°
            </span>
          </p>
        </div>
        <div className="col-3" id="next-days">
          <p>
            {getDayOfTheWeek(forecast.list[midnightIndex + 8 * 2].dt)}
            <br />
            <ForecastIcon code={props.data.icon} />
            <strong>
              <span className="day" id="forecastTemperature">
                {Math.round(forecast.list[midnightIndex + 4 + 8 * 2].main.temp)}
                °
              </span>
            </strong>
            <br />
            <span className="night" id="forecastTemperature">
              {Math.round(forecast.list[midnightIndex + 2 + 8 * 2].main.temp)}°
            </span>
          </p>
        </div>
        <div className="col-3" id="next-days">
          <p>
            {getDayOfTheWeek(forecast.list[midnightIndex + 8 * 3].dt)}
            <br />
            <ForecastIcon code={props.data.icon} />
            <strong>
              <span className="day" id="forecastTemperature">
                {Math.round(forecast.list[midnightIndex + 4 + 8 * 3].main.temp)}
                °
              </span>
            </strong>
            <br />
            <span className="night" id="forecastTemperature">
              {Math.round(forecast.list[midnightIndex + 2 + 8 * 3].main.temp)}°
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    let apiKey = "cddfb1e3d89e2258740a8f1797f07940";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecast);
    return "nothing";
  }
}
