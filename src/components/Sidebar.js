import React, { useState } from "react";



const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  
  const sidebarText = [
    {
      name: "All",
      total: 30,
    },
    {
      name: "Township",
      total: 40,
    },
    {
      name: "Bahria Town",
      total: 50,
    },
    {
      name: "Muslim Town",
      total: 10,
    },
  ];
  return (
    <div className="relative">
      <div className="hidden sm:block absolute  sm:bg-slate-800 h-[calc(100vh-70px)] top-[70px]  w-[250px] overflow-y-auto">
        <div className="">
          <div className="text-gray-300 text-left m-3 tracking-wider text-lg">
            <span className="font-bold">CATEGORIES</span>
          </div>
        </div>
        <hr class="mb-6 h-[3px] bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-col p-3">
          {sidebarText.map((element) => (
            <div
              className={` border-2 mb-3 border-gray-800  bg-gray-700 rounded-md p-3 flex justify-between cursor-pointer ${
                element.name === selectedCategory && "bg-red-700"
              } hover:bg-red-800`}
              vz
              onClick={() => setSelectedCategory(element.name)}
            >
              <span className="text-gray-200">{element.name}</span>
              <span className="text-gray-300">({element.total})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
