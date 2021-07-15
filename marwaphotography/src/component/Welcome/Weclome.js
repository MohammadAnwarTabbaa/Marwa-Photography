import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const welcome = (props) => {
  return (
    <div className="background" onLoad={props.welcome}>
      <div className="container">
        <Link className="owner" to="/Main">
          Marwa Hodeib
        </Link>
      </div>
    </div>
  );
};

export default welcome;
