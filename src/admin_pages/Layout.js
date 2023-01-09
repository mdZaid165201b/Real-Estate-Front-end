import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar1";

const Layout = () => {
  return window.localStorage.getItem("token") ? (
    <div className=" text-gray-100 flex flex-row h-screen w-screen overflow-hidden">
      <div className="bg-[#262626]">{<Sidebar />}</div>
      <div className="p-4 w-screen">
        <div>{<Outlet />}</div>
      </div>
    </div>
  ) : <Navigate to="../admin/login" />
};

export default Layout;
