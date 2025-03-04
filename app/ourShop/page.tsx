import React from "react";
import MenuCategory from "../components/shered/menuCategory/MenuCategory";
import bannerImg from "@/public/assets/shop/banner2.jpg";
import OurShop from "../components/ourShop/OurShop";

const page = () => {
  return (
    <div>
      <MenuCategory
        img={bannerImg}
        title="our shop"
        desc="Would You Like To Try Our Dish ?"
      />
      <OurShop />
    </div>
  );
};

export default page;
