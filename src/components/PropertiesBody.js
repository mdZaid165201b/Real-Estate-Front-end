import React from "react";
import { Link } from "react-router-dom";

const PropertiesBody = ({ properties }) => {
  return (
    <div className="relative">
      <div className="left-[0px] absolute top-[150px] sm:absolute sm:h-[calc(100vh-70px)]  sm:top-[70px] sm:w-[calc(100vw-300px)] sm:left-[270px] overflow-y-auto overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-wrap mx-auto">
            {properties.map((element, index) => (
              <Link to={`property-view/${element._id}`}>
                <div
                  className="w-[350px] h-[240px] m-5 border-2 border-red-900 rounded-lg bg-gray-500 relative hover:bg-gray-700 duration-100"
                  key={element._id}
                >
                  <div>
                    <img
                      src={element.coverImage.url}
                      alt=""
                      className="w-[400px] h-[236px] rounded-md object-cover mix-blend-overlay"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesBody;
