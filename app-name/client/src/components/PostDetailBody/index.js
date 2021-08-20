import React from "react";
// import HeaderItem from "../HeaderItem/HeaderItem.js";
import "./PostDetailBody.css";
import PostDetailBodyListItem from "../PostDetailBodyListItem";
// Sets the layout for the header container and maps over headerSection to display all the elements in the header
function postDetailBody({ description, results, ulProps, email }) {
  return (
    <div className="postDetailBodyContainer">
      <div className="postDetailBodyLhs">
        <div className="postDetailDescription">
          {description}
          <br></br>
          <br></br>
          Our achievements so far:
          <br></br>
          {results}
        </div>
      </div>
      <div className="postDetailBodyRhs">
        <div className="miscellaneous">
          <ul>
            {ulProps.map((ulProp) => (
              <PostDetailBodyListItem
                type={ulProp.type}
                value={ulProp.value}
                key={ulProp.key}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default postDetailBody;
