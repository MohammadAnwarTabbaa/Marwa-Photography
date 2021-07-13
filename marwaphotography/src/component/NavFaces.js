import React from "react";
import { Link } from "react-router-dom";
function NavFaces(props) {
  return (
    <Link
      to={"/Faces"}
      className={props.isResponsive ? " nav nav-show navUrban" : "nav navFaces"}
      onClick={props.Faces}
      defaultValue=""
    >
      Faces In Objects
    </Link>
  );
}

export default NavFaces;
