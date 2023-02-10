import React, {useState} from 'react';
import { FaLinkedin, FaBars } from 'react-icons/fa';


const NavBar = () => {
    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    }

    return (
      <div className="fixed w-full min-h-[50px] flex justify-end items-center z-10 text-white bg-gray-700/70 ">
        <ul className="hidden sm:flex px-4 ">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="flex justify-between mr-[5%]">
          <FaLinkedin className="mx-4 cursor-pointer max-sm:hidden" />
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
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <a href="/home">Home</a>
            </li>
            <li className="text-2xl py-8">
              <a href="/about">About</a>
            </li>
            <li className="text-2xl py-8">
              <a href="/projects">Projects</a>
            </li>
            <li className="text-2xl py-8">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar