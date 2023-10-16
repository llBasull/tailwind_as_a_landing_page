import React from "react";
import { FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="border-t-[1px] border-t-gray-600 max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div></div>
        <div className="flex ">
          <a href="https://www.instagram.com/">
            <FaSquareInstagram size={50} className="cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook size={50} className="cursor-pointer" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bashumoulik@gmail.com">
            <BiLogoGmail size={50} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
