import React from "react";
import Nav from "../component/Nav";
import Image from "../Image/Image";
function Main(props) {
  return (
    <div>
      <Nav Faces={props.Faces} Misc={props.Misc} Urban={props.Urban} />
      <Image select={props.select} images={props.images} {...props} />
    </div>
  );
}

export default Main;
