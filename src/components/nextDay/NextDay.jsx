import React from "react";
import PropTypes from "prop-types";
import { format, add } from "date-fns";
import cloudy from "../../assets/cloudy.png";
import wind from "../../assets/wind.png";
import PCD from "../../assets/partly-cloudy-day.png";
import PCN from "../../assets/partly-cloudy-night.png";
import CN from "../../assets/clear-night.png";
import Rain from "../../assets/rain.png";
import sunny from "../../assets/sunny.png";
import fog from "../../assets/fog.png";

import "./NextDay.scss";

const NextDay = (props) => {
  const data = props.data.search;

  const city = data.address;
  const temp = data.days && data.days[1].temp;
  const tempMin = data.days && data.days[1].tempmin;
  const tempMax = data.days && data.days[1].tempmax;
  const windspeed = data.days && data.days[1].windspeed;
  const precipitation = data.days && data.days[1].precipprob;
  const icons = data.days && data.days[1].icon;
  const conditions = data.days && data.days[1].conditions;
  const humidity = data.days && data.days[1].humidity;
  const pressure = data.days && data.days[1].pressure;

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

  const tomorrowFns = add(new Date(), {
    days: 1,
  });

  return (
    <div className="nextDay">
      <div className="nextDay-container">
        <h3 className="nextDay-title">{city}</h3>
        <p className="nextDay-item">Temp: {Math.round(temp)} &#8451;</p>
        <p className="nextDay-item">
          Min Temp: {Math.round(tempMin)} &#8451;
        </p>
        <p className="nextDay-item">
          Max Temp: {Math.round(tempMax)} &#8451;
        </p>
      </div>
      <div className="nextDay-icons">
        <p className="nextDay-elements">
          {format(new Date(tomorrowFns), " dd MMM eeee")}
        </p>
        <div className="nextDay-box">
          <img className="nextDay-icon" src={getIcon(icons)} />
        </div>
        <p className="nextDay-elements">{conditions}</p>
      </div>
      <div className="nextDay-container">
        <p className="nextDay-items">Precipitation: {precipitation} &#37;</p>
        <p className="nextDay-items">Wind Speed: {Math.round(windspeed)} km/h</p>
        <p className="nextDay-items">Humidity: {Math.round(humidity)} &#37;</p>
        <p className="nextDay-items">Pressure: {Math.round(pressure)} mm Hg</p>
      </div>
    </div>
  );
};

NextDay.propTypes = {
  data: PropTypes.object,
};

export default NextDay;
