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
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/318499165_3315035642146469_7309846732644405955_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=meAKGIu9yr8AX_CRESo&tn=xjn1aZJk8AT-qZ3I&_nc_ht=scontent.fdac99-1.fna&oh=00_AfD6jEidxO-5Tq7NcxGplU-cyfYoT0UWB2MCeiFMu97G8Q&oe=63FB1D9B'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Saikat Ahmne</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>
                        <p className='text-xl font-bold'>Bj it company</p>




                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/300650394_635588418187870_5443473064683858793_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=5SApcvMJurUAX_4XOhh&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCOZdGBhf90SgzlJX653qBr3sPunwWhzACl8xROF85eyw&oe=63FBD55C'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Samiul Basir</h1>
                        <p className='text-xl font-bold'>Full Stack Enginner</p>
                        <p className='text-xl font-bold'>Tiger It</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>{" "}
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/215314266_1540655459608607_4893324559613698104_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TTbkFcQUZYkAX8Vvyjl&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCprAg0xOr8cF8pmtEmf2g4kyQLdw2LRyKwlDGmhxN0cQ&oe=63FAD89A'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Nisar khan </h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>
                        <p className='text-xl font-bold'>Kotbari Ltd</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>{" "}
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/276292324_1906856759514954_3796454921700511348_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kqZDCfIfCeEAX9OWjWE&_nc_ht=scontent.fdac99-1.fna&oh=00_AfDsMTMpmTK9yO82Q2x6munAO9mqglW-DhZTxezTCZawGg&oe=63FC34D0'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Jubayer</h1>
                        <p className='text-xl font-bold'>Frontend Enginner</p>
                        <p className='text-xl font-bold'>Bismillah It</p>



                        </div> 

                    </div>

                </div>

            </div>

        </SwiperSlide>{" "}
        <SwiperSlide>
        <div className='group h-96 w-72 [perspective:1000px]'>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)] ">
                   <div className='absolute inset-0'>
                    <img className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' src='https://scontent.fdac99-1.fna.fbcdn.net/v/t1.18169-9/20992567_1840415402939209_5731702660639707862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uG-3UNlfeO0AX8ZSsgn&_nc_ht=scontent.fdac99-1.fna&oh=00_AfDQLCBG0zOxD2UnaHCbgh_OkQ7JDMBxHT70RrKNcI8oDQ&oe=641DE19E'></img>

                    </div> 
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                       <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Emon Shaik</h1>
                        <p className='text-xl font-bold'>Senior Enginner</p>
                        <p className='text-xl font-bold'>Comilla It hub</p>



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
