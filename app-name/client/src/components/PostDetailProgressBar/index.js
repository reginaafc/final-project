import React from "react";

import "./PostDetailProgressBar.css";
import styled, { keyframes } from "styled-components";
import { FaKissWinkHeart } from "react-icons/fa";
// import { FaHandHoldingHeart } from 'react-icons/fa';

// Sets the layout for the header container and maps over headerSection to display all the elements in the header

// const InnerBar = styled.div`
//   height: 100%;
//   background-color: #44c59f;
//   border-radius: 10px;
//   position: relative;

//   animation: ${(props) => props.loadBar} 3s normal forwards;
//   width: 0;
// `;

function PostDetailProgressBar({ percentage }) {
  const loadBar = keyframes`
0% { width: 0; }
100% { width: ${percentage}%; }
`;

  const InnerBar = styled.div`
    height: 100%;
    background-color: #44c59f;
    border-radius: 10px;
    position: relative;

    animation: ${loadBar} 3s normal forwards;
    width: 0;
  `;

  return (
    <div className="progressBarContainer">
      <div className="progressBarCommentContainer">
        <div className="progressBarComment">
          Goal <FaKissWinkHeart />
        </div>
      </div>
      <div className="outerBarContainer">
        <div className="outerBar">
          <InnerBar props={loadBar}>
            <div className="barPercentagePointer"></div>
            <div className="barTextPercentage">{percentage}%</div>
          </InnerBar>
        </div>
      </div>
    </div>
  );
}

export default PostDetailProgressBar;
