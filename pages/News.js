import React, { useState, useRef, useEffect } from "react";
import vu from "../Assets/vu.jpg";


const News = () => {

  return (
    <section >
    
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div>
            <div>
              <div className="">
                <h4 className="text-3xl text-primary mb-5">News</h4>
              </div>
              <div className=" w-3/4 lg:flex gap-4   ">
               <NewsSlide></NewsSlide>
               
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
