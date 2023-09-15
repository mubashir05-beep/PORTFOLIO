import React, { FC } from "react";

const ResumeContent: FC = () => {
  return (
    <div className="flex flex-[0.75] gap-8   justify-between flex-col">
      <div className="flex flex-col gap-6  group ">
        <div className="flex flex-col gap-[0.5rem] max-[755px]:gap-4">
          <div className="flex justify-between max-[755px]:flex-col max-[755px]:gap-4 min-[755px]:items-center">
            <h1 className="font-[500] text-[60px] underline underline-offset-4 max-[550px]:text-[40px]">
              Experience
            </h1>

          </div>
          <div className="text-[15px]">
            Having years of Front-End Development experience with React,
            Next.js, Node.js, TypeScript, and Tailwind CSS.
          </div>
        </div>
        <h1 className="text-3xl font-light relative group transition flex items-center justify-between duration-300">
          <div className="flex items-center max-[455px]:flex-col max-[455px]:items-start  w-full pb-2 justify-between">
            <div className="flex flex-col ">
              <div className=" text-[25px] font-[500] max-[550px]:text-[20px]">
                Frontend - Software Engineer
              </div>
              <div className=" text-[14px] font-[400] max-[455px]:[13px] dark:text-gray-300">
                <b>VirtuoByte</b> - Islamabad/Pakistan
              </div>
            </div>
            <div className=" text-[16px] font-[400] max-[550px]:text-[14px]  max-[455px]:[13px] dark:text-gray-300">
              Aug-2022 - Present
            </div>
          </div>
          <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
        </h1>
        <p className="text-[18px] font-[400]">
          In Virtuobyte, I handle a diverse range of front-end tasks, bringing creative and functional web solutions to life.
        </p>

        <ul className="list-disc text-[14px] dark:text-gray-300 list-inside space-y-2">
          <li>
            Led the front-end development efforts and played a pivotal role in designing and
            implementing captivating user interfaces, enhancing overall user satisfaction and
            engagement.
          </li>
          <li>
            Consistently met project deadlines and exceeded client expectations by delivering
            high-quality, bug-free code on schedule.
          </li>
          <li>
            Collaborated closely with the backend development team to seamlessly integrate
            APIs and ensure efficient data flow, enhancing the overall functionality of
            applications
          </li>
          <li>
            Proactively identified and resolved complex technical issues, maintaining the
            stability and reliability of critical applications.
          </li>
          <li>
            Actively participated in code review sessions, driving adherence to coding
            standards and ensuring codebase quality across the organization.
          </li>
          <li>
            Maintained application stability by proactively identifying and resolving complex technical issues, ensuring uninterrupted operation.
          </li>
        </ul>
      </div>

      <div className="w-[30vw] mx-auto flex items-center text-center justify-center h-0.5 bg-black dark:bg-white" />

      <h1 className="text-3xl font-light relative group transition flex items-center justify-between duration-300">
        <div className="flex items-center max-[455px]:flex-col max-[455px]:items-start  w-full pb-2 justify-between">
          <div className="flex flex-col ">
            <div className=" text-[25px] font-[500] max-[550px]:text-[20px]">
              Freelance - Full-Stack Developer
            </div>
            <div className=" text-[14px] font-[400] max-[455px]:[13px] dark:text-gray-300">
              <b>Self-Employed</b> - Islamabad/Pakistan
            </div>
          </div>
          <div className=" text-[16px] font-[400] max-[550px]:text-[14px]  max-[455px]:[13px] dark:text-gray-300">
            Jul-2021 - Aug-2022
          </div>
        </div>
        <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
      </h1>
      <p className="text-[18px] font-[400]">
        During my voluntary work as a Full-Stack Developer, I dedicated my skills to create impactful digital solutions that made a difference.
      </p>

      <ul className="list-disc text-[14px] dark:text-gray-300 list-inside space-y-2">
        <li>
          Developed and maintained custom websites and web applications for a diverse
          clientele, consistently meeting project deadlines and exceeding client
          expectations.
        </li>
        <li>
          Mentored and advised small business owners on best practices for online
          marketing, SEO optimization, and content management, empowering them to take
          control of their digital presence.
        </li>
        <li>
          Collaborated with local community organizations on volunteer web development
          projects, contributing to the growth and success of various grassroots initiatives.
        </li>
        <li>
          Utilized a wide range of technologies, including MERN Stack, to create bespoke
          solutions tailored to each client's unique needs and goals.
        </li>

      </ul>
      <div className="w-[50vw] mx-auto flex items-center text-center justify-center h-0.5 bg-black dark:bg-white" />

      <div className="flex flex-col group justify-between gap-6">
        <h1 className="font-[500]  text-[60px] underline underline-offset-4 max-[550px]:text-[40px]">
          Education
        </h1>
        <h1 className="text-3xl font-light relative  transition flex items-center justify-between duration-300">
          <div className="flex items-center w-full pb-2 max-[835px]:flex-col max-[835px]:items-start justify-between">
            <div className="flex flex-col ">
              <div className=" text-[25px] font-[500] max-[550px]:text-[20px]">
                PMAS-Arid Agriculture University (BIMS)
              </div>
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
