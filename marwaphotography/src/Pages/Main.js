import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Image from "../Image/Image";
function Main(props) {
  const [urbanImage, setUrbanImage] = useState(null);

  useEffect(() => {
    setUrbanImage(props.Urban);
  }, []);

  return (
    <div>
      {/* <Nav Faces={props.Faces} Misc={props.Misc} Urban={props.Urban} />
      <Image select={props.select} images={props.images} {...props} /> */}
      <Nav Misc={props.Misc} Urban={props.Urban} />
      {urbanImage ? (
        <Image select={props.select} images={props.images} {...props} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Main;
