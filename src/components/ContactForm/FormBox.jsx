import React from "react";
import "./ContactForm.css";
import FormInput from "./FormInput";
function FormBox() {
  return (
    <div className="lecontainer">
      <div className="form">
        <FormInput id="Name" label="Name" type="text" />
        <FormInput id="Email" label="Email" type="email" />
        <FormInput id="Subject" label="Subject" type="text" />
      </div>
    </div>
  );
}

export default FormBox;
