import React from "react";
import Repo from "./Repo";
function ProjectsContainer() {
  let repos = [
    {
      name: "Diabetes_prediction_api",
      link: "https://github.com/HazemHassine/Diabetes_prediction_api",
      langs: ["Python"],
    },
    {
      name: "personalportfolio",
      link: "https://github.com/HazemHassine/personalportfolio",
      langs: ["javascript"],
    },
    {
      name: "ArabicLetterClassificationWithCNN",
      link: "https://github.com/HazemHassine/ArabicLetterClassificationWithCNN",
      langs: ["Python", "Jupyter"],
    },
    {
      name: "Sentiment_analysis_streamlit",
      link: "https://github.com/HazemHassine/Sentiment_analysis_streamlit",
      langs: ["Python", "Heroku"],
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "6rem",
      }}
    >
      <div
        className="projectscontainer"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "1rem",
          marginBottom: "5rem",
        }}
      >
        {repos.map((item, index) => (
          <Repo name={item.name} link={item.link} langs={item.langs} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
