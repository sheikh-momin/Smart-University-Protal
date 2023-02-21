import React from "react";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const AlumniCardSlide= () => {
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
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/327828452_900645497862676_1184096148840845348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGViogt26_x02byeEP6NSF-wYzuw1pQVXbBjO7DWlBVdk3i95C1wGzc5_Ws_EhVqfbLXxY5D93iYko8jfAwYfCl&_nc_ohc=PbJ-mGkFKKYAX8dQ7f1&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRt4Cs5fIA4s5JGKNRu20OHbR0YwPUbdAl4eugMQvEKUg&oe=641703A2" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Afana Nishat</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/331234198_588621963120456_7258472469021157050_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHP_Vn4VFR6viOtaIoEH2kXer41d5xaCMl6vjV3nFoIyb7EDsS1g8NcLC1p7qaVEl7b5jbS7SDBHgeW2vBcHEu7&_nc_ohc=xeiWyoXXun8AX8QWQpB&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdTbhNQkZ_q1w1SibVDysg-Sl3hFoBa2fBGivDCWOjLE1Q&oe=6416E2FE" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Ruhul Amin</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/330897836_935818007576155_7654230450954393259_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGsZ6Omif6d6NuTIXJUsA8DTf47tmemLRxN_ju2Z6YtHGxeJDz4b2sZEwvlJuoOsZ7Ol44jpdaqkf6gkPQXvDNt&_nc_ohc=HGveSY2iJO8AX_z-ZX5&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRPApiPny6fEHZP1X_X6yMnus4MpKqo5-cni5WLN_ij5Q&oe=6417064A" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Shahanaz Ahmed Nishi</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/254250688_2021837944646440_5971513430605485750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHerq6wWFdzL7TK0K_6bN6LNLaAZ1LcWmo0toBnUtxaankWraBTq5e8c-yMB5vLpFnioRrxz4CYYuP-OJCez4wr&_nc_ohc=jlGYHyMddKAAX_-OIil&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCl_gDMK42jhS8lqckH65KvB-7Dn4kZ77vGD3fWLjJNsQ&oe=63F421E0" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Tanvirul Islam</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Sheik Emon</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AlumniCardSlide;
