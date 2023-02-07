import React, { useRef, useState } from "react";
import Carnivals from "./Carnivals"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const Activities = () => {
  return (
    <div>
      <div className="bg-slate-200 p-5 mb-2">
        <h2 className="text-xl text black">Orientation Day</h2>
      </div>
      <div className="mb-8">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 ">
              <figure>
                <img
                  src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/S160-1024x683-1-1024x683.jpg"
                  alt="card image"
                  className="aspect-video w-96"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <figure>
                <img
                  src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/S386-1024x683-1-1024x683.jpg"
                  alt="card image"
                  className=" aspect-video w-96"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <figure>
                <img
                  src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/S007-1024x683-1-1024x683.jpg"
                  alt="card image"
                  className="aspect-video w-96"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <figure>
                <img
                  src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/S192-1024x683-1-1024x683.jpg"
                  alt="card image"
                  className="aspect-video w-full"
                />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Carnivals></Carnivals>
    </div>
  );
};

export default Activities;
