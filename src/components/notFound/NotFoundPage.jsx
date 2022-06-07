import React from "react";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="error">
      <span className="error-number">404</span>
      <br />
      <span className="error-text">Oops! Sorry page was not found</span>
      <br />
      <div className="error-box">
        <a href="/" className="error-button">
          Go Back
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
