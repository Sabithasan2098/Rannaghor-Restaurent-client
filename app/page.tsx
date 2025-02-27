// import Image from "next/image";
import Banner from "./components/home/Banner";
import CallUs from "./components/home/CallUs";
import ChefRecommends from "./components/home/ChefRecommends";
import ChefService from "./components/home/ChefService";
import Featured from "./components/home/Featured";
import OurMenu from "./components/home/OurMenu";
import SwiperSlider from "./components/home/SwiperSlider";
import Testimonial from "./components/home/Testimonial";
// import Menu from "./components/shered/menu/Menu";

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <SwiperSlider />
        <ChefService />
        <OurMenu />
        <CallUs />
        <ChefRecommends />
        <Featured />
        <Testimonial />
      </div>
    </section>
  );
}
