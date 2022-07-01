import React from "react";
import "./style.css";
export const ErrorMessage = ({ ErrorMessage }) => {
  return (
    <div className="ui error message error-container">
      <div className="header">There were some errors with your Geolocation</div>
      <ul className="list">
        <li>{ErrorMessage}</li>
      </ul>
    </div>
  );
};
