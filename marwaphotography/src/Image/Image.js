import React, { useState } from "react";
import { motion } from "framer-motion";
const image = (props) => {
  return (
    <div className="image-grid">
      {props.images.map((image, index) => (
        <motion.div className="im" layout onClick={props.select} key={index}>
          {
            <motion.img
              className="img"
              src={`http://localhost:3000/${props.cat}/${image.src}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              id={image._id}
              {...props}
            />
          }
        </motion.div>
      ))}
    </div>
  );
};
export default image;
