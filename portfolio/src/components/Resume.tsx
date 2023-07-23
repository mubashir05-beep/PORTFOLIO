import React from "react";
import "../app/globals.css";
import Link from "next/link";
import {BsArrowUpRightCircleFill} from 'react-icons/bs'
import {MdContactPage} from 'react-icons/md'

const Resume = () => {
  return (
    <>
    <Link href={"/resume"}>
    <div className="gap-[18px] h-[199.5px] group duration-300 transition hover:shadow-2xl flex flex-col dark:border-white justify-evenly border border-black p-[2rem] w-[400px] max-[1495px]:w-auto max-[500px]:p-[1rem] rounded-xl">
    <h1 className="text-3xl flex py-3 justify-between items-center font-light relative group transition duration-300">
            Resume
            <div className="flex items-center justify-center">
              <div className="dark:group-hover:bg-white w-[17px]  h-[22.5px] rounded-full  absolute duration-300 transition -z-20 dark:bg-black" />
              <MdContactPage
                size={36}
                className="dark:group-hover:text-[#323138] group-hover:text-[#323138] duration-300 transition"
              />
            </div>
            <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
          </h1>

      <div className="flex justify-between gap-[30px] items-center">
      <p className="break-words text-[14px]">Interested in my work experience and education?</p>
      <div className="flex items-center justify-center">
            <div className="dark:group-hover:bg-white w-[30px]  h-[30px] absolute duration-300 transition -z-20 dark:bg-black" />
            <BsArrowUpRightCircleFill size={55} className="dark:group-hover:text-[#323138] group-hover:text-[#323138] duration-300 transition" />
          </div>
    </div>
    </div>
  </Link>
  </>
  );
};

export default Resume;
