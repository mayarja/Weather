import React from "react";
import GEtWeather from "./GEtWeather";
import "./weathar.css";

function Weathar() {
  let data = new Date();
  let day = data.getDate();
  let month = data.getMonth() + 1;
  let year = data.getFullYear();

  return (
    <div className="weather-app text-center">
      <div className="overlay"></div>
      <div className="title">
        <h2>Weather App</h2>
        <p>{`${year}-${month >= 10 ? `${month} ` : `0${month}`}-${
          day >= 10 ? `${day}` : `0${day}`
        }`}</p>
        <GEtWeather />
      </div>
    </div>
  );
}

export default Weathar;
