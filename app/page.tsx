// import Image from "next/image";
import Banner from "./components/home/Banner";
import ChefService from "./components/home/ChefService";
import SwiperSlider from "./components/home/SwiperSlider";

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <SwiperSlider />
        <ChefService />
      </div>
    </section>
  );
}
