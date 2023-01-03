import React, {useState} from "react";

const SidebarOption = ({active}) => {
    console.log(active);
    console.log("sidebaroption executed!!!")
    const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className={`w-full border-2 mb-3 border-gray-800 ${
          active ? "bg-red-700" : ""
        }  bg-gray-700 rounded-md p-3 flex justify-between cursor-pointer hover:bg-red-800`}
      >
        <span className="text-gray-200">All</span>
        <span className="text-gray-300">(30)</span>
      </div>
    </div>
  );
};

export default SidebarOption;
