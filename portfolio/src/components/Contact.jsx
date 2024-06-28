import React from "react";
import { Input } from "@nextui-org/react";
const Contact = () => {
  const variants = ["bordered"];
  return (
    <div
      name="contact"
      className="w-full h-auto p-4 text-white bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto mt-14 lg:mt-10 ">
        <div className="pb-8 lg:mt-2">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex items-center justify-center ">
          <form
            action="https://getform.io/f/66dd57e5-956b-4678-a35b-dbfa710b2277"
            method="POST"
            className="flex flex-col w-full gap-2  md:w-1/2"
          >
            <div className="flex flex-col w-full gap-4">
              {variants.map((variant) => (
                <div
                  key={variant}
                  className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
                >
                  <Input
                    type="name"
                    variant={variant}
                    label="Name"
                    className="border-white"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full  ">
              {variants.map((variant) => (
                <div
                  key={variant}
                  className="flex  flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0"
                >
                  <Input
                    type="email"
                    variant={variant}
                    label="Email"
                    className="border-white "
                  />
                </div>
              ))}
            </div>

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 text-white bg-transparent border-2 rounded-xl focus:outline-none"
            ></textarea>

            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
