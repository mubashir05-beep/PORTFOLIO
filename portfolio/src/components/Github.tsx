import React from "react";
import "../app/globals.css";
import Link from "next/link";
import {BsArrowUpRightCircleFill} from 'react-icons/bs'
const Github = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="gap-[18px] group min-h-[199.5px] duration-300 transition hover:shadow-2xl  flex flex-col justify-evenly border dark:border-white border-black p-[2rem] w-[400px] max-[1495px]:w-auto max-[500px]:p-[1rem] rounded-xl">
          <h1 className="text-[35px] font-[300] group-hover:underline  duration-300 transition underline-offset-4">GitHub</h1>
          <div className="flex justify-between items-center">
            <p className="break-words text-[14px]">
              Feel free to visit my GitHub!
            </p>
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

export default Github;
