import React from "react";
import Form from "@/components/Form";
import Contact_Header from "@/components/Contact_Header";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";

import { MdOutlineContactPage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
const page: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-[2rem]">
     
        <div className="flex   hover:shadow-2xl  transition duration-300 max-[1200px]:h-full  p-8 items-center    bg-black dark:bg-[#323138]  rounded-lg gap-5">
          <Link
            href={"/"}
            className="flex items-center cursor-pointer gap-4 px-4 py-2 border   justify-center border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
          >
            <AiOutlineHome /> Home
          </Link>
          <a
            href="https://github.com/mubashir05-beep"
            target="_blank"
            className="flex  justify-center items-center gap-4 cursor-pointer px-4 py-2 border border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
          >
            <FiGithub /> GitHub
          </a>
          <Link
            href={"/contact"}
            className="flex items-center cursor-pointer gap-4 px-4 py-2 border   justify-center border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
          >
            <BiMessageAlt /> Contact
          </Link>

          <a
            href="https://publuu.com/flip-book/195325/474153"
            target="_blank"
            className="flex   justify-center items-center cursor-pointer gap-4 px-4 py-2 border border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300  hover:shadow-2xl "
          >
            <MdOutlineContactPage size={18} /> Resume
          </a>
        </div>
   
      <div className="flex justify-between w-full">
        <Contact_Header email="contact.muhammadmubashir@gmail.com" />

        <div className=" flex flex-col gap-[3rem]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default page;
