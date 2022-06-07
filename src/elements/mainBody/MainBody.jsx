import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import cloudy from "../../assets/cloudy.png";
import wind from "../../assets/wind.png";
import PCD from "../../assets/partly-cloudy-day.png";
import PCN from "../../assets/partly-cloudy-night.png";
import CN from "../../assets/clear-night.png";
import Rain from "../../assets/rain.png";
import sunny from "../../assets/sunny.png";
import fog from "../../assets/fog.png";

import "./MainBody.scss";

const MainBody = (props) => {
  const data = props.data;

  const city = data.address;
  const country = data.resolvedAddress;
  const temp = data.currentConditions && data.currentConditions.temp;
  const feel = data.currentConditions && data.currentConditions.feelslike;
  const humidity = data.currentConditions && data.currentConditions.humidity;
  const clouds = data.currentConditions && data.currentConditions.icon;
  const description =
    data.currentConditions && data.currentConditions.conditions;
  const time = data.currentConditions && data.currentConditions.datetime;
  const dataOne = data.days && data.days[0].tempmin;
  const dataTwo = data.days && data.days[0].tempmax;
  const dataThree = data.days && data.days[0].precipprou;
  const dataFour = data.days && data.days[0].windspeed;
  const dataFive = data.days && data.days[0].pressure;

  const getIcon = (icon) => {
    const image = {
      cloudy: cloudy,
      rain: Rain,
      fog: fog,
      wind: wind,
      "partly-cloudy-day": PCD,
      "partly-cloudy-night": PCN,
      "clear-night": CN,
    };
    return image[icon] || sunny;
  };
  
  return (
    <div className="main-body">
      <div className="main-current">
        <h2 className="main-title">{city}</h2>
        <p className="main-subtitle">{country}</p>
        <p className="main-item">Temperature: {Math.round(temp)} &#8451;</p>
        <p className="main-item">Feels Like: {Math.round(feel)} &#8451;</p>
        <p className="main-item">Humidity: {humidity} &#37;</p>
        <button
          className={`main-btn ${city === "Kyiv" ? "mainBody-disabled" : ""}`}
        >
          <a className="main-link" href="/">
            Go Back
          </a>
        </button>
      </div>

      <div className="main-icons">
        <p className="main-date">
          Updated {time && format(new Date(), " dd MMM  " + time.slice(0, 5))}
        </p>
        <div className="main-box">
          <img className="main-img" src={getIcon(clouds)} />
        </div>
        <p className="main-date">{description}</p>
      </div>

      <div className="main-daily">
        <div className="main-daily-data">Temp Min {Math.round(dataOne)}</div>
        <div className="main-daily-data">Temp Max {Math.round(dataTwo)}</div>
        <div className="main-daily-data">Precipitation {dataThree} &#37;</div>
        <div className="main-daily-data">Wind Speed {dataFour} m/s</div>
        <div className="main-daily-data">
          Pressure {Math.round(dataFive)} mm Hg
        </div>
      </div>
    </div>
  );
};

MainBody.propTypes = {
  data: PropTypes.object,
};

export default MainBody;
