import React from "react";
import "./PostList.css";
import PostListItem from "../../components/PostListItem";
import bgImage from "../../assets/postListImg.jpg";
import titleBg from "../../assets/titleBG.jpg";

import { useQuery } from "@apollo/client";
import { QUERY_USER_POSTS } from "../../utils/queries";

function PostList() {
  const { loading, error, data } = useQuery(QUERY_USER_POSTS);
  const postsData = data?.singleUser || {};

  // const cardsData = [
  //   {
  //     projectName: "Mexican Sea Turtle Foundation",
  //     image: bgImage,
  //     date: "05/14/2021",
  //     projectId: 1,
  //     key: 1,
  //   },
  //   {
  //     projectName: "'My first Macbook",
  //     image: bgImage,
  //     date: "01/31/2021",
  //     projectId: 2,
  //     key: 2,
  //   },
  //   {
  //     projectName: "Summer Scholarship in foreign country",
  //     image: bgImage,
  //     date: "08/14/2021",
  //     projectId: 3,
  //     key: 3,
  //   },
  //   {
  //     projectName: "Breakfast Club Funding",
  //     image: bgImage,
  //     date: "09/01/2021",
  //     projectId: 4,
  //     key: 4,
  //   },
  //   {
  //     projectName: "Travel to Mahahual",
  //     image: bgImage,
  //     date: "08/08/2021",
  //     projectId: 5,
  //     key: 5,
  //   },
  // ];

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) return `Error! ${error.message}`;

  return (
    <div className="postListContainer">
      <div
        className="postListTitle"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        My projects
      </div>
      <div className="postListCardContainer">
        {postsData.map((postData) => (
          <PostListItem
            projectName={postData.project_name}
            image={bgImage}
            date={postData.publication_date}
            projectId={postData._id}
            key={postData._id}
          />
        ))}
      </div>
      <a
        href="/createpost"
        className="fixed z-50 float-right w-16 h-16 pt-1 pl-3 ml-8 text-5xl text-white bg-red-800 rounded-full mt-96"
      >
        {" "}
        +{" "}
      </a>
    </div>
  );
}

export default PostList;
