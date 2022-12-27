import React, { useState } from "react";
import "./projects.css";
function Repo(props) {
  return (
    <div className="repo" style={{ fontWeight: "bold" }}>
      <img
        src="https://icons.getbootstrap.com/assets/icons/github.svg"
        height="40px"
        width="40px"
        style={{ flex: 1 }}
      />
      <div
        className="info"
        style={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
          margin: "0 0 0 1rem",
          gap: "0.5rem",
        }}
      >
        <div className="name">{props.name}</div>
        <div className="link">
          <a
            href={props.link}
            target="_blank"
            style={{ borderBottom: "1px black solid" }}
          >
            Go to project
          </a>
        </div>

        <div
          className="langs"
          style={{
            margin: "0",
            marginBottom: "1rem",
            display: "flex",
            gap: "1rem",
            transform: "translatey(-0.5rem)",
            cursor: "pointer",
            paddingTop: "0.5rem",
          }}
        >
          {props.langs.map((v, i) => {
            console.log(v);
            return (
              <p
                style={{
                  backgroundImage: "linear-gradient(to right,{Math.random}",
                  borderRadius: "1rem",
                  color: "white",
                  padding: "0.1rem 0.6rem 0.1rem 0.6rem",
                }}
              >
                {v}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Repo;
