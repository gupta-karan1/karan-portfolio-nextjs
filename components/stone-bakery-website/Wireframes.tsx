"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Wireframes() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      <div className="w-full flex flex-col xl:flex-row gap-5 ">
        <div className="xl:w-8/12 bg-neutral rounded-3xl p-10">
          <h1 className="text-6xl mb-10">Wireframe Sketching </h1>
          <p>
            Initial wireframes were sketched on paper to quickly iterate through
            ideas and concepts. This was done to ensure that the website was
            designed with a mobile first approach. It allowed me to lay out the
            content and structure of the website in a way that was easy to
            understand and navigate. The sketches proved to be very useful when
            designing the website as they provided a clear direction for the
            design process. Before moving on to the development, the sketches
            were made for both mobile and desktop screens.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="lg:w-6/12 xl:w-4/12 xl:h-4/12 w-full h-full rounded-3xl shadow-2xl"
        >
          <SwiperSlide className="w-full h-full flex items-center justify-center">
            <Image
              src="/assets/stone-bakery/wireframe-1.jpg"
              alt="stone bakery wireframes"
              width={450}
              height={450}
              className="w-full "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full  flex items-center justify-center">
            <Image
              src="/assets/stone-bakery/wireframe-2.jpg"
              alt="stone bakery branding"
              width={450}
              height={450}
              className="w-full "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full  flex items-center justify-center">
            <Image
              src="/assets/stone-bakery/wireframe-3.jpg"
              alt="stone bakery branding"
              width={450}
              height={450}
              className="w-full "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full  flex items-center justify-center">
            {" "}
            <Image
              src="/assets/stone-bakery/wireframe-4.jpg"
              alt="stone bakery branding"
              width={450}
              height={450}
              className="w-full "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Wireframes;
