import React, { useState } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
// import SidebarOption from "./SidebarOption";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  setCategoryId,
}) => {
  // const sidebarText = [
  //   {
  //     name: "All",
  //     total: 30,
  //   },
  //   {
  //     name: "Township",
  //     total: 40,
  //   },
  //   {
  //     name: "Bahria Town",
  //     total: 50,
  //   },
  //   {
  //     name: "Muslim Town",
  //     total: 10,
  //   },
  // ];
  const utilisSideBar = (element) => {
    setSelectedCategory(element.name);
    setCategoryId(element._id);
  };

  return (
    <div className="relative">
      {/* <BsFillFilterSquareFill  className="sm:hidden text-gray-800 text-2xl left-3 absolute h-[calc(35vh-50px)]"/> */}
      <div className="flex overflow-x-scroll scrollbar-hide sm:block absolute  sm:bg-[#1f201f] sm:h-[calc(100vh-70px)] top-[70px]  sm:w-[250px] sm:overflow-y-auto">
        <div className="">
          <div className="hidden sm:text-gray-300 text-left m-3 tracking-wider text-lg">
            <span className="font-bold">CATEGORIES</span>
          </div>
        </div>
        <hr class="hidden sm:mb-6 h-[3px] bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="flex mt-1 w-screen sm:w-full scroll-smooth sm:flex-col sm:p-3">
          {categories.map((element) => (
            <div
              className={`ml-3 p-1 flex justify-around sm:ml-auto w-full border sm:mb-3 border-red-600 rounded-md sm:p-3 sm:flex sm:justify-between cursor-pointer ${
                element.name === selectedCategory &&
                "bg-gradient-to-r  from-red-700 via-orange-800 to-red-900"
              } hover:bg-red-900`}
              vz
              onClick={() => {
                utilisSideBar(element);
              }}
              key={element._id}
            >
              <span className="text-gray-200">{element.name}</span>
              {/* <span className="text-gray-300">({element.total})</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
