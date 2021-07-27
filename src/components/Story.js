import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";
function Story({ title, storyImg, imgSrc }) {
  return (
    <div style={{ backgroundImage: `url( ${imgSrc})` }} className="story">
      <Avatar src={storyImg} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
