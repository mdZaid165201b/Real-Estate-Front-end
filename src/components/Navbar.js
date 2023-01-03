import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaBars } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="w-full min-h-[70px] flex justify-between items-center z-10 text-white bg-[#111211] shadow-md shadow-gray-800 fixed">
      {/* <BsFillFilterSquareFill className="sm:hidden text-gray-800 text-2xl ml-4" /> */}
      <ul className="hidden sm:flex px-4">
        <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
          {/* <a href="#gallery">Properties</a> */}
          <Link to="/properties">Properties</Link>
        </li>
        <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
          {/* <a href="#deals">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li className="ml-8 text-lg font-medium hover:text-red-700 hover:border-b hover:border-red-700 duration-200">
          {/* <a href="#contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to='/'>
        <div className="text-lg text-center flex pl-4 sm:ml-[250px]  sm:text-3xl  cursor-pointer">
          <span className="text-red-700 border-b-2 border-red-700 italic">
            Lahore
          </span>
          <span className="text-red-700 font-bold border-b-2 border-red-700 italic">
            {" "}
            Estate
          </span>
        </div>
      </Link>
      <div className="hidden sm:flex justify-between pl-[300px]">
        <FaFacebookF className="mx-4 text-[20px] cursor-pointer hover:text-[#4267B2]" />
        <FaTwitter className="mx-4 text-[20px] cursor-pointer hover:text-[#1DA1F2]" />
        <IoLogoWhatsapp className="mx-4 cursor-pointer text-[20px] hover:text-[#25D366]" />
      </div>
      {/* Hamburger Icon */}
      <div className="flex">
        <div onClick={handleNav} className="sm:hidden z-10 ml-3">
          <FaBars size={20} className="mr-4 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-[100vh] bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <Link to="/">Home</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/about">About</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
