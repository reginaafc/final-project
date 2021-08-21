import React from "react";
// import HeaderItem from "../HeaderItem/HeaderItem.js";
import "./PostDetailHeader.css";
import { Link } from "react-router-dom";

// Sets the layout for the header container and maps over headerSection to display all the elements in the header
function postDetailHeader({ projectName, date }) {
  return (
    <div className="postDetailHeaderContainer">
      <div className="postDetailHeader">
        <div className="postDetailTitle">{projectName}</div>
        <div className="postDateCreated">Created: {date}</div>
      </div>
      <Link to="/payment">
        <button className="button" >Donate</button>
      </Link>
    </div>
  );
}

export default postDetailHeader;
