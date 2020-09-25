import React from "react";
import WeatherIcon from "./WeatherIcon";

//setup forecast preview
export default function WeatherPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    const time = (hours - 12) <= 0 ? `${hours}:00 AM` : `${hours - 12}:00 PM`
    return time;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°F`;
  }
  return (
    <div className="WeatherPreview">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
