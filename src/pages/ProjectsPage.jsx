import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainContainer from "../components/MainContainer/MainContainer";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
function ProjectsPage() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008792, #00bf70, #afeb12)",
      }}
    >
      <div>
        <Navbar current="My Projects"></Navbar>
        <ProjectsContainer></ProjectsContainer>
      </div>
    </div>
  );
}

export default ProjectsPage;
