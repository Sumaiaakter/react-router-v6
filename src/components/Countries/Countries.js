import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>This is countries {countries.length}</h1>
      <ul>
        {countries.map((country) => (
          <li className="m-4">
            {" "}
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
