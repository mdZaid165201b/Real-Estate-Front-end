import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOtherHouses } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { MdAddBusiness } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import {useLocation} from 'react-router-dom';


const Sidebar1 = () => {
  const menus = [
    { name: "Properties", link: "properties", icon: MdOtherHouses },
    { name: "Add Property", link: "add-property", icon: MdAddBusiness },
    { name: "Categories", link: "categories", icon: BiCategoryAlt },
    {
      name: "Add Category",
      link: "add-category",
      icon: TbReportAnalytics,
    },
    {
      name: "Whatsapp Number",
      link: "update-whatsapp",
      icon: IoLogoWhatsapp,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/admin/login", { replace: true });
  };

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-4">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`group flex items-center text-sm  gap-4 font-medium p-2 ${location.pathname.split("/")[3] === menu.link ? "bg-gray-800" : ""} hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${0.5 + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}

          <div
            className="flex ml-2 cursor-pointer text-red-800"
            onClick={logout}
          >
            <AiOutlineLogout size={26} className="mr-3" />
            <h2
              style={{
                transitionDelay: `${0.5 + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden ml-4"
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Logout
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="m-3 text-xl text-gray-900 font-semibold w-full">
        REACT TAILWIND
      </div> */}
    </section>
  );
};

export default Sidebar1;
