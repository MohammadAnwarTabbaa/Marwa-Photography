import React, { useState } from "react";
import image from "../../Image/Image";
import "./Admin.css";
import img from "./img.png";

function Admin(props) {
  const [Cat, setCat] = useState("");
  return (
    <div className="all">
      <div className="fixedTable">
        <table>
          {props.images.map((image, index) => (
            <>
              <tr>
                <th>Id</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>

              <tr>
                <td className="id"> {image._id} </td>
                <td>
                  <img
                    src={`http://localhost:3000/${props.cat}/${image.src}`}
                    className="imgThumb"
                    id="output"
                  />
                </td>
                <td>
                  {" "}
                  <textbox className="AdminPhotoTitle">{image.title}</textbox>
                </td>
                <td>
                  <textbox className="adminPhotoDescription">
                    {image.description}
                  </textbox>
                </td>
                <td>
                  {" "}
                  <button
                    className="AdminDeleteBtn"
                    type="button"
                    value={props.cat}
                    id={image.src}
                    onClick={props.delete}
                  >
                    {" "}
                    Remove{" "}
                  </button>{" "}
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Admin;
