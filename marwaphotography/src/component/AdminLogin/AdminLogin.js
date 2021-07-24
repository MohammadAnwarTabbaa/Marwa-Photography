import React from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";
import bkg from "./bkg.jpg";

function AdminLogin() {
  return (
    <div className="allLogin">
      <img className="bkg" src={bkg}></img>

      <div className="form-box">
        <div className="header-text">Welcome!</div>

        <form action="#">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email Address"
          />
          <input
            type="password"
            className="form-control"
            placeholder="Your Password"
          />
          {/* <button type="submit" className="float">
            Sign in
          </button> */}
          {/* <span className="float"> */}
          <Link to="/AdminPanel" type="submit" className="float">
            Sign in
          </Link>
          {/* </span> */}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
