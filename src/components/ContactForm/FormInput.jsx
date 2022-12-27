import React, { useState } from "react";
import "./ContactForm.css";
function FormInput(props) {
  let colors = ["#2EC1AC", "#120078", "#FA1E0E", "#F37121"];
  for (let i = 0; i < colors.length - 1; i++) {
    colors[i] += ",";
  }
  let color = "linear-gradient(to right,";
  colors.forEach((element) => {
    color += element;
  });
  color = color + ")";
  console.log(color);
  const [height, setHeight] = useState("1px");
  return (
    <div className="inpt">
      <label>{props.label}</label>
      <input
        className="input"
        onFocus={() => setHeight("3px")}
        onBlur={() => setHeight("1px")}
        type={props.type}
      ></input>
      <div style={{ height: height, backgroundImage: color }}></div>
    </div>
  );
}

export default FormInput;
