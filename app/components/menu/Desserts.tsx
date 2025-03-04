import menu from "@/lib/menu.json";
import ParallaxItem from "../shered/paralaxItem/ParalaxItem";
import dessertBG from "@/public/assets/menu/dessert-bg.jpeg";
import Menu from "../shered/menu/Menu";
import Button from "../shered/button/Button";
import Link from "next/link";

interface IMenuData {
  _id: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
}

const Desserts = () => {
  const dessert: IMenuData[] = menu.filter(
    (data) => data.category === "dessert"
  );

  return (
    <div>
      <ParallaxItem
        img={dessertBG.src}
        title="desserts"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-8 px-3 md:px-5 lg:px-0 mt-8 md:mt-16">
        {dessert.map((data) => (
          <div key={data._id}>
            {" "}
            <Menu
              image={data.image}
              name={data.name}
              price={data.price}
              text={data.recipe}
            />{" "}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3 md:mt-5 lg:mt-8">
        <Link href="/ourShop?tab=0">
          <Button name="order your favorite food" />
        </Link>
      </div>
    </div>
  );
};

export default Desserts;
