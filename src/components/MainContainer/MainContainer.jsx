import React from "react";
import "./MainContainer.css";
import MainWin from "./../MainWin/MainWin";
import Sidebar from "./../Sidebar/Sidebar";
function MainContainer() {
  return (
    <div className="maincontainer">
      <Sidebar />
      <MainWin />
    </div>
  );
}

export default MainContainer;
