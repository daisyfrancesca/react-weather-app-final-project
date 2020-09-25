import React from "react";

export default function UpdatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  props = props.date

  let correctedOffset = ((props.timeZoneOffset * 100) / 60 / 60);
  correctedOffset = correctedOffset / 100

  let currentDate = (new Date().toISOString()).replace(/\.\d*Z/, "")
  props.utcDate = new Date(currentDate)

  let day = days[props.utcDate.getDay()];
  let hours = props.utcDate.getHours() + correctedOffset;
  let minutes = props.utcDate.getMinutes();

  hours = hours < 0 ? 24 + hours : hours

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {" "}
      {day} {(hours - 12) <= 0 ? `${hours}:${minutes} AM` : `${hours - 12}:${minutes} PM`}
    </div>
  );
}
