import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherPreview from "./WeatherPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  //make a call to display a forecast

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast row">
        <WeatherPreview data={forecast.list[0]} />
        <WeatherPreview data={forecast.list[1]} />
        <WeatherPreview data={forecast.list[2]} />
        <WeatherPreview data={forecast.list[3]} />
        <WeatherPreview data={forecast.list[4]} />
        <WeatherPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "d643ee59f43b44ad31e57464532264d8";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
