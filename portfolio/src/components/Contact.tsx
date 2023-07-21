import React from 'react'
import "../app/globals.css";
import Link from 'next/link';

const Contact = () => {
  return (
    <>
    <Link href={"/resume"}>
    <div className="gap-[18px] flex flex-col justify-evenly border border-black p-[2rem] w-[400px] max-[1370px]:w-auto max-[500px]:p-[1rem] rounded-xl">
      <h1 className="text-[35px] font-[300]">Contact</h1>
      <p className="break-words text-[15px]">
        Discover my expertise in React, Next.js, and Tailwind CSS. Explore
        more of my work experience and education details.
      </p>
    </div>
  </Link>
  </>
  )
}

export default Contact