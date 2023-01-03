import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#111211] shadow-xl border-t-2   md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-700 border-b-2 border-red-700 italic">
            Lahore <span className="text-red-700 font-bold">Estate</span>
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              home
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Properties
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <span className="block text-sm text-gray-500 sm:text-center sm:text-[16px] dark:text-gray-400">
        © 2023{" "}
        <a href="#" className="hover:underline italic">
          Lahore Estate
        </a>
        . All Rights Reserved. Developed by: MD-Zaid
      </span>
    </footer>
  );
};

export default Footer;
