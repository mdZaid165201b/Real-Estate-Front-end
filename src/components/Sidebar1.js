import React from "react";



const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  setCategoryId,
}) => {
  const utilisSideBar = (element) => {
    setSelectedCategory(element.name);
    setCategoryId(element._id);
  };

  return (
    <div className="relative">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
