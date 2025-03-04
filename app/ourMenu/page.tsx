import React from "react";
import menuImg from "@/public/assets/menu/banner3.jpg";
import MenuCategory from "../components/shered/menuCategory/MenuCategory";
import SectionTitle from "../components/shered/sectionTitle/SectionTitle";
import Menu from "../components/shered/menu/Menu";
import menu from "@/lib/menu.json";
import Button from "../components/shered/button/Button";
import Desserts from "../components/menu/Desserts";
import Pizza from "../components/menu/Pizza";
import Salads from "../components/menu/Salads";
import Soup from "../components/menu/Soup";

interface IMenuData {
  _id: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
}

const OurMenu: React.FC = () => {
  const menuData: IMenuData[] = menu.filter(
    (data) => data.category === "offered"
  );

  const [offer] = menuData || [];

  if (!offer) {
    return <p>Offer is closed now</p>;
  }

  return (
    <div>
      <MenuCategory
        img={menuImg}
        title="Our Menu"
        desc="Would You Like to Try a Dish"
      />

      <section className="mt-10 md:mt-16 max-w-7xl mx-auto">
        {/* todays offer */}
        <SectionTitle heading="Don't miss" subheading="todays offer" />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 md:gap-10 gap-5 px-2 md:px-5 lg:px-0">
          {menuData.map((data) => (
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
        <div className="flex justify-center mt-3 md:mt-5 lg:mt-8">
          <Button name="order your favorite food" />
        </div>
      </section>
      <section>
        <Desserts />
        <Pizza />
        <Salads />
        <Soup />
      </section>
    </div>
  );
};

export default OurMenu;
