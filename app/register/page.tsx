import React from "react";
import Register from "../components/auth/register/Register";
import img from "@/public/assets/others/authentication.png";
import img2 from "@/public/assets/others/authentication2.png";
import Image from "next/image";

const page = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img.src})` }}
      className="bg-cover bg-"
    >
      <div className="flex  h-screen items-center justify-center">
        <div className="md:flex gap-10 items-center flex-row-reverse">
          <Image src={img2} alt="authentication image" height={500} />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default page;
