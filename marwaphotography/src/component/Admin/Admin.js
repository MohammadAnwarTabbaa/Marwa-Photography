import React from "react";
import "./Admin.css";
import img from "./img.png";

function Admin() {
  return (
    <div className="all">
      <div className="fixedTable">
        <table>
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>

          <tr>
            <td className="id"> # </td>
            <td>
              <img className="imgThumb" id="output"></img>
            </td>
            <td>
              {" "}
              <textbox className="AdminPhotoTitle">
                {" "}
                I am a photo Title{" "}
              </textbox>
            </td>
            <td>
              <textbox className="adminPhotoDescription">
                I am a description{" "}
              </textbox>
            </td>
            <td>
              {" "}
              <button className="AdminDeleteBtn" type="button">
                {" "}
                Remove{" "}
              </button>{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Admin;
