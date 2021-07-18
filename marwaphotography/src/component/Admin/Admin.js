import React from "react";
import "./Admin.css";
import img from "./img.png";

function Admin() {
  return (
    <div>
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
            <img className="imgThumb"src={img}></img>
          </td>
          <td>
            {" "}
            <textarea className="AdminPhotoTitle"> I am a photo Title </textarea>
          </td>
          <td>
            <textarea className="adminPhotoDescription">I am a description </textarea>
          </td>
          <td>
            {" "}
            <button className="AdminUpdateBtn" type="button"> Update </button>{" "}
            <button className="AdminDeleteBtn" type="button">
              {" "}
              Remove{" "}
            </button>{" "}
          </td>
        </tr>

        <tr>
          <td> #</td>
          <td>
            <img src={img}></img>
          </td>
          <td>
            {" "}
            <textarea className="AdminPhotoTitle"> I am a photo Title </textarea>
          </td>
          <td>
            <textarea className="adminPhotoDescription">I am a description </textarea>
          </td>
          <td>
            {" "}
            <button className="AdminUpdateBtn" type="button"> Update </button>{" "}
            <button className="AdminDeleteBtn" type="button">
              {" "}
              Remove{" "}
            </button>{" "}
          </td>
        </tr>
        <tr>
          <td> #</td>
          <td>
            <img src={img}></img>
          </td>
          <td>
            {" "}
            <textarea className="AdminPhotoTitle"> I am a photo Title </textarea>
          </td>
          <td>
            <textarea className="adminPhotoDescription">I am a description </textarea>
          </td>
          <td>
            {" "}
            <button className="AdminUpdateBtn" type="button"> Update </button>{" "}
            <button className="AdminDeleteBtn" type="button">
              {" "}
              Remove{" "}
            </button>{" "}
          </td>
        </tr>
      </table>
      <button className="AdminAddBtn" type="button">
        {" "}
        Add{" "}
      </button>
    </div>
  );
}

export default Admin;
