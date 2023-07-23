import React from "react";
import "../app/globals.css";

const About = () => {
  return (
    <div className="gap-[18px] min-[1600px]:max-w-[650px] cursor-pointer group duration-300 transition hover:shadow-2xl  max-[1370px]:w-auto dark:border-white  flex flex-col justify-between border border-black p-[2rem] max-[500px]:p-[1rem] rounded-xl">
       <h1 className="text-3xl font-light relative group transition duration-300">
  About
  <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
</h1>
      <div className="flex flex-col text-[14px] gap-[12px]">
      
  <p className="break-words">
    Hello, and welcome to my portfolio! I am a skilled Front-End Engineer with a passion for creating
    captivating web experiences using the latest technologies.
  </p>

  <p className="break-words">
    I specialize in working with Next.js, Typescript, React, Tailwind CSS, and other similar technologies,
    which are powerful tools for building modern websites. I always stay up-to-date with the latest trends
    and best practices in front-end development to ensure that I deliver the best results.
  </p>

  <p className="break-words">
    When it comes to my work, I pay great attention to detail, and I am committed to writing clean and
    efficient code. This helps me transform complex designs into smooth, responsive, and high-performing
    user interfaces. Feel free to explore my portfolio.
  </p>


      </div>
    </div>
  );
};

export default About;
