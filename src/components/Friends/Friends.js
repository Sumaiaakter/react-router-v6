import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((data) => {
      setUsers(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      <h1>this is friend</h1>

      {users.map((user) => (
        <Friend key={user.id} user={user}></Friend>
      ))}
    </div>
  );
};

export default Friends;
