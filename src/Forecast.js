import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    let midnightIndex = 0;
    while (forecast.list[midnightIndex].dt_txt[12] !== "0") {
      midnightIndex++;
    }
    return (
      <div className="WeatherForecast row">
        <ForecastPreview
          dataMin={forecast.list[midnightIndex + 8 * 0 + 2]}
          dataMax={forecast.list[midnightIndex + 8 * 0 + 5]}
          unit={props.unit}
        />
        <ForecastPreview
          dataMin={forecast.list[midnightIndex + 8 * 1 + 2]}
          dataMax={forecast.list[midnightIndex + 8 * 1 + 5]}
          unit={props.unit}
        />
        <ForecastPreview
          dataMin={forecast.list[midnightIndex + 8 * 2 + 2]}
          dataMax={forecast.list[midnightIndex + 8 * 2 + 5]}
          unit={props.unit}
        />
        <ForecastPreview
          dataMin={forecast.list[midnightIndex + 8 * 3 + 2]}
          dataMax={forecast.list[midnightIndex + 8 * 3 + 5]}
          unit={props.unit}
        />
      </div>
    );
  } else {
    let apiKey = "cddfb1e3d89e2258740a8f1797f07940";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
