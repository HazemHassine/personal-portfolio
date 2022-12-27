import React from "react";
import "./ProfilePic.css";
function ProfilePic(props) {
  return (
    <div
      style={{
        borderRadius: "10000px",
        border: "2px black solid",
        backgroundColor: "linear-gradient(#e66465, #9198e5)",
        // backgroundColor: "linear-gradient(#24DAFF, #000)",
        height: "fit-content",
        padding: 3,
        display: "flex",
      }}
    >
      <img id="img" src={props.src} alt="profile pic" />
    </div>
  );
}

export default ProfilePic;
