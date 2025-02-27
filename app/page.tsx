// import Image from "next/image";
import Banner from "./components/home/Banner";
import ChefService from "./components/home/ChefService";
import OurMenu from "./components/home/OurMenu";
import SwiperSlider from "./components/home/SwiperSlider";
// import Menu from "./components/shered/menu/Menu";

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <SwiperSlider />
        <ChefService />
        <OurMenu />
      </div>
    </section>
  );
}
