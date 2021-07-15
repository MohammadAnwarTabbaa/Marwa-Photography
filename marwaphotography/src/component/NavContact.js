import { Link } from "react-router-dom";
function NavContact(props) {
  return (
    <Link
      to="/ContactUs"
      className={
        props.isResponsive ? " nav nav-show navUrban" : "nav navContact"
      }
    >
      Contact
    </Link>
  );
}

export default NavContact;
