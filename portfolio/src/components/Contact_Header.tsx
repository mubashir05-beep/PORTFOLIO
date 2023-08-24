import React from "react";


import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
interface ContactHeaderProps {
  email: string;
}

const Contact_Header: React.FC<ContactHeaderProps> = ({ email }) => {
  return (
    <>
      <div className=" max-[1140px]:items-center  max-[740px]:text-center  flex flex-col gap-2">
        <h1 className="text-[7rem] font-semibold max-[420px]:text-[2rem] pt-4 max-[1370px]:text-[5rem] max-[620px]:text-[3rem]">
          Get in Touch
        </h1>
        <p className="dark:text-gray-300 max-[420px]:text-sm text-black">
          I&#39;d love to hear your ideas and thoughts!
        </p>
        <p className="dark:text-gray-300 flex items-center max-[800px]:flex-col gap-[6px] text-black max-[420px]:text-sm">
          <span>Alternatively, you can email me at :</span>
          <a href={`mailto:${email}`} className=" hover:underline">
            {email}
          </a>
        </p>
        <div className="flex  max-[800px]:items-center flex-wrap max-[800px]:justify-center gap-4 pt-8">
        <Link href={'/'}   className="flex  justify-center items-center gap-4 cursor-pointer px-4 py-2 border border-black text-black  dark:border-white dark:text-white  rounded-lg on dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
          >
            <AiOutlineHome /> Home
          </Link>
          <a
            href="https://github.com/mubashir05-beep"
            target="_blank"
            className="flex  justify-center items-center gap-4 cursor-pointer px-4 py-2 border border-black text-black  dark:border-white dark:text-white  rounded-lg on dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
          >
            <FiGithub /> GitHub
          </a>

          <a
            href="Mubashir_Resume.pdf"
            className="flex  justify-center items-center gap-4 cursor-pointer px-4 py-2 border border-black text-black  dark:border-white dark:text-white  rounded-lg on dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:border-white transition duration-300 hover:shadow-2xl  "
            
            target="_blank"
          >
            <MdOutlineContactPage size={18} /> Get Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact_Header;
