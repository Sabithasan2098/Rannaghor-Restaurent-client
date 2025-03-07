import React from "react";
import SignIn from "../components/auth/signIn/SignIn";
import img from "@/public/assets/others/authentication.png";
import img2 from "@/public/assets/others/authentication2.png";
import Image from "next/image";

const page = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img.src})` }}
      className="bg-cover bg-"
    >
      <div className="flex h-screen items-center justify-center">
        <div className="md:flex gap-10 items-center">
          <Image src={img2} alt="authentication image" height={500} />
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default page;
