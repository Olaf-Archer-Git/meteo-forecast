import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../../elements/searchBox/SearchBox";
import MainBody from "../../elements/mainBody/MainBody";
import "./Main.scss";

const Main = (props) => {
  const data = props.data.search;

  return (
    <main className="main">
      <SearchBox setLocation={props.setLocation} />
      <MainBody data={data} />
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.object,
  setLocation: PropTypes.func,
};

export default Main;
