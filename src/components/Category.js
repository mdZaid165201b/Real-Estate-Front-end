import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const data = await axios.get(
        "http://localhost:8000/api/admin/getRandomCategories"
      );
      setCategories(data.data.data);
    }
    fetchCategories();
  }, []);

  const categoryColor = [
    {
      from: "from-cyan-600",
      via: "via-gray-800",
      to: "to-stone-600",
    },
    {
      from: "from-pink-900",
      via: "via-red-900",
      to: "to-red-800",
    },
    {
      from: "from-indigo-900",
      via: "via-purple-900",
      to: "to-orange-900",
    },
  ];
  // console.log(categories);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl  font-medium title-font text-red-700 mb-4 border-red-700 inline-flex border-b-2 rounded-t-sm">
            Places
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200">
            We specialize in finding the affordable Real Estate deals from major
            towns such as Bahria Town, Muslim Town, Johar Town etc...
          </p>
          <div className="flex mt-6 justify-center"></div>
        </div>

        <div className="grid grid-cols-1 h-full sm:grid-cols-3 gap-6 w-auto sm:h-[150px]">
          {categories.map((element, index) => (
            <div
              className={`relative overflow-hidden rounded-lg shadow-md shadow-gray-800 cursor-pointer grid content-center bg-gradient-to-r  ${categoryColor[index].from} ${categoryColor[index].via} ${categoryColor[index].to} hover:scale-105 hover:-translate-y-6 duration-300`}
              key={element._id}
            >
              <div className="px-6 py-4 flex flex-col flex-auto">
                <h4 className="mb-3 text-xl font-bold tracking-wide text-white text-center">
                  {element.name}
                </h4>
                {/* <p className="leading-normal text-gray-300 text-center text-[15px]">
              Total Properties: 30
            </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
