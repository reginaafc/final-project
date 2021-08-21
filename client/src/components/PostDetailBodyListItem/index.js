import React from "react";
// import HeaderItem from "../HeaderItem/HeaderItem.js";
import "./PostDetailBodyListItem.css";

// Sets the layout for the header container and maps over headerSection to display all the elements in the header
function PostDetailBodyListItem({ type, value }) {
  let isType;
  let contentToReturn;
  if (type !== "CONTACT ME ABOUT THIS PROJECT") {
    isType = type;
  }
  if (type !== "CONTACT ME ABOUT THIS PROJECT") {
    contentToReturn = <div className="miscellaneousContent">{value}</div>;
  } else {
    contentToReturn = (
      <a href={`mailto:${value}`} className="contactLink">
        {type}
      </a>
    );
  }

  return (
    <li className="miscellaneousTitle">
      {/* {(() => {
        if (type !== "CONTACT ME ABOUT THIS PROJECT")
          return [type, <div className="miscellaneousContent">{value}</div>];
        else
          return [
            <a href={`mailto:${value}`} className="contactLink">
              CONTACT ME ABOUT THIS PROJECT
            </a>,
          ];
      })()} */}
      {isType}
      {contentToReturn}
    </li>
  );
}

export default PostDetailBodyListItem;
