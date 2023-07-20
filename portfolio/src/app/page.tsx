import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import './globals.css'


export default function Home({}) {
  interface Ilinks {
    id: number;
    name: string;
    url: string ;
  }

  const linkData: Ilinks[] = [
    { id: 1, name: "Projects", url: "/projects" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Contact", url: "/contact" },
  ];

  return (
    <>
  <div className="">
  <div className="h-[30vh] flex flex-col  justify-end">
         <h1 className="text-[80px] break-words font-[500]">Muhammad Mubashir Munir Khan.</h1>
         <p className="text-[35px] font-[300]">Front-End Engineer</p> 
      </div>
  </div>
     
    </>
  );
}

