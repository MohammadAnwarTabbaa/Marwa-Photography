import React, { useState } from "react";
import { motion } from "framer-motion";
const image = (props) => {
  return (
    <div className="image-grid">
      {props.images.map((image) => (
        <motion.div className="im" layout onClick={props.select} key={image.id}>
          {
            <motion.img
              className="img"
              src={process.env.PUBLIC_URL + image.src}
              data="how are you"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              id={image.id}
              {...props}
            />
          }
        </motion.div>
      ))}
    </div>
  );
};
export default image;
