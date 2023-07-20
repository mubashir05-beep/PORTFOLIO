import React from 'react'
import "../app/globals.css";
import Link from 'next/link';
const Projects = () => {
  return (
    <>
      <Link href={"/projects"}>
        <div className="gap-[18px] flex flex-col justify-evenly border border-black p-[2rem] max-[500px]:p-[1rem] rounded-xl">
          <h1 className="text-[35px] font-[300]">Projects</h1>
          <p className="break-words text-[14px]">
            Discover my expertise in React, Next.js, and Tailwind CSS. Explore
            more of my work experience and education details.
          </p>
        </div>
      </Link>
    </>
  )
}

export default Projects