import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function WeatherForecastPreview(props) {
  function getDayOfTheWeek(timestamp) {
    var forecastDay = new Date();
    forecastDay.setTime(timestamp * 1000);
    forecastDay.toUTCString();
    let dayIndex = forecastDay.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastDayName = days[dayIndex];
    return forecastDayName;
  }

  function temperatureMin() {
    let temperature = Math.round(props.dataMin.main.temp);
    if (props.unit === "celsius") {
      return `${temperature}°C`;
    } else {
      temperature = Math.round((temperature * 9) / 5 + 32);

      return `${temperature}°F`;
    }
  }

  function temperatureMax() {
    let temperature = Math.round(props.dataMax.main.temp);
    if (props.unit === "celsius") {
      return `${temperature}°C`;
    } else {
      temperature = Math.round((temperature * 9) / 5 + 32);

      return `${temperature}°F`;
    }
  }

  return (
    <div className="col-3" id="next-days">
      <p>
        {getDayOfTheWeek(props.data)}
        <br />
        <ForecastIcon className="icon" code={props.dataMax.weather[0].icon} />
        <strong>
          <span className="day" id="forecastTemperature">
            {temperatureMin()}°
          </span>
        </strong>
        <br />
        <span className="night" id="forecastTemperature">
          {temperatureMax()}°
        </span>
      </p>
    </div>
  );
}
