import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    axios(url).then((data) => {
      console.log(data.data);
      setDetails(data.data);
    });
  }, [friendId]);
  return (
    <div>
      <p> friend details id is: {friendId}</p>
      <h1 className="text-xl">Name: {details.name}</h1>
      <h1 className="text-xl">Name: {details.email}</h1>
      <p>Address: {details?.address?.city}</p>
    </div>
  );
};

export default FriendDetails;
