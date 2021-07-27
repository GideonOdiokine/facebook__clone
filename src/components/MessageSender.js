import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary } from "@material-ui/icons";
import VideocamIcon from "@material-ui/icons/Videocam";
import React, { useState } from "react";
import "./MessageSender.css";

import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import db from "./firebase";
import firebase from "firebase/app";

function MessageSender() {
  const user = useSelector(selectUserName);
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      profilepic: user.photoURL,
      image: imgUrl,
    });
    setInput("");
    setImgUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} alt={user.displayName} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind ${user.displayName} ?  `}
            className="messageSender__input"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feelings/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
