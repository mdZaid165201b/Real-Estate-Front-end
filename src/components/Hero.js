import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[100%] mx-auto">
      <div className="max-h-[800px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[800px] bg-black/70 flex flex-col justify-center">
          <div className="flex flex-col text-center">
            <div className="">
              <h1 className="px-4 text-3xl mt-10 sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                The <span className="text-red-700 ">Best</span>
              </h1>
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                {" "}
                <span className="text-red-700">Real Estate</span> Marketplace
              </h1>
            </div>
            <div className="hidden sm:flex justify-center text-center w-full">
              <p className="w-[50%] sm:text-2xl mt-10 font-extralight flex justify-center align-middle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, eum iste aliquid soluta nemo, sapiente voluptate, at
                cum neque minus quas unde quasi mollitia eaque corrupti
                asperiores in inventore vel?
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-full max-h-[800px] object-cover"
          src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
