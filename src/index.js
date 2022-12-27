import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ContactPage from "./pages/ContactPage";
import CvPage from "./pages/CvPage";
// import ProjectsPage from "./pages/ProjectsPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* {<Route path="contact" element={<ContactPage />} />} */}
        <Route path="cv" element={<CvPage />} />
        {/*<Route path="projects" element={<ProjectsPage />} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
