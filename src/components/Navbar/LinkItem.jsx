import React from "react";
import "./LinkItem.css";
function LinkItem(props) {
  return (
    <a href={props.to} id="link">
      {props.name}
    </a>
  );
}

export default LinkItem;
