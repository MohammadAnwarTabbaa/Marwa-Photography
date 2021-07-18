import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Image from "../Image/Image";
function Faces(props) {
  const [facesImage, setFacesImage] = useState(null);

  useEffect(() => {
    setFacesImage(props.Faces);
  }, []);

  return (
    <div>
      <Nav Misc={props.Misc} Urban={props.Urban} />
      {facesImage ? (
        <Image select={props.select} images={props.images} {...props} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Faces;