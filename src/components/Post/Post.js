import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { body, title, id } = post;
  return (
    <div className="ml-6">
      {/* <p>{body}</p> */}
      <Link to={`/posts/${id}`}>Id: {id}</Link>
      <p>{title}</p>
    </div>
  );
};

export default Post;
