import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white bg-black mt-6 px-6">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-3xl sm:text-2xl text:xl font-bold py-2">
            Want to know more to optimize your work flow?
          </h1>
          <p className="">SignUp to access latest features..</p>
        </div>
        <div className="my-4">
          <div>
            <input type="email" placeholder="Enter your mail" className="rounded-sm w-[170px] md:w-[180px] pl-2"/>
            <button className="bg-blue-200 text-gray-800 w-[170px] md:w-[180px] ml-4 mx-auto rounded-md font-bold my-4 py-2 md:py-3">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
