import React from 'react';
import "../app/globals.css";
import Link from 'next/link';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <Link href={"/contact"}>
      <div className="group gap-[18px] h-[199.5px] duration-300 transition flex flex-col justify-evenly border dark:border-white border-black p-[2rem] w-[400px] max-[1495px]:w-auto max-[500px]:p-[1rem] rounded-xl hover:shadow-2xl">
        <h1 className="text-[35px] font-[300] group-hover:underline duration-300 transition underline-offset-4">Contact</h1>
        <div className="flex justify-between items-center">
          <p className="break-words text-[14px]">Want to reach out? Contact me!</p>
          <div className="flex items-center justify-center">
            <div className="group-hover:bg-white w-[30px] h-[30px] absolute duration-300 transition -z-20 bg-black" />
            <BsArrowUpRightCircleFill size={55} className="group-hover:text-black duration-300 transition" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Contact;
