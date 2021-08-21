import React from "react";
import "./PostList.css";
import PostListItem from "../../components/PostListItem";
import bgImage from "../../assets/postListImg.jpg";
import titleBg from "../../assets/titleBG.jpg";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../../utils/queries";

function PostList() {
  const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
  const postsData = data?.allPosts || {};

  // if we are still waiting the answer from the query, display the loading message
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) return `Error! ${error.message}`;
  // console.log(postsData);

  return (
    <div className="postListContainer">
      <div
        className="postListTitle"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        Meet our collaborators
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

        {/* {cardsData.map((cardData) => (
          <PostListItem
            projectName={cardData.projectName}
            image={cardData.image}
            date={cardData.date}
            projectId={cardData.projectId}
            key={cardData.key}
          />
        ))} */}
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
