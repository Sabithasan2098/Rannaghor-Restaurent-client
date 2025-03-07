"use client";
import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { RiGoogleLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const password = form.get("password") as string;
  const email = form.get("email") as string;
  console.log(password, email);
  e.currentTarget.reset();
};

const SignIn = () => {
  return (
    <form onSubmit={handleSubmit} className="w-96">
      <div className=" space-y-3">
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            className=" py-3 rounded-sm px-3 focus:outline-none focus:shadow-xl focus:shadow-blue-200"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            className=" py-3 rounded-sm px-3 focus:outline-none focus:shadow-xl focus:shadow-blue-200"
            placeholder="Inter your password"
          />
        </div>
      </div>
      <div className="flex justify-center pt-5 w-full">
        <button
          className="bg-gradient-to-r from-[#725e40] to-[#ce9a4d] py-3  text-white font-semibold flex items-center gap-2 w-full justify-center rounded-sm"
          type="submit"
        >
          Sign in
        </button>
      </div>
      <div className="place-items-center pt-4">
        <p className="text-[#d5a55b] text-lg">
          New here?{" "}
          <span className="font-bold underline">
            <Link href={"/register"}>Create a new account</Link>
          </span>{" "}
        </p>
        <p className="text-lg">Or sign in with</p>
        <div className="flex items-center justify-center pt-5 text-3xl gap-2">
          <CiFacebook className="text-4xl" />
          <RiGoogleLine className=" border-2 rounded-full border-black p-[2px]" />
          <VscGithub />
        </div>
      </div>
    </form>
  );
};

export default SignIn;
