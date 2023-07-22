import React from "react";
import "../app/globals.css";
import Link from "next/link";
import {BsArrowUpRightCircleFill} from 'react-icons/bs'
const Resume = () => {
  return (
    <>
    <Link href={"/resume"}>
    <div className="gap-[18px] h-[199.5px] group duration-300 transition hover:shadow-2xl   flex flex-col dark:border-white justify-evenly border border-black p-[2rem] w-[400px] max-[1370px]:w-auto max-[500px]:p-[1rem] rounded-xl">
      <h1 className="text-[35px] font-[300] group-hover:underline  duration-300 transition underline-offset-4">Resume</h1>
      <div className="flex justify-between items-center">
      <p className="break-words text-[14px]">Interested in my work experience and education?</p>
      <div className="flex items-center justify-center ">
              <div className="group-hover:bg-white w-[30px] h-[30px] absolute   duration-300 transition -z-20 bg-black"/>
            <BsArrowUpRightCircleFill size={55} className="group-hover:text-black  duration-300 transition "/>
         </div>
    </div>
    </div>
  </Link>
  </>
  );
};

export default Resume;
