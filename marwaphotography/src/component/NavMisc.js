import React from "react";
import { Link } from "react-router-dom";
function NavMisc(props) {
  return (
    <Link
      onClick={props.Misc}
      to={"/Misc"}
      className={props.isResponsive ? " nav nav-show navUrban" : "nav navMisc"}
    >
      Miscellaneous
    </Link>
  );
}

export default NavMisc;
