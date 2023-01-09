import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";
import Navbar from '../components/Navbar';

const Property = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = window.location.pathname.split("/");
    let id = "";
    if(window.location.pathname.includes("properties")){
       id = url[3];
    }
    else{id=url[2]}
    const fetchProperty = async () => {
      const data = await axios.get(
        `http://localhost:8000/api/admin/getProperty/${id}`
      );
      setData(data.data.data.images);
    };
    fetchProperty();
  }, []);
  return (
    <>
    <Navbar />
      <div className="absolute top-[10%] w-full h-screen z-0">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="h-screen mySwiper sm:h-[750px]"
        >
          {data.map((element, index) => (
            <SwiperSlide key={element._id}>
              <div className="w-screen h-screen scrollbar-hide">
                <img
                  src={element.url}
                  alt=""
                  srcset=""
                  className="w-screen sm:h-screen h-screen object-cover sm:object-contain mix-blend-overlay rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
