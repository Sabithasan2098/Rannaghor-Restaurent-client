import React from "react";

interface sectionTitleProps {
  subheading: string;
  heading: string;
}

const SectionTitle: React.FC<sectionTitleProps> = ({ subheading, heading }) => {
  return (
    <div className=" max-w-80 mx-auto ">
      <p className="text-yellow-500 text-lg md:text-xl pb-2 md:pb-5 text-center">
        ----{heading}----
      </p>
      <p className="uppercase text-center text-xl md:text-3xl border-y-2 py-2 md:py-5">
        {subheading}
      </p>
    </div>
  );
};

export default SectionTitle;
