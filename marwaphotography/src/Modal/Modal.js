import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Modal.css";
const Modal = (props) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [srcc, setSrc] = useState();
  console.log(props.list);
  function getImage() {
    {
      props.list.map((task) => {
        if (task._id == props.imageId) {
          setTitle(task.title);
          setDescription(task.description);
          setSrc(task.src);
        }
      });
    }
  }

  function HideScrollbar(hidden) {
    var style = document.createElement("style");
    style.innerHTML = `body{overflow-y:${hidden};}`;
    document.head.appendChild(style);
  }

  return (
    <motion.div
      className="backdrop"
      onLoad={() => {
        HideScrollbar("hidden");
        getImage();
      }}
      // onLoad={props.HideScrollbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button type="button" className="close" onClick={props.handleClick}>
        <span aria-hidden="true">×</span>
      </button>
      <motion.img
        className="bigImage"
        src={props.selectedImage}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      />
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};
export default Modal;
