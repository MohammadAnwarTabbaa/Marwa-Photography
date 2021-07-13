import React, { useState, useEffect } from "react";
import NavUrban from "./NavUrban";
import NavFaces from "./NavFaces";
import NavMisc from "./NavMisc";
import NavAbout from "./NavAbout";
import NavContact from "./NavContact";

function Nav(props) {
  const [visible, isVisible] = useState(false);
  return (
    <div className="navMain">
      <NavUrban Urban={props.Urban} isResponsive={visible} />
      <NavFaces Faces={props.Faces} isResponsive={visible} />
      <NavMisc Misc={props.Misc} isResponsive={visible} />
      <NavAbout isResponsive={visible} />
      <NavContact isResponsive={visible} />

      <a href="#" className="toggle-button" onClick={() => isVisible(!visible)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </div>
  );
}

export default Nav;
