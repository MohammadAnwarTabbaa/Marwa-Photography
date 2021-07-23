import React, { useState } from "react";
import bkg from "../component/Admin/bkg.jpg";
import Admin from "../component/Admin/Admin";
import "../component/Admin/Admin.css";
import Urban from "./Urban";

function AdminPanel() {
  const [AdminToggle, setAdminToggle] = useState(false);
  const [uploadImage, setuploadImage] = useState("#");
  const [AddClose, setAddClose] = useState(false);
  const but = ["Add", "Close"];
  const ImageSource = () => {
    const [file] = document.getElementById("real-file").files;

    if (file) {
      setuploadImage(URL.createObjectURL(file));
      console.log(uploadImage);
    }
  };

  const [AdminToggle2, setAdminToggle2] = useState(false);
  const [uploadImage2, setuploadImage2] = useState("#");
  const ImageSource2 = () => {
    const [file] = document.getElementById("real-file2").files;
    if (file) {
      setuploadImage2(URL.createObjectURL(file));
      console.log(uploadImage2);
    }
  };

  const [AdminToggle3, setAdminToggle3] = useState(false);
  const [uploadImage3, setuploadImage3] = useState("#");
  const ImageSource3 = () => {
    const [file] = document.getElementById("real-file3").files;
    if (file) {
      setuploadImage3(URL.createObjectURL(file));
      console.log(uploadImage3);
    }
  };
  function handleChangeTitle(e) {
    console.log("title" + e.target.value);
  }
  function handleChangeDes(e) {
    console.log("des" + e.target.value);
  }
  const Urbanclick = () => {
    // fetch("http://localhost:3000/urban/post?description=&title=faces");
    console.log();
  };

  return (
    <div className="adminWrap">
      <div className="allTables">
        <img className="bkg" src={bkg} />
        <div className="urbanCat">
          <h2>Urban</h2>
          <Admin />
          {AdminToggle ? (
            <div id="AdminForm">
              <form onSubmit={Urbanclick()}>
                <table>
                  <tr>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Submit</th>
                  </tr>

                  <tr>
                    <td>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="real-file"
                        onChange={ImageSource}
                      />
                      <img className="UploadedImg" src={uploadImage} />
                    </td>
                    <td>
                      {" "}
                      <textarea
                        onChange={handleChangeTitle}
                        type="text"
                        name="Form-Title"
                        id="Form-Title"
                      />{" "}
                    </td>
                    <td>
                      <textarea
                        onChange={handleChangeDes}
                        type="text"
                        name="Form-Description"
                        id="Form-Description"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        className="AdminSubmitBtn"
                        id="submit-Btn"
                        type="submit"
                        value="Submit"
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          ) : (
            ""
          )}

          <button
            className="AdminAddBtn"
            id="add-Btn"
            type="button"
            onClick={() => setAdminToggle(!AdminToggle)}
          >
            {AdminToggle ? but[1] : but[0]}
          </button>
        </div>
        <div className="facesCat">
          <h2>Faces and Objects</h2>
          <Admin />
          {AdminToggle2 ? (
            <div id="AdminForm">
              <table>
                <tr>
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Submit</th>
                </tr>

                <tr>
                  <td>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      id="real-file2"
                      onChange={ImageSource2}
                    />
                    <img className="UploadedImg" src={uploadImage2} />
                  </td>
                  <td>
                    {" "}
                    <textarea
                      type="text"
                      name="Form-Title"
                      id="Form-Title"
                    />{" "}
                  </td>
                  <td>
                    <textarea
                      type="text"
                      name="Form-Description"
                      id="Form-Description"
                    />
                  </td>
                  <td>
                    {" "}
                    <button
                      className="AdminSubmitBtn"
                      id="submit-Btn"
                      type="button"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            ""
          )}

          <button
            className="AdminAddBtn"
            id="add-Btn"
            type="button"
            onClick={() => setAdminToggle2(!AdminToggle2)}
          >
            {AdminToggle2 ? but[1] : but[0]}
          </button>
        </div>
        <div className="miscCat">
          <h2>Miscellaneous</h2>
          <Admin />
          {AdminToggle3 ? (
            <div id="AdminForm">
              <table>
                <tr>
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Submit</th>
                </tr>

                <tr>
                  <td>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      id="real-file3"
                      onChange={ImageSource3}
                    />
                    <img className="UploadedImg" src={uploadImage3} />
                  </td>
                  <td>
                    {" "}
                    <textarea
                      className="Urbantitle"
                      type="text"
                      name="Form-Title"
                      id="Form-Title"
                    />{" "}
                  </td>
                  <td>
                    <textarea
                      className="UrbanDescription"
                      type="text"
                      name="Form-Description"
                      id="Form-Description"
                    />
                  </td>
                  <td>
                    {" "}
                    <button
                      className="AdminSubmitBtn"
                      id="submit-Btn"
                      type="button"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            ""
          )}

          <button
            className="AdminAddBtn"
            id="add-Btn"
            type="button"
            onClick={() => setAdminToggle3(!AdminToggle3)}
          >
            {AdminToggle3 ? but[1] : but[0]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
