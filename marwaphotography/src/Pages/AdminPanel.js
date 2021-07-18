import React from "react";
import bkg from "../component/Admin/bkg.jpg";
import Admin from "../component/Admin/Admin";
import "../component/Admin/Admin.css";

function AdminPanel() {
  return (
    <div className="adminWrap">
      <div className="allTables">
        <div className="urbanCat"></div>
        <img className="bkg" src={bkg}></img>
        <h2>Urban</h2>
        <Admin />
        <div className="facesCat">
          <h2>Faces and Objects</h2>
          <Admin />
        </div>
        <div className="miscCat">
          <h2>Miscellaneous</h2>
          <Admin />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
