import React, { useState } from "react";
import { FaLinkedin, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const activeLink =
    "border border-red-900 border-t-0 border-l-0 border-r-0  border-b-1  text-black";
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/70">
      <div className="hidden sm:flex px-4">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeLink : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : undefined)}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? activeLink : undefined)}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeLink : undefined)}
        >
          Contact
        </NavLink>

        <div className="flex justify-between">
          <FaLinkedin className="mx-4" />
        </div>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <div className="h-full w-full text-center pt-12">
          <NavLink to="/home" className="text-2xl py-8 ">
            Home
          </NavLink>

          <NavLink to="/about" className="text-2xl py-8">
            About
          </NavLink>

          <NavLink to="/projects" className="text-2xl py-8">
            Projects
          </NavLink>

          <NavLink to="/contact" className="text-2xl py-8">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
