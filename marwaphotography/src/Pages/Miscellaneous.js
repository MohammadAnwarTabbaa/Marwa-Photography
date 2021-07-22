import React, { useState, useEffect } from "react";
import Image from "../Image/Image";
import Nav from "../component/Nav";
function Miscellaneous(props) {
  const [MiscImage, setMiscImage] = useState(null);
  useEffect(() => {
    setMiscImage(props.Misc);
  }, []);
  return (
    <div>
      <Nav Misc={props.Misc} Urban={props.Urban} />
      {MiscImage ? (
        <Image
          cat={props.cat}
          select={props.select}
          images={props.images}
          {...props}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Miscellaneous;
