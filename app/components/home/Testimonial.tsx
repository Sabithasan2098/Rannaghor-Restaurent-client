"use client";
import React from "react";
import SectionTitle from "../shered/sectionTitle/SectionTitle";
import reviews from "@/lib/reviews.json";
import DynamicRating from "../shered/rating/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial: React.FC = () => {
  return (
    <div className="mt-8 md:mt-16">
      <SectionTitle heading="What's Your Client Say" subheading="testimonial" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((data) => (
          <div key={data._id}>
            <SwiperSlide key={data._id}>
              <div className="flex flex-col items-center px-8 md:px-3 lg:px-0">
                <DynamicRating initialRating={data?.rating} />
                <FaQuoteLeft className="text-3xl md:text-7xl my-3 md:my-7" />

                <p className="text-center">{data.details}</p>
                <h2 className="text-xl font-semibold text-[#d1a054] md:text-3xl">
                  {data.name}
                </h2>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
