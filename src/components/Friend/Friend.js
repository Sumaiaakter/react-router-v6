import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ user }) => {
  const { name, id, email, username } = user;

  const navigate = useNavigate();

  const showFrienDetails = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div className="justify-center items-center m-auto">
      <h2>{name}</h2>
      <p>{email}</p>
      <Link to={"/friend/" + id}>Detail</Link>
      <br />
      <button onClick={showFrienDetails}>
        {username} :{id}
      </button>
    </div>
  );
};

export default Friend;
