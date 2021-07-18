
import React from "react";
import "./AdminLogin.css";
import bkg from "./bkg.jpg";



function AdminLogin() {
    return (
       <div>
<img className="bkg" src={bkg}></img>
<div className="login">
  <div className="heading">
    <h2>Sign in</h2>
    <form action="#">

      <div className="input-group input-group-lg">
        <span className="input-group-addon"><i className="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder="Username or email"/>
          </div>

        <div className="input-group input-group-lg">
          <span className="input-group-addon"><i className="fa fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="Password"/>
        </div>

        <button type="submit" class="float">Login</button>
       </form>
 		</div>
 </div>
 </div> 
        );
    }
    
    export default AdminLogin;