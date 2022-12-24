import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div className="m-16">
      <p>post details of id: {postId}</p>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostDetail;
