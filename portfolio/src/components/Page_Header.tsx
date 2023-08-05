import React, { FC } from "react";
import { AiOutlineHome } from "react-icons/ai";
 import { BiMessageAlt } from "react-icons/bi";

import { MdOutlineContactPage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
const PageHeader: FC = () => {
  return (
    <>
     <div className="flex items-center max-[755px]:flex-col max-[1200px]:flex-row w-full transition duration-300 flex-col gap-4">
        <div className="flex break-words  hover:shadow-2xl w-full max-[1200px]:h-full transition duration-300  cursor-pointer flex-col p-8 bg-black dark:bg-[#323138] rounded-lg gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-[400] justify-evenly break-words max-[480px]:text-[18px] text-white text-[20px]">
              Muhammad Mubashir Munir Khan
            </h1>
            <p className="text-[14px] text-gray-300">Front-End Engineer</p>
          </div>
          <p className="text-gray-300 max-[480px]:text-[14px] break-words">
           
            <a href={`mailto:${' contact.muhammadmubashir@gmail.com'}`} className=" hover:underline">
          {" " +  'contact.muhammadmubashir@gmail.com'}
        </a>
          </p>
          <p className="flex items-center gap-1 max-[480px]:text-[14px] text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            Islamabad | Pakistan 🇵🇰
          </p>
        </div>
        <div className="flex  w-full hover:shadow-2xl  transition duration-300 max-[1200px]:h-full flex-col p-8 items-center justify-evenly  bg-black dark:bg-[#323138]  rounded-lg gap-5">
        <Link href={'/'} className="flex items-center cursor-pointer gap-4 px-4 py-2 border  w-full justify-center border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  ">
            <AiOutlineHome /> Home
          </Link>
          <a
            href="https://github.com/mubashir05-beep"
            target="_blank"
            className="flex w-full justify-center items-center gap-4 cursor-pointer px-4 py-2 border border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
          >
            <FiGithub /> GitHub
          </a>
          <Link href={'/contact'} className="flex items-center cursor-pointer gap-4 px-4 py-2 border  w-full justify-center border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  ">
            <BiMessageAlt /> Contact
          </Link>
         
          <Link href={'/resume'} className="flex items-center cursor-pointer gap-4 px-4 py-2 border  w-full justify-center border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  ">
          <MdOutlineContactPage size={18} /> Resume
          </Link>
           
         
        </div>
      </div>
    </>
  );
};

export default PageHeader;
