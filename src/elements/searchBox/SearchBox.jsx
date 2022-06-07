import React, { useState } from "react";
import PropTypes from "prop-types";
import search from "../../assets/search.svg";
import "./SearchBox.scss";

const SearchBox = ({ setLocation }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(input);
    setInput("");
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-label"> Enter City Name</label>
        <input
          className="search-input"
          placeholder="Search ..."
          required
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="search-btn" onClick={handleSubmit}>
          <img className="search-icon" src={search} />
        </button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  setLocation: PropTypes.func,
};

export default SearchBox;
