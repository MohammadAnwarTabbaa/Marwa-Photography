import React, { useEffect, useState } from "react";
import bkg from "../component/Admin/bkg.jpg";
import Admin from "../component/Admin/Admin";
import "../component/Admin/Admin.css";
import Urban from "./Urban";

function AdminPanel(props) {
  const [AdminToggle, setAdminToggle] = useState(false);
  const [uploadImage, setuploadImage] = useState("#");
  const [AddClose, setAddClose] = useState(false);
  const [urbanImage, setUrbanImage] = useState(null);
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

  const UrbanSubmit = (e) => {
    e.preventDefault();
    const title = e.target["urban-title"].value;
    const des = e.target["urban-Des"].value;
    const image = e.target["urban-image"].files[0];
    const cat = "urban";
    props.addImage({ title, des, image, cat });
  };

  const FacesSubmit = (e) => {
    e.preventDefault();
    const title = e.target["faces-title"].value;
    const des = e.target["faces-Des"].value;
    const image = e.target["faces-image"].files[0];
    const cat = "faces";
    props.addImage({ title, des, image, cat });
  };

  const MisceSubmit = (e) => {
    e.preventDefault();
    const title = e.target["misce-title"].value;
    const des = e.target["misce-Des"].value;
    const image = e.target["misce-image"].files[0];
    const cat = "misce";
    props.addImage({ title, des, image, cat });
  };
  const [UrbanShow, setUrbanShow] = useState(true);
  const [FacesShow, setFacecsShow] = useState(false);
  const [MisceShow, setMisceShow] = useState(false);
  const urbanShow = (e) => {
    e.preventDefault();

    setFacecsShow(false);
    setMisceShow(false);
    setUrbanShow(true);
  };
  const facecShow = (e) => {
    e.preventDefault();
    setUrbanShow(false);
    setFacecsShow(true);
    setMisceShow(false);
  };
  const misceShow = (e) => {
    e.preventDefault();
    setUrbanShow(false);
    setFacecsShow(false);
    setMisceShow(true);
  };

  useEffect(() => {
    setUrbanImage(props.urbanImages);
  }, []);

  return (
    <div className="adminWrap" onLoad={props.adminImages}>
      <div className="allTables">
        <img className="bkg" src={bkg} />
        <div className="tab">
          <button className="tablinks" onClick={urbanShow}>
            Urban
          </button>
          <button className="tablinks" onClick={facecShow}>
            Faces in Objects
          </button>
          <button className="tablinks" onClick={misceShow}>
            Misc
          </button>
        </div>
        {UrbanShow ? (
          <div className="urbanCat">
            <h2>Urban</h2>
            {urbanImage ? (
              <Admin
                delete={props.delete}
                images={props.urbanImages}
                cat="Urban"
              />
            ) : (
              ""
            )}
            {AdminToggle ? (
              <div id="AdminForm">
                <form onSubmit={UrbanSubmit}>
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
                          name="urban-image"
                          id="real-file"
                          onChange={ImageSource}
                        />
                        <img className="UploadedImg" src={uploadImage} />
                      </td>
                      <td>
                        {" "}
                        <input name="urban-title" type="text" />{" "}
                      </td>
                      <td>
                        <textarea
                          name="urban-Des"
                          type="text"
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
        ) : (
          ""
        )}
        {FacesShow ? (
          <div className="facesCat">
            <h2>Faces in Objects</h2>
            <Admin
              delete={props.delete}
              images={props.facesImages}
              cat="Faces"
            />
            {AdminToggle2 ? (
              <div id="AdminForm">
                <form onSubmit={FacesSubmit}>
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
                          name="faces-image"
                          onChange={ImageSource2}
                        />
                        <img className="UploadedImg" src={uploadImage2} />
                      </td>
                      <td>
                        {" "}
                        <textarea
                          type="text"
                          name="faces-title"
                          id="Form-Title"
                        />{" "}
                      </td>
                      <td>
                        <textarea
                          type="text"
                          name="faces-Des"
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
              onClick={() => setAdminToggle2(!AdminToggle2)}
            >
              {AdminToggle2 ? but[1] : but[0]}
            </button>
          </div>
        ) : (
          ""
        )}
        {MisceShow ? (
          <div className="miscCat">
            <h2>Miscellaneous</h2>
            <Admin
              delete={props.delete}
              images={props.miscImages}
              cat="Misce"
            />
            {AdminToggle3 ? (
              <div id="AdminForm">
                <form onSubmit={MisceSubmit}>
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
                          name="misce-image"
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
                          name="misce-title"
                          id="Form-Title"
                        />{" "}
                      </td>
                      <td>
                        <textarea
                          className="UrbanDescription"
                          type="text"
                          name="misce-Des"
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
              onClick={() => setAdminToggle3(!AdminToggle3)}
            >
              {AdminToggle3 ? but[1] : but[0]}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
