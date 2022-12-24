import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="justify-center bg-indigo-200 mr-6">
        <Link className="mr-6 ml-3" to="/">
          Home
        </Link>
        <Link className="mr-6" to="/friends">
          Friends
        </Link>
        <Link className="mr-6" to={"/posts"}>
          Posts
        </Link>
        <Link className="mr-6" to={"/countries"}>
          Countries
        </Link>
        <Link className="mr-6" to="/about">
          About
        </Link>
        <Link className="mr-6" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
