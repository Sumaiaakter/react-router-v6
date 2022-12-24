import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios(url).then((data) => setPosts(data.data));
  }, []);
  return (
    <div>
      <h1>this is post</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}

      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
