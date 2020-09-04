import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherPreview from "./WeatherPreview";

export default function WeatherForecast(props) {
  //set states
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  //make a call to display a forecast

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          <WeatherPreview data={forecast.list[0]} />
        </div>
        <div className="col">
          <WeatherPreview data={forecast.list[1]} />
        </div>
        <div className="col">
          <WeatherPreview data={forecast.list[2]} />
        </div>
        <div className="col">
          <WeatherPreview data={forecast.list[3]} />
        </div>
        <div className="col">
          <WeatherPreview data={forecast.list[4]} />
        </div>
        <div className="col">
          <WeatherPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "d643ee59f43b44ad31e57464532264d8";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
