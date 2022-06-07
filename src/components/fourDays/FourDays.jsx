import React from "react";
import PropTypes from "prop-types";
import { format, fromUnixTime } from "date-fns";
import "./FourDays.scss";

const FourDays = (props) => {
  const data = props.data.search;

  const unix =
    data.days &&
    data.days.map((item) => {
      return item.datetimeEpoch;
    });

  const minTemp =
    data.days &&
    data.days.map((item) => {
      return item.tempmin;
    });

  const maxTemp =
    data.days &&
    data.days.map((item) => {
      return item.tempmax;
    });

  const description =
    data.days &&
    data.days.map((item) => {
      return item.description;
    });

  return (
    <div className="fourDays-container">
      <div className="fourDays-title">
        <h3 className="fourDays-city">{data.address}</h3>
      </div>

      <div className="fourDays-wrap">
        <div className="fourDays-element">
          <p className="fourDays-date">
            {unix && format(new Date(fromUnixTime(unix[2])), "MMM dd eee")}
          </p>
          <p className="fourDays-item">
            Min Temp: {Math.round(minTemp?.[2])} &#8451;
          </p>
          <p className="fourDays-item">
            Max Temp: {Math.round(maxTemp?.[2])} &#8451;
          </p>
          <p className="fourDays-item">{description?.[2]}</p>
        </div>

        <div className="fourDays-element">
          <p className="fourDays-date">
            {unix && format(new Date(fromUnixTime(unix[3])), "MMM dd eee")}
          </p>
          <p className="fourDays-item">
            Min Temp: {Math.round(minTemp?.[3])} &#8451;
          </p>
          <p className="fourDays-item">
            Max Temp: {Math.round(maxTemp?.[3])} &#8451;
          </p>
          <p className="fourDays-item">{description?.[3]}</p>
        </div>

        <div className="fourDays-element">
          <p className="fourDays-date">
            {unix && format(new Date(fromUnixTime(unix[4])), "MMM dd eee")}
          </p>
          <p className="fourDays-item">
            Min Temp: {Math.round(minTemp?.[4])} &#8451;
          </p>
          <p className="fourDays-item">
            Max Temp: {Math.round(maxTemp?.[4])} &#8451;
          </p>
          <p className="fourDays-item">{description?.[4]}</p>
        </div>

        <div className="fourDays-element">
          <p className="fourDays-date">
            {unix && format(new Date(fromUnixTime(unix[5])), "MMM dd eee")}
          </p>
          <p className="fourDays-item">
            Min Temp: {Math.round(minTemp?.[5])} &#8451;
          </p>
          <p className="fourDays-item">
            Max Temp: {Math.round(maxTemp?.[5])} &#8451;
          </p>
          <p className="fourDays-item">{description?.[5]}</p>
        </div>
      </div>
    </div>
  );
};

FourDays.propTypes = {
  data: PropTypes.object,
};

export default FourDays;
