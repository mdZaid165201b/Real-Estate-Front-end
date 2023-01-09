import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute">
      
      <div className="hidden sm:flex flex-col w-60 overflow-hidden">
        <div className="hidden sm:block">
          <div className="p-3">
            <div className="w-full text-lg font-medium sm:text-3xl mt-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-400 inline-block text-transparent bg-clip-text">
                Dashboard
              </span>
            </div>
          </div>
          <hr className="m-1" />
          <Link to="properties">
            <div className="w-full text-lg sm:text-md font-medium tracking-wide mt-6 cursor-pointer">
              <div className="bg-gradient-to-r from-red-900 via-red-800 to-pink-700 ease-in-out duration-150 text-white mx-2 p-2 rounded-md">
                Properties
              </div>
            </div>
          </Link>
          <Link to="">
            <div className="w-full text-lg sm:text-md font-medium tracking-wide mt-6 cursor-pointer">
              <div className="bg-red-700 hover:bg-red-800 ease-in-out duration-150 text-white mx-2 p-2 rounded-md">
                Categories
              </div>
            </div>
          </Link>
          <Link to="add-category">
            <div className="w-full text-lg sm:text-md font-medium tracking-wide mt-6 cursor-pointer">
              <div className="bg-red-700 hover:bg-red-800 ease-in-out duration-150 text-white mx-2 p-2 rounded-md">
                Add Category
              </div>
            </div>
          </Link>
          <Link to="add-property">
            <div className="w-full text-lg sm:text-md font-medium tracking-wide mt-6 cursor-pointer">
              <div className="bg-red-700 hover:bg-red-800 ease-in-out duration-150 text-white mx-2 p-2 rounded-md">
                Add Property
              </div>
            </div>
          </Link>
          <Link to="">
            <div className="w-full text-lg sm:text-md font-medium tracking-wide mt-6 cursor-pointer">
              <div className="bg-red-700 hover:bg-red-800 ease-in-out duration-150 text-white mx-2 p-2 rounded-md">
                Logout
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
