import React from "react";
import Form from "@/components/Form";
import Contact_Header from "@/components/Contact_Header";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center gap-[2rem]">
      {/* Container for Home link */}
      <div className="absolute top-[16px] left-[33px] 
      ">
        <Link
          href={"/"}
          className=""
        >
          Mubashir
        </Link>
      </div>
      <div className="flex justify-between w-full">
        <Contact_Header email="contact.muhammadmubashir@gmail.com" />
        <div className="flex flex-col gap-[3rem]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page;
