import React from "react";
// import HeaderItem from "../HeaderItem/HeaderItem.js";
import "./PostDetailBodyListItem.css";

// Sets the layout for the header container and maps over headerSection to display all the elements in the header
function PostDetailBodyListItem({type, value}) {
    return (
        <li className="miscellaneousTitle">
            {type}
            <div className="miscellaneousContent">{value}</div>
        </li>
    );
}


export default PostDetailBodyListItem;
        