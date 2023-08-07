import React from "react";
import Form from "@/components/Form";
import Contact_Header from "@/components/Contact_Header";
import Link from "next/link";
import '../../globals.css'
const Page: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-[2rem]">
      <div className="absolute top-[16px] left-[33px] 
      ">
        <Link
          href={"/"}
          className="font-[400] pointer  logo"
        >
          Mubashir
        </Link>

      </div>
      <div className="flex justify-between max-[1140px]:flex-col  max-[1140px]:items-center   max-[1140px]:gap-[2rem] w-full">
        <Contact_Header email="contact.muhammadmubashir@gmail.com" />
        <div className="flex flex-col gap-[3rem]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page;
