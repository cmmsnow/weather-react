import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="row">
        <div className="col-4">
          <h2>
            <span id="main-city">Philadelphia</span>
            <br />
            <span className="temperature" id="main-temp">
              57˚
            </span>
            <span id="temp-change">
              <p>F|C</p>
            </span>
          </h2>
        </div>
        <div className="col-4">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            id="icon"
            className=""
          />
        </div>
        <div className="col-4">
          <h3>
            <span id="description">Light rain</span>
            <br />
            <span id="humidity">45</span>% Humidity
            <br />
            Winds <span id="wind">6</span>mph
          </h3>
        </div>
      </div>
    </div>
  );
}
