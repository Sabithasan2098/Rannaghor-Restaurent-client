import React from "react";
import SectionTitle from "../shered/sectionTitle/SectionTitle";
import menuData from "@/lib/menu.json";
import MenuCard from "../shered/menuCard/MenuCard";
const sliceMenu = menuData.slice(0, 3);

const ChefRecommends = () => {
  return (
    <div className="mt-10 md:mt-16">
      <SectionTitle heading="should try" subheading="Chef recommends" />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 md:gap-0 ">
        {sliceMenu.map((data) => (
          <div key={data._id}>
            <MenuCard
              image={data.image}
              name={data.name}
              price={data.price}
              text={data.recipe}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
