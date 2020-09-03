import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("imperial");
  //set C
  function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }
  //set F
  function convertToImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  if (unit === `imperial`) {
    return (
      <div className="weatherTemp">
        <span className="temperature"> {Math.round(props.farenheit)} </span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertToMetric}>
            °C
          </a>{" "}
        </span>
        <br />
      </div>
    );
  } else {
    let metric = ((props.farenheit - 32) * 5) / 9;
    return (
      <div className="weatherTemp">
        <span className="temperature"> {Math.round(metric)}</span>
        <span className="unit">
          <a href="/" onClick={convertToImperial}>
            °F{" "}
          </a>{" "}
          | °C
        </span>
        <br />
      </div>
    );
  }
}
