import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Logo } from "./logo.svg";

export default function weatherForecast(props) {
  // Declare state variables
  const [weatherData, setWeatherData] = useState({ ready: false });
  //associated function
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidty,
      wind: response.data.wind.speed,
      city: response.data.name,
      descripton: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "Wednesday",
    });
    //if else statement for API call
    if (weatherData.ready) {
      return (
        <div>
          <div class="row">
            <div className="col">
              <Logo />
            </div>
            <div className="col">
              <ul className="temp">
                <span className="weather-icon">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  ></img>
                </span>
                <span className="temperature">
                  {" "}
                  {Math.round(weatherData.temperature)}{" "}
                </span>
                °F
                <p className="current-weather">
                  Updated: ${weatherData.date}
                  <br />
                  Humidity: ${weatherData.humidity}%
                  <br />
                  Wind: ${weatherData.wind}
                  <br />
                  <span className="text-capitalize">
                    ${weatherData.description}
                  </span>
                </p>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      const apiKey = "d643ee59f43b44ad31e57464532264d8";
      let apiUrl = `http://api.openweahtermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading...";
    }
  }
}
