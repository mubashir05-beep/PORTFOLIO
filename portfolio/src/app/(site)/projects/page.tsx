import PageHeader from "@/components/Page_Header";
import React from "react";


import Project_Showcase from "@/components/Project_Showcase";

const page: React.FC = () => {
  return (
    <div className="flex justify-between gap-[2rem] max-[1200px]:flex-col h-full w-full">
      <div className="flex-[0.3] h-full">
        <PageHeader />
      </div>
      
      <div className="flex flex-col gap-[1rem] flex-1">
        <div className="flex flex-col gap-[0.5rem]">
          <h1 className="font-[500] text-[60px] underline underline-offset-4 max-[550px]:text-[40px]">
            Projects
          </h1>
          <div className="text-[15px]">
            Specializing in Crafting Digital Experiences with React, Next.js,
            TypeScript, Sanity, Tailwind CSS, and Other Advanced Technologies.
          </div>
        </div>
        <div className="flex flex-col gap-4">
        <div className="text-[30px] underline underline-offset-4 max-[550px]:text-[40px]">
          Featured Projects
        </div>
        <Project_Showcase/>
        </div>
       
      </div>
    </div>
  );
};

export default page;
