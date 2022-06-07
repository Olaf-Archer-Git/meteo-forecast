import React from "react";
import gitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about-links">
        <a
          className="about-item"
          href="https://www.linkedin.com/in/oleh-todoriko-506699231/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} />
        </a>
        <span className="about-name">Linledin</span>
        <a
          className="about-item"
          href="https://github.com/Olaf-Archer-Git/weather-forecast"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} />
        </a>
        <span className="about-name">GitHub</span>
      </div>
      <p className="about-text">
        2022 &copy; Ukraine. olto@protonmail.com <br />{" "}
        <span className="about-text-author">Produced By Oleh Todoriko</span>
      </p>
    </div>
  );
}

export default About;
