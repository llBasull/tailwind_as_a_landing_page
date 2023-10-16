import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className=" text-white bg-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-[103vh] mx-auto text-center flex flex-col justify-center">
        <p className="text-blue-200 font-bold p-2 md:text-3xl sm:text-xl">
          Enhancing With Styling
        </p>
        <h1 className=" md:text-5xl sm:text-4xl text-2xl font-bold md:py-4">
          Enhance with Tailwind
        </h1>
        <div className="py-1 font-bold p-2 md:text-3xl sm:text-xl flex justify-center">
          <p className="font-bold ">Tailwind helps you with</p>
          <Typed
            className="pl-1 text-blue-200 md:pl-3"
            strings={[
              "Speedy Development",
              "Writing Less Code",
              "Dynamic Styling",
            ]}
            typeSpeed={50}
            backSpeed={70}
            loop
          />
        </div>
        <p className="text-gray-500 py-1 px-2 font-bold md:text-3xl sm:text-xl">
          {" "}
          Make Your page look attractive using tailwind that features with
          lesser coding, makes your development quick and also has quite a wide
          range of styles.
        </p>
        <button className="bg-blue-200 text-gray-800 w-[170px] md:w-[180px] mx-auto rounded-md font-bold my-4 py-2 md:py-3">
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
