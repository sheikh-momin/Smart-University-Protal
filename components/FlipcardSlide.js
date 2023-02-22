import React from "react";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const FlipcardSlide= () => {
  return (
    <div className="my-20">
      <h2 className="text-center mb-6 text-teal-700 text-3xl font-bold italic font-serif">
        Our Alumni
      </h2>
      <Swiper
        slidesPerView={5}
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
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Emon Shaik</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Emon Shaik</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>{" "}
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Emon Shaik</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>{" "}
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Emon Shaik</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>{" "}
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Emon Shaik</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FlipcardSlide;
