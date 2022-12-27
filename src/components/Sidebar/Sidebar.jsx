import React from "react";
import "./Sidebar.css";
import ProfilePic from "./ProfilePic";
import LinkList from "./LinkList";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProfilePic src="https://avatars.githubusercontent.com/u/70240216?v=4" />
      <code
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          margin: "0.5rem 0 0 0",
        }}
      >
        Hazem Hassine
      </code>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          opacity: 0.6,
        }}
      >
        <p style={{ margin: 0 }}>3rd year computer Science Student</p>
        <a
          href="  http://www.isimm.rnu.tn/public/"
          style={{ color: "#000", textDecoration: "none" }}
          target="_blank"
        >
          @ISIMM
        </a>
      </div>
      <LinkList />
    </div>
  );
}
