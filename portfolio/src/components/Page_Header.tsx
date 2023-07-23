import React, { FC } from "react";
import { FaLinkedinIn } from "react-icons/fa";

import { MdOutlineContactPage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
const PageHeader: FC = () => {
  return (
    <>
      <div className="flex items-center transition duration-300  max-[700px]:flex-col gap-4 h-full">
        <div className="flex h-full hover:shadow-2xl  transition duration-300  cursor-pointer flex-col p-[2rem] bg-black dark:bg-[#323138] rounded-lg gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-[400] text-white text-[20px]">
              Muhammad Mubashir Munir Khan
            </h1>
            <p className="text-[14px] text-gray-300">Front-End Engineer</p>
          </div>
          <p className="text-gray-300">contact.muhammadmubashir@gmail.com</p>
          <p className="flex items-center gap-1 text-gray-300">
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
        <div className="flex h-full hover:shadow-2xl  transition duration-300  flex-col p-[2rem] items-center justify-evenly max-w-[400px] bg-black dark:bg-[#323138]  rounded-lg gap-5">
          <a href="https://github.com/mubashir05-beep" target="_blank" className="flex w-[130px] items-center gap-4 cursor-pointer px-4 py-2 border border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  ">
            <FiGithub /> GitHub
          </a>
          <a className="flex items-center cursor-pointer gap-4 px-4 py-2 border border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  ">
            <FaLinkedinIn  /> LinkedIn
          </a>
          <a className="flex items-center cursor-pointer gap-4 px-4 py-2 border border-white text-white  rounded-lg on dark:hover:bg-white hover:bg-[#323138] dark:hover:text-black dark:hover:border-white transition duration-300  hover:shadow-2xl ">
            <MdOutlineContactPage size={18}/> Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
