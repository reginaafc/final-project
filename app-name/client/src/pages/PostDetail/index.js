import React from "react";
// import { DatePicker } from 'antd';
// import asd from '../../assets/projectImg_mockup.jpg';
import asd from "../../assets/1.jpg";
import "./postDetail.css";

import PostDetailHeader from "../../components/PostDetailHeader";
import PostDetailBody from "../../components/PostDetailBody";
import PostDetailProgressBar from "../../components/PostDetailProgressBar";

export default function Details() {
  const mockData = {
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

  const ulProps = [
    {
      type: "Author",
      value: mockData.userName,
      key: 1,
    },
    {
      type: "Location",
      value: mockData.location,
      key: 2,
    },
    {
      type: "Donation Destiny",
      value: mockData.donationDestiny,
      key: 3,
    },
    {
      type: "Post Expires On :",
      value: mockData.expireDate,
      key: 4,
    },
  ];

  const percentage = Math.round(
    (mockData.currentDonations / mockData.donationAsked) * 100
  );

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
          projectName={mockData.projectName}
          date={mockData.date}
        />
        <PostDetailBody
          description={mockData.description}
          results={mockData.results}
          ulProps={ulProps}
          email={mockData.email}
        />
        <div className="collageSeparator"></div>
        <PostDetailProgressBar percentage={percentage}/>
      </div>
    </div>
  );
}
