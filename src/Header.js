import React from "react";

export default function Header(props) {
  
    return (
      <nav className={props.darkMode? "dark" : ""}>
        <img src="../img/logo192.png" alt="react-logo" />
        <h2>ReactFacts</h2>
        <div className="toggler">
          <p className="toggler-light">Light</p>
          <div className="toggler-slider">
            <span
              className="toggler-slider-circle"
              onClick={props.togglerChange}
            ></span>
          </div>
          <p className="toggler-dark">Dark</p>
        </div>
      </nav>
    );
}