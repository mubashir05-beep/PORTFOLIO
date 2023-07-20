import React from "react";
import "../app/globals.css";

const About = () => {
  return (
    <div className="gap-[18px] w-[45vw] max-[1250px]:w-auto  flex flex-col border border-black p-[2rem] max-[500px]:p-[1rem] rounded-xl">
      <h1 className="text-[35px] font-[300]">About</h1>
      <div className="flex flex-col text-[14px] gap-[9px]">
        <p className="break-words">
          Welcome to my portfolio! I am a skilled Front-End Engineer with a
          passion for crafting immersive web experiences using cutting-edge
          technologies. My expertise lies in React, Next.js, and Tailwind CSS,
          and I&apos;m constantly exploring the latest trends and best practices in
          front-end development.
        </p>

        <p className="break-words">
          With a keen eye for detail and a commitment to clean code, I take
          pride in transforming complex designs into seamless, responsive, and
          performant user interfaces. My goal is to build intuitive and engaging
          web applications that leave a lasting impact on users.
        </p>
      </div>
    </div>
  );
};

export default About;
