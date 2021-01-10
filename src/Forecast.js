import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="row" id="forecast">
      <div className="col-2" id="next-days">
        <p>
          mon
          <br />
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#64958f"
            size={40}
            animate={false}
          />
          <br />
          <span className="day">13°</span> <span className="night">3°</span>
        </p>
      </div>
      <div className="col-2" id="next-days">
        <p>
          tue
          <br />
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#64958f"
            size={40}
            animate={false}
          />
          <br />
          <span className="day">15°</span> <span className="night">6°</span>
        </p>
      </div>
      <div className="col-2" id="next-days">
        <p>
          wed
          <br />
          <ReactAnimatedWeather
            icon="FOG"
            color="#64958f"
            size={40}
            animate={false}
          />
          <br />
          <span className="day">17°</span> <span className="night">7°</span>
        </p>
      </div>
      <div className="col-2" id="next-days">
        <p>
          thu
          <br />
          <ReactAnimatedWeather
            icon="RAIN"
            color="#64958f"
            size={40}
            animate={false}
          />
          <br />
          <span className="day">19°</span> <span className="night">9°</span>
        </p>
      </div>
      <div className="col-2" id="next-days">
        <p>
          fri
          <br />
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="#64958f"
            size={40}
            animate={false}
          />
          <br />
          <span className="day">15°</span> <span className="night">5°</span>
        </p>
      </div>
      <div className="col-2" id="next-days">
        <p>
          sat
          <br />
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#64958f"
            size={40}
            animate={false}
          />
          <br />
          <span className="day">13°</span> <span class="night">3°</span>
        </p>
      </div>
    </div>
  );
}
