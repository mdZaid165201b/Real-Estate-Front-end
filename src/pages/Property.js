import React from "react";
import { BsImageFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Property = () => {
  return (
    <>
      <div className="relative">
        <div className="left-[0px] absolute top-[150px] sm:absolute sm:h-[calc(100vh-70px)]  sm:top-[70px] sm:w-full sm:left-[0px] overflow-y-auto overflow-hidden">
          
        <div className="w-[1000px] h-[1000px]">
                <Carousel className="w-screen">
                  <div className="w-[50%] h-[50%]">
                    <img src="https://cdn.pixabay.com/photo/2017/05/10/03/44/lahore-2299807_960_720.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div className="w-[1000px] h-[500px]">
                    <img src="https://images.unsplash.com/photo-1672671225678-cb2588a961f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div className="w-[1000px] h-[1000px]">
                    <img src="https://images.unsplash.com/photo-1672651158520-e2ee88dfd552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    {/* <p className="legend">Legend 3</p> */}
                  </div>
                </Carousel>
              </div>
            {/* <div className="flex flex-wrap justify-center">
              
              <div className="w-[350px] h-[240px] m-5 border-2 border-gray-700 rounded-lg bg-gray-600 relative hover:bg-gray-700 duration-100">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/10/03/44/lahore-2299807_960_720.jpg"
                  alt=""
                  className="w-[400px] h-[236px] rounded-md object-cover mix-blend-overlay"
                />
                <div className="absolute bottom-[25px] flex align-middle px-3">
                  <h4 className="mb-3 text-xl font-bold tracking-wide text-gray-200 text-center">
                    <BsImageFill />
                  </h4>
                  <p className="leading-normal text-gray-300 text-center font-medium ml-3 text-[15px]">
                    20
                  </p>
                </div>
              </div>
            </div>
            </div> */}
          
        </div>
      </div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Category /> */}
      {/* <HomeProperties /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Property;
