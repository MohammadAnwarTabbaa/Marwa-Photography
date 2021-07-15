import React from "react";
import { Link } from "react-router-dom";
function NavUrban(props) {
  return (
    <Link
      onClick={props.Urban}
      to={"/Main"}
      className={props.isResponsive ? " nav nav-show navUrban" : "nav navUrban"}
    >
      Urban
    </Link>
  );
}

export default NavUrban;
