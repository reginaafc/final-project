import React from "react";
// import HeaderItem from "../HeaderItem/HeaderItem.js";
import "./PostDetailHeader.css";

// Sets the layout for the header container and maps over headerSection to display all the elements in the header
function postDetailHeader({ projectName, date }) {
  return (
    <div className="postDetailHeaderContainer">
      <div className="postDetailHeader">
        <div className="postDetailTitle">{projectName}</div>
        <div className="postDateCreated">Created: {date}</div>
      </div>
    </div>
  );
}

export default postDetailHeader;
