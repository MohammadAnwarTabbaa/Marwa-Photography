import React from "react";
import { Link } from "react-router-dom";
function NavFaces(props) {
  return (
    <Link to={"/Main"} className="nav navFaces" onClick={props.Faces}>
      Faces In Objects
    </Link>
  );
}

export default NavFaces;
