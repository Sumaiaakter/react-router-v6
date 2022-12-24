import React from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { detail } = useParams();
  return (
    <div>
      <p> country detail for: {detail}</p>
    </div>
  );
};

export default CountryDetail;
