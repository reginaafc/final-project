import React from "react";
import "./PostList.css";
import PostListItem from "../../components/PostListItem";
import bgImage from "../../assets/postListImg.jpg";
import titleBg from "../../assets/titleBG.jpg";

function PostList() {
  const cardsData = [
    {
      projectName: "Mexican Sea Turtle Foundation",
      image: bgImage,
      date: "05/14/2021",
      projectId: 1,
      key: 1,
    },
    {
      projectName: "'My first Macbook",
      image: bgImage,
      date: "01/31/2021",
      projectId: 2,
      key: 2,
    },
    {
      projectName: "Summer Scholarship in foreign country",
      image: bgImage,
      date: "08/14/2021",
      projectId: 3,
      key: 3,
    },
    {
      projectName: "Breakfast Club Funding",
      image: bgImage,
      date: "09/01/2021",
      projectId: 4,
      key: 4,
    },
    {
      projectName: "Travel to Mahahual",
      image: bgImage,
      date: "08/08/2021",
      projectId: 5,
      key: 5,
    },
  ];
  return (
    <div className="postListContainer">
      <div
        className="postListTitle"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        Meet our collaborators
      </div>
      <div className="postListCardContainer">
        {cardsData.map((cardData) => (
          <PostListItem
            projectName={cardData.projectName}
            image={cardData.image}
            date={cardData.date}
            projectId={cardData.projectId}
            key={cardData.key}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
