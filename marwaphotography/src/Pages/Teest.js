import React, { useEffect, useState } from "react";

function Teest() {
  const [facesImage, setFacesImage] = useState(null);
  const anwar = () => {
    const [file] = document.getElementById("imgInp").files;
    if (file) {
      setFacesImage(URL.createObjectURL(file));
      console.log(facesImage);
    }
  };

  return (
    <div>
      <form runat="server">
        <input
          className="input"
          accept="image/*"
          type="file"
          id="imgInp"
          onChange={anwar}
        />
        <img id="blah" src={facesImage} alt="your image" />
      </form>
    </div>
  );
}

export default Teest;
