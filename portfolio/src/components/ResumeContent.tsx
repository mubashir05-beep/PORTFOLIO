import React, { FC } from "react";

const ResumeContent: FC = () => {
  return (
    <div className="flex flex-[0.75] gap-8   justify-between flex-col">
      <div className="flex flex-col gap-6  group ">
        <h1 className="font-[500] text-[60px] underline underline-offset-4 max-[550px]:text-[40px]">
          Experience
        </h1>
        <h1 className="text-3xl font-light relative group transition flex items-center justify-between duration-300">
          <div className="flex items-center w-full pb-2 justify-between">
            <div className="flex flex-col ">
            <div className=" text-[25px] font-[500] max-[550px]:text-[20px]">FreeLancing</div>
            <div className=" text-[14px] font-[400]  dark:text-gray-300">
              Front-End Developer
            </div>
            </div>
            <div className=" text-[18px] font-[400] max-[550px]:text-[14px] dark:text-gray-300">
              SEPT 2022-Present
            </div>
          </div>
          <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
        </h1>
        <p className="text-[18px] font-[400]">Currently working as a Front-End Developer and previously served as a Content Manager for various Daraz online shops!</p>

        <ul className="list-disc text-[14px] dark:text-gray-300 list-inside space-y-2">
          <li>
            Worked as a web developer on various projects, both voluntarily and
            paid, gaining valuable experience in front-end and back-end
            development.
          </li>
          <li>
            Collaborated with clients and teams to design and implement
            responsive and user-friendly websites, enhancing user experiences.
          </li>
          <li>
            Utilized programming languages such as HTML, CSS, JavaScript, TypeScript, and
            frameworks like React, Tailwind Css, and Next to build interactive and dynamic web
            applications.
          </li>
          <li>
            Engaged in continuous learning to stay updated with the latest web
            development trends and technologies.
          </li>
          <li>
            As a content manager for a Daraz online store, curated and managed
            product listings, ensuring accurate and engaging content.
          </li>
          <li>
            Optimized product descriptions and images for better search
            visibility and increased sales.
          </li>
          <li>
            Coordinated with marketing teams to create compelling content for
            promotional campaigns.
          </li>
          <li>
            Demonstrated excellent organizational skills, balancing multiple
            projects, deadlines, and tasks effectively.
          </li>
          <li>
            Navigated communication with clients, colleagues, and stakeholders
            to ensure smooth project workflows and client satisfaction.
          </li>
          <li>
            Maintained a strong work ethic, consistently delivering high-quality
            work and meeting project milestones.
          </li>
          <li>
            Adapted to the dynamic nature of freelance work, managing time
            efficiently and remaining adaptable to changing project
            requirements.
          </li>
        </ul>
      </div>

      <div className="w-[50vw] mx-auto flex items-center text-center justify-center h-0.5 bg-black dark:bg-white"/>

        
      <div className="flex flex-col group justify-between gap-6">
      <h1 className="font-[500]  text-[60px] underline underline-offset-4 max-[550px]:text-[40px]">
          Education
        </h1>
        <h1 className="text-3xl font-light relative  transition flex items-center justify-between duration-300">
          <div className="flex items-center w-full pb-2 justify-between">
            <div className="flex flex-col ">
            <div className=" text-[25px] font-[500] max-[550px]:text-[20px]">PMAS-Arid Agriculture University (BIMS)</div>
            <div className=" text-[14px] font-[400]  dark:text-gray-300">
            Bachelor of Science in Software Engineering (BSSE)
            </div>
            </div>
            <div className=" text-[18px] font-[400] max-[550px]:text-[14px] dark:text-gray-300">
              FALL 2021-Present
            </div>
          </div>
          <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
        </h1>
      </div>
    </div>
  );
};

export default ResumeContent;
