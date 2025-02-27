import React from "react";
import menuData from "@/lib/menu.json";
import SectionTitle from "../shered/sectionTitle/SectionTitle";
import Menu from "../shered/menu/Menu";
import Button from "../shered/button/Button";

const sliceMenu = menuData.slice(0, 6);

const OurMenu = () => {
  return (
    <div>
      <SectionTitle heading="check it out" subheading="from our menu" />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 md:gap-10 gap-5 px-2 md:px-5 lg:px-0">
        {sliceMenu.map((data) => (
          <div key={data._id}>
            <Menu
              image={data.image}
              name={data.name}
              price={data.price}
              text={data.recipe}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 md:mt-10 flex justify-center">
        <Button name="View full Menu" />
      </div>
    </div>
  );
};

export default OurMenu;
