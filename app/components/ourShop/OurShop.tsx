"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import menu from "@/lib/menu.json";
import MenuCard from "../shered/menuCard/MenuCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const OurShop = () => {
  // visit tab menu.tsx btn
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const defaultTab = Number(searchParams.get("tab")) || 0;
  const [selectedIndex, setSelectedIndex] = useState(defaultTab);
  const handleChange = (index: number) => {
    setSelectedIndex(index);
    router.push(`${pathName}?tab=${index}`, { scroll: false });
  };

  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const soup = menu.filter((data) => data.category === "soup");
  const salad = menu.filter((data) => data.category === "salad");
  const drinks = menu.filter((data) => data.category === "drinks");

  return (
    <div className="mt-8 md:mt-16 max-w-7xl mx-auto">
      <Tabs selectedIndex={selectedIndex} onSelect={handleChange}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Salad</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 px-2 md:px-0">
            {dessert?.map((data) => (
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 px-2 md:px-0">
            {pizza?.map((data) => (
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 px-2 md:px-0">
            {salad?.map((data) => (
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 px-2 md:px-0">
            {soup?.map((data) => (
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
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 px-2 md:px-0">
            {drinks?.map((data) => (
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
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
