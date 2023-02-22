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

const News = () => {
  return (
 
     <div className='grid lg:grid-cols-3'>
     
          <div className=" lg:h-48 lg:w-52 sm:w-11/12 bg-base-100 shadow-xl lg:mr-1">
            <figure className="">
              <img
                src="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/graduation_1.jpg"
                alt="University"
                className="  border-t-emerald-800"
              />
            </figure>
            <div className=" items-center text-center">
              <h2 className=""> convocation</h2>

              <div className="border-t items-center justify-center w-full">
                <h3>January ,11 2023</h3>
              </div>
            </div>
          </div>
     

      
          <div className=" lg:h-48 lg:w-52 sm:w-11/12 bg-base-100 shadow-xl lg:mr-1">
            <figure className="">
              <img
                src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="University"
                className="  border-t-emerald-800"
              />
            </figure>
            <div className=" items-center text-center">
              <h2 className="">Campus Life</h2>

              <div className="border-t items-center justify-center w-full">
                <h3>January ,11 2023</h3>
              </div>
            </div>
          </div>
     

       
          <div className=" lg:h-48 lg:w-52 sm:w-11/12 bg-base-100 shadow-xl lg:mr-1">
            <figure className="">
              <img
                src="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/graduation_1.jpg"
                alt="University"
                className="  border-t-emerald-800"
              />
            </figure>
            <div className=" items-center text-center">
              <h2 className=""> convocation</h2>

              <div className="border-t items-center justify-center w-full">
                <h3>January ,11 2023</h3>
              </div>
            </div>
          </div>
       

    
          
     </div>
       
        
     
    
  );
};

export default News;
