import React, { useState, useEffect } from "react";
// import { DatePicker } from 'antd';
// import asd from '../../assets/projectImg_mockup.jpg';
import asd from "../../assets/1.jpg";
import "./postDetail.css";

import PostDetailHeader from "../../components/PostDetailHeader";
import PostDetailBody from "../../components/PostDetailBody";
import PostDetailProgressBar from "../../components/PostDetailProgressBar";

import { useParams } from "react-router-dom";

export default function Details() {
  const [postDetails, setPostDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const getPostInfo = async () => {
      const mockData1 = {
        userName: "Paul Martinez",
        userEmail: "test@test.com",
        projectName: "Mexican Sea Turtle Foundation",
        description:
          "Donate to protect marine turtles from illegal slaughter and to protect nests from illegal poaching. With the main purpouse of preventing extintion",
        motive: "Personal Project",
        date: "05/14/2021",
        location: "Costa Azul, Pijijiapan, Chiapas, México",
        image: "../../assets/projectImg_mockup.jpg",
        donationDestiny:
          "Your donation will be directed to recolect eggs from nests and assure them in a more protected environment.",
        fundraiseAccount: "3074656824",
        results:
          "3 species of sea tutles are protected, 1000 hatchling hatched in our care, 2 missions completed",
        expireDate: "01/01/2022",
        donationAsked: "2000",
        currentDonations: "1200",
      };

      const mockData2 = {
        userName: "Pablito Palito",
        userEmail: "asd@asd.com",
        projectName: "Summer Scholarship in foreign country",
        description:
          "It will provide a grant to selected individuals to work, live, and learn for a 12-week summer period in a foreign country.",
        motive: "Personal Project",
        date: "08/14/2021",
        location: "Headquarters: Guadalajara, Jalisco, México.",
        image: "../../assets/projectImg_mockup.jpg",
        donationDestiny:
          "Your donation will be donated for travel and lounge expenses.",
        fundraiseAccount: "3932449492",
        results:
          "3 consecutive years offering scholarships, 32 teenagers and collage students benefited.",
        expireDate: "31/12/2021",
        donationAsked: "2000",
        currentDonations: "800",
      };
      if (id === "1") {
        setPostDetails(mockData1);
      } else if (id === "2") {
        setPostDetails(mockData2);
      } else {
        setPostDetails("");
      }
    };
    getPostInfo();
  }, [id]);

  const ulProps = [
    {
      type: "Author",
      value: postDetails.userName,
      key: 1,
    },
    {
      type: "Location",
      value: postDetails.location,
      key: 2,
    },
    {
      type: "Donation Destiny",
      value: postDetails.donationDestiny,
      key: 3,
    },
    {
      type: "Post Expires On :",
      value: postDetails.expireDate,
      key: 4,
    },
    {
      type: "CONTACT ME ABOUT THIS PROJECT",
      value: postDetails.userEmail,
      key: 5,
    },
  ];

  const percentage = Math.round(
    (postDetails.currentDonations / postDetails.donationAsked) * 100
  );

  // console.log("post details:", postDetails);
  // console.log("id:", id);

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
          projectName={postDetails.projectName}
          date={postDetails.date}
        />
        
        <PostDetailBody
          description={postDetails.description}
          results={postDetails.results}
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
