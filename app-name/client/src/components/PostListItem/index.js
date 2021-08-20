import React from "react";
import "./PostListItem.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

function PostListItem({ projectName, image, date, projectId }) {
  const { Meta } = Card;

  return (
    <Link to={{ pathname: `/postdetail/${projectId}` }}>
      <Card
        hoverable
        className="cardElement"
        cover={<img alt="example" src={image} className="cardElementImage" />}
      >
        <Meta title={projectName} description={date} />
      </Card>
    </Link>
  );
}

export default PostListItem;
