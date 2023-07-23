import React from "react";
import "../app/globals.css";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";

const Contact: React.FC = () => {
  return (
    <Link href={"/contact"}>
      <div className="group gap-[18px] h-[199.5px] duration-300 transition flex flex-col justify-evenly border dark:border-white border-black p-[2rem] w-[400px] max-[1495px]:w-auto max-[500px]:p-[1rem] rounded-xl hover:shadow-2xl">
        <h1 className="text-3xl flex py-3 justify-between items-center font-light relative group transition duration-300">
          Contact
          <div className="flex items-center justify-center">
          <div className="dark:group-hover:bg-white w-[30px] h-[15px] rounded absolute duration-300 transition -z-20 dark:bg-black" />

            <BiSolidMessageDetail
              size={36}
              className="dark:group-hover:text-[#323138] group-hover:text-[#323138] duration-300 transition"
            />
          </div>
          <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
        </h1>
        <div className="flex justify-between items-center">
          <p className="break-words text-[14px]">
            Want to reach out? Contact me!
          </p>
          <div className="flex items-center justify-center">
            <div className="dark:group-hover:bg-white w-[30px]  h-[30px] absolute duration-300 transition -z-20 dark:bg-black" />
            <BsArrowUpRightCircleFill
              size={55}
              className="dark:group-hover:text-[#323138] group-hover:text-[#323138] duration-300 transition"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Contact;
