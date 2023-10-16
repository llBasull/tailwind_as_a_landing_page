import { React, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav,setNav] = useState(false); 

  const handleNav=()=>{
    setNav(!nav);
  }
  return ( 
    <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-4 text-white">
      <h1 className="text-blue-200 w-full font-bold text-3xl">Tailwind.</h1>
      <ul className="hidden md:flex ">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contacts</li>
        <li className="p-4 cursor-pointer">Resources</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {!nav?<AiOutlineMenu size={20}/>:<AiOutlineClose size={20} /> }
      </div>
      <div className={nav?"fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-300":"fixed left-[-100%]"}>
      <h1 className="text-blue-200 w-full font-bold text-3xl m-4">Tailwind.</h1>
      <ul className=" uppercase p-4">
        <li className="p-4 border-b border-gray-400 ">Home</li>
        <li className="p-4 border-b border-gray-400 ">About</li>
        <li className="p-4 border-b border-gray-400 ">Contacts</li>
        <li className="p-4  ">Resources</li>
      </ul>
      </div>
    </div>
      );
};

export default Navbar;
