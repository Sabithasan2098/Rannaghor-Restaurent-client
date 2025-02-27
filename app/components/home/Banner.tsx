"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "@/public/assets/home/01.jpg";
import slide2 from "@/public/assets/home/02.jpg";
import slide3 from "@/public/assets/home/03.png";
import slide4 from "@/public/assets/home/04.jpg";
import slide5 from "@/public/assets/home/05.png";
import slide6 from "@/public/assets/home/06.png";

const Banner = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <Image src={slide1} alt="Slide 1" width={600} height={300} />
      </div>
      <div>
        <Image src={slide2} alt="Slide 2" width={600} height={300} />
      </div>
      <div>
        <Image src={slide3} alt="Slide 3" width={600} height={300} />
      </div>
      <div>
        <Image src={slide4} alt="Slide 4" width={600} height={300} />
      </div>
      <div>
        <Image src={slide5} alt="Slide 5" width={600} height={300} />
      </div>
      <div>
        <Image src={slide6} alt="Slide 6" width={600} height={300} />
      </div>
    </Carousel>
  );
};

export default Banner;
