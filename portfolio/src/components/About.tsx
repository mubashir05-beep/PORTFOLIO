import React from "react";
import "../app/globals.css";

const About = () => {
  return (
    <div className="gap-[18px] min-[1600px]:max-w-[650px] cursor-pointer group duration-300 transition hover:shadow-2xl  max-[1370px]:w-auto dark:border-white  flex flex-col justify-between border border-black p-[2rem] max-[500px]:p-[1rem] rounded-xl">
      <h1 className="text-[55px] font-[300]  duration-300 transition group-hover:underline underline-offset-4">About</h1>
      <div className="flex flex-col text-[14px] gap-[12px]">
        <p className="break-words">
          Hello, and welcome to my portfolio! I am a skilled Front-End Engineer with a passion for creating
          captivating web experiences using the latest technologies.
        </p>

        <p className="break-words">
          I specialize in working with React, Next.js, Tailwind CSS, ans similar technologies which
          are powerful tools for building modern websites. I always stay
          up-to-date with the latest trends and best practices in front-end
          development to ensure that I deliver the best results.
        </p>
        <p className="break-words">
          When it comes to my work, I pay great attention to detail, and I am
          committed to writing clean and efficient code. This helps me transform
          complex designs into smooth, responsive, and high-performing user
          interfaces. Feel free to explore my portfoio.
        </p>
      </div>
    </div>
  );
};

export default About;
