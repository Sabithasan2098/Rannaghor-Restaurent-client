import React from "react";
import MenuCategory from "../components/shered/menuCategory/MenuCategory";
import image from "@/public/assets/contact/banner.jpg";
import SectionTitle from "../components/shered/sectionTitle/SectionTitle";
import ContactCard from "../components/contact/ContactCard";
import ContactForm from "../components/contact/ContactForm";

const page = () => {
  return (
    <div>
      <MenuCategory
        img={image}
        title="contact us"
        desc="To know anything contact us"
      />
      <div className="mt-8 md:mt-16">
        <SectionTitle heading="Visit Us" subheading="our location" />
      </div>
      <div className="mt-8 md:mt-16 ">
        <ContactCard />
      </div>
      <div className="mt-8 md:mt-16 max-w-7xl mx-auto place-items-center">
        <SectionTitle heading="Send Us a Message" subheading="contact form" />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
