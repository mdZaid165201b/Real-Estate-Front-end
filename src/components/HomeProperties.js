import React, { useState, useEffect } from "react";
import { BsImageFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import axios from "axios";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const HomeProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const data = await axios.get(
        "http://localhost:8000/api/admin/getRandomProperties"
      );
      setProperties(data.data.data);
      console.log(properties[0]);
    }
    fetchCategories();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl  font-medium title-font text-red-700 mb-4 border-red-700 inline-flex border-b-2 rounded-t-sm">
            Properties
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200">
            We specialize in finding the affordable Real Estate deals from major
            towns such as Bahria Town, Muslim Town, Johar Town etc...
          </p>
          <div className="flex mt-6 justify-center"></div>
        </div>

        <Swiper
          slidesPerView={4}
          grid={{
            rows: 1,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          spaceBetween={40}
          // pagination={{
          //   clickable: false,
          // }}
          modules={[Autoplay, Grid, Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 h-full sm:grid-cols-3 gap-6 w-auto sm:h-[700px]">
            <div className="flex">
              {properties.map((element, index) => (
                <SwiperSlide>
                  <Link to={`property-view/${element._id}`}>
                    <div className="relative overflow-hidden rounded-lg shadow-md shadow-gray-600 cursor-pointer grid content-center bg-gray-700 hover:bg-gray-800">
                      <div className="h-[200px]">
                        <img
                          className="object-cover mix-blend-overlay"
                          src={element.coverImage.url}
                          alt=""
                          srcset=""
                        />
                      </div>
                      {/* <div className="px-6 py-4 flex flex-row flex-auto z-20">
                      <h4 className="mb-3 text-xl font-bold tracking-wide text-white text-center">
                        <BsImageFill />
                      </h4>
                      <p className="leading-normal text-gray-300 text-center font-medium ml-3 text-[15px]">
                        20
                      </p>
                    </div> */}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeProperties;
