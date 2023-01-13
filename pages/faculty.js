import React from "react";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const faculty = () => {
  return (
    <div className="my-20">
      <h2 className="text-center mb-6 text-teal-700 text-3xl font-bold italic font-serif">
        Faculties
      </h2>
      <Swiper
        slidesPerView={5}
        // centeredSlides={true}
        // spaceBetween={10}
        // loop={true}
        // loopFillGroupWithBlank={false}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-125 ease-in duration-500">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-xl font-semibold">
                Faculty of Business Administration
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-125 ease-in duration-500">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8SGVhbHRoJTIwU2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-xl font-semibold">
                Faculty of Allied Health Science
              </h2>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-125 ease-in duration-500">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-xl font-semibold">
                Faculty of Law
              </h2>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl h-full hover:scale-125 ease-in duration-500">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1638353399113-ffd0c643c0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-xl font-semibold">
                Faculty of Arts
              </h2>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl mb-6 hover:scale-125 ease-in duration-500">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-xl font-semibold">
                Faculty of Engineering
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default faculty;
