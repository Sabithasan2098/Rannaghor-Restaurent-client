"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SectionTitle from "../shered/sectionTitle/SectionTitle";
import image1 from "@/public/assets/home/slide1.jpg";
import image2 from "@/public/assets/home/slide2.jpg";
import image3 from "@/public/assets/home/slide3.jpg";
import image4 from "@/public/assets/home/slide4.jpg";
import image5 from "@/public/assets/home/slide5.jpg";
import Image from "next/image";

const SwiperSlider = () => {
  return (
    <div className="mb-10 md:mb-28">
      <SectionTitle
        subheading="order online"
        heading="From 11.00am to 10.00pm"
      />
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src={image1} alt="slide image 1" className="relative" />
          <h2 className="uppercase text-white absolute bottom-1 text-xl md:text-3xl md:font-semibold left-2 md:left-20">
            salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="slide image 1" className="relative" />
          <h2 className="uppercase text-white absolute bottom-1 text-xl md:text-3xl md:font-semibold left-5 md:left-20">
            pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="slide image 1" className="relative" />
          <h2 className="uppercase text-white absolute bottom-1 text-xl md:text-3xl md:font-semibold left-5 md:left-20">
            soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} alt="slide image 1" className="relative" />
          <h2 className="uppercase text-white absolute bottom-1 text-xl md:text-3xl md:font-semibold left-1 md:left-20">
            dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image5} alt="slide image 1" className="relative" />
          <h2 className="uppercase text-white absolute bottom-1 text-xl md:text-3xl md:font-semibold left-1 md:left-20">
            lesanga
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
