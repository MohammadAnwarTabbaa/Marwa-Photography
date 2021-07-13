import { Link } from "react-router-dom";
function NavAbout(props) {
  return (
    <Link
      to="/About"
      className={props.isResponsive ? " nav nav-show navUrban" : "nav navAbout"}
    >
      About
    </Link>
  );
}

export default NavAbout;
