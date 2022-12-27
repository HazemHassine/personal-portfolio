import React from "react";
import "./Navbar.css";
import LinkItem from "./LinkItem";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  let colors = ["#2EC1AC", "#120078", "#FA1E0E", "#F37121"];
  for (let i = 0; i < colors.length - 1; i++) {
    colors[i] += ",";
  }
  let color = "linear-gradient(to right,";
  colors.forEach((element) => {
    color += element;
  });
  color = color + ")";
  return (
    <div>
      <div
        className="gradient"
        style={{
          height: "0.8em",
          backgroundImage: color,
        }}
      ></div>
      <div className="container" style={{ backgroundColor: "white" }}>
        <Link className="namePic" to="../home">
          <div className="pic">
            <img
              id="icon"
              src="https://i.pinimg.com/originals/25/11/77/251177ce9eb881994eacac481249e13d.gif"
              style={{ borderRadius: "10px" }}
              alt="logo"
            />
          </div>
          <div id="NamePage">
            <p id="name">Hazem Hassine</p>
            <p id="page">{props.current}</p>
          </div>
        </Link>
        <div className="linkListNav">
          <LinkItem name="Home" to="/home" />
          {/*<LinkItem name="Projects" to="projects" />*/}
          {/*<LinkItem name="Contact me" to="contact" />*/}
          <LinkItem name="CV" to="./cv" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
