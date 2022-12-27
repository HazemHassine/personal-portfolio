import React, { useState } from "react";
import ContactHeader from "./ContactHeader";
import FormBox from "./FormBox";
import send from "./send";
import "./ContactForm.css";
function ContactForm() {
  let colors = ["#2EC1AC", "#120078", "#FA1E0E", "#F37121"];
  for (let i = 0; i < colors.length - 1; i++) {
    colors[i] += ",";
  }
  let color = "linear-gradient(to right,";
  colors.forEach((element) => {
    color += element;
  });
  color += ")";
  const [height, setHeight] = useState("1px");
  return (
    <div className="ContactForm">
      <div className="FormContainer">
        <ContactHeader className="header"></ContactHeader>
        <FormBox></FormBox>
      </div>
      <div className="content">
        <label>Content</label>
        <textarea
          className="input"
          type="textarea"
          rows="5"
          maxLength="1500"
          onFocus={() => setHeight("3px")}
          onBlur={() => setHeight("1px")}
        ></textarea>
        <div
          style={{ height: height, backgroundImage: color, width: "56rem" }}
        ></div>
        <div
          className="SendContainer"
          style={{
            width: "56rem",
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          <div
            className="send"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "5rem",
              padding: "0.5rem 2rem 0.5rem 2rem",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={send()}
          >
            Send
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
