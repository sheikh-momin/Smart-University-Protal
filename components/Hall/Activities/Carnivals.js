import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const Carnivals = () => {
  return (
    <div>
      <div className="bg-slate-200 p-5 mb-2">
        <h2 className="text-xl text black">Mid-Autumn Carnivals</h2>
      </div>
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
                src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/IMG_9173-1024x683-1-1024x683.jpg"
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
                src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/IMG_9437-1024x683-1-1024x683.jpg"
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
                src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/IMG_9356-1024x683-1-1024x683.jpg"
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
                src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/03/IMG_9422-1024x683-1-1024x683.jpg"
                className="aspect-video w-full"
              />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>

    
    </div>
  );
};

export default Carnivals;
