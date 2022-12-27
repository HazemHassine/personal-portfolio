import React from "react";
import ListItem from "./ListItem";
import "./LinkList.css";
function LinkList() {
  return (
    <div className="linkList">
      <ListItem
        img_src="https://icons.getbootstrap.com/assets/icons/geo-alt-fill.svg"
        value="Monastir, Tunisia"
        clickable="false"
      />
      <ListItem
        img_src="https://icons.getbootstrap.com/assets/icons/github.svg"
        value="/HazemHassine"
        clickable="true"
        url="https://www.github.com/HazemHassine"
      />
      <ListItem
        img_src="https://icons.getbootstrap.com/assets/icons/envelope-at.svg"
        value="Send me an email"
        clickable="true"
        url="mailto:hazemhassine.edu@gmail.com"
        id="mail"
      />
    </div>
  );
}

export default LinkList;
