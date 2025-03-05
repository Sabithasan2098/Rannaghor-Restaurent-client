"use client";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const message = form.get("message") as string;
    console.log(name, email, phone, message);
    e.currentTarget.reset();
  };

  return (
    <form
      className="mt-6 md:mt-10 bg-[#f0f0f0] px-12 py-16"
      onSubmit={handleSubmit}
    >
      <div className=" space-y-5">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id=""
              className="w-60 md:w-96 py-3 rounded-sm px-3 focus:outline-none focus:shadow-xl focus:shadow-blue-200"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id=""
              className="w-60 md:w-96 py-3 rounded-sm px-3 focus:outline-none focus:shadow-xl focus:shadow-blue-200"
              placeholder="Inter your email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone</label>
          <input
            type="number"
            name="phone"
            id=""
            placeholder="Write your phone number"
            className=" py-3 rounded-sm px-3 focus:outline-none focus:shadow-xl focus:shadow-blue-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            placeholder="Write your message here"
            className="min-h-56 py-3 rounded-sm px-3 focus:outline-none focus:shadow-xl focus:shadow-blue-200"
          />
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button
          className="bg-gradient-to-r from-[#725e40] to-[#ce9a4d] px-6 py-3  text-white font-semibold flex items-center gap-2"
          type="submit"
        >
          Send Message <IoIosSend className="text-xl" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
