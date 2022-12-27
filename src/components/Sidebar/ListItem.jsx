import React from "react";
import "./ListItem.css";
function ListItem(props) {
  if (props.clickable === "true") {
    return (
      <a
        href={props.url}
        target="_blank"
        className="listItem"
        rel="noopener noreferrer"
      >
        <img src={props.img_src} alt={props.img_src} />
        <p>{props.value}</p>
      </a>
    );
  } else {
    return (
      <div className="listItem">
        <img src={props.img_src} alt={props.img_src} />
        <p>{props.value}</p>
      </div>
    );
  }
}

export default ListItem;
