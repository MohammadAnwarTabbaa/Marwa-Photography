import React from "react";
import { Link } from "react-router-dom";
function NavMisc(props) {
  return (
    <Link onClick={props.Misc} to={"/Main"} className="nav navMisc">
      Miscellaneous
    </Link>
  );
}

export default NavMisc;
