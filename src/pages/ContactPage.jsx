import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/Navbar/Navbar";
function ContactPage() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar current="Contact Page"></Navbar>
      <ContactForm></ContactForm>
    </div>
  );
}

export default ContactPage;
