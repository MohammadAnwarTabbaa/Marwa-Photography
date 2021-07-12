import NavUrban from "./NavUrban";
import NavFaces from "./NavFaces";
import NavMisc from "./NavMisc";
import NavAbout from "./NavAbout";
import NavContact from "./NavContact";

function Nav(props) {
  return (
    <div className="navMain">
      <NavUrban Urban={props.Urban} />
      <NavFaces Faces={props.Faces} />
      <NavMisc Misc={props.Misc} />
      <NavAbout />
      <NavContact />
    </div>
  );
}

export default Nav;
