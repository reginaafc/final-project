import React, { useState, useEffect } from "react";
// import { DatePicker } from 'antd';
// import asd from '../../assets/projectImg_mockup.jpg';
import asd from "../../assets/1.jpg";
import "./postDetail.css";

import PostDetailHeader from "../../components/PostDetailHeader";
import PostDetailBody from "../../components/PostDetailBody";
import PostDetailProgressBar from "../../components/PostDetailProgressBar";

import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../../utils/queries";

export default function Details() {
  let { id } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: id },
  });
  const postData = data?.singlePost || {};

  const ulProps = [
    {
      type: "Author",
      value: "Placeholder Name",
      // value: postData.user.username,
    },
    {
      type: "Location",
      value: postData.location,
    },
    {
      type: "Donation Destiny",
      value: postData.fundraise_destination,
    },
    {
      type: "Post Expires On :",
      value: postData.expiration_date,
    },
    {
      type: "CONTACT ME ABOUT THIS PROJECT",
      value: "PlaceholderEmail@email.com",
      // value: postData.user.email,
    },
  ];

  // NEEDS CURRENT DONATIONS TO WORK
  /*
  const percentage = Math.round(
    (postDetails.currentDonations / postDetails.donationAsked) * 100
  );
  */
  const percentage = 20;

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log("postData:", postData);
  console.log("data:", data);
  console.log("id:", id);

  return (
    <div className="postDetailContainer">
      <div className="postDetail">
        <div
          className="postDetailImage"
          style={{
            backgroundImage: `url(${asd})`,
          }}
        ></div>
        <PostDetailHeader
          projectName={postData.project_name}
          date={postData.publication_date}
        />
        
        <PostDetailBody
          description={postData.description}
          results={postData.results}
          ulProps={ulProps}
          // email={postDetails.userEmail}
        />
   
        <div className="collageSeparator"></div>
        <a href="/payment" className="text-white m-8 p-3 rounded-full bg-blue-900">Donate</a>
        <PostDetailProgressBar percentage={percentage} />
      </div>
    </div>
  );
}
