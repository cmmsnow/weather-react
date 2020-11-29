import React, { useState } from "react";
import axios from "axios";
import "./Main.css";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.main.wind.speed,
      city: response.data.name,
      icon:
        "https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Main">
        <div className="row">
          <div className="col-4">
            <h2>
              <span id="main-city">{weatherData.city}</span>
              <br />
              <span className="temperature" id="main-temp">
                {Math.round(weatherData.temperature)}˚
              </span>
              <span id="temp-change">
                <p>F|C</p>
              </span>
            </h2>
          </div>
          <div className="col-4">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              id="icon"
              className=""
            />
          </div>
          <div className="col-4">
            <h3>
              <span id="description">{weatherData.description}</span>
              <br />
              <span id="humidity">{weatherData.humidity}</span>% Humidity
              <br />
              Winds <span id="wind">{Math.round(weatherData.wind)}</span>mph
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6b2cd3b123da2313f249b570620fe77d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appID=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
