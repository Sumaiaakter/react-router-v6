import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "About", link: "/about" },
  ];
  return (
    <nav className="bg-indigo-500">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`md:flex justify-center md:static bg-indigo-500  w-full  absolute duration-300 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
