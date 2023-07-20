import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import "./globals.css";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home({}) {
  interface Ilinks {
    id: number;
    name: string;
    url: string;
  }

  const linkData: Ilinks[] = [
    { id: 1, name: "Projects", url: "/projects" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Contact", url: "/contact" },
  ];

  return (
    <>
  <div className="flex flex-col justify-between">

  
        <div className="pt-[100px] pb-[50px]  max-[600px]:pt-[50px]  flex flex-col  justify-end">
          <h1 className="text-[80px] max-[1070px]:text-[60px] max-[600px]:text-[40px] break-words font-[500] ">
            Muhammad Mubashir Munir Khan.
          </h1>
          <p className="text-[35px] max-[600px]:text-[20px] font-[300] ">Front-End Engineer</p>
        </div>
        <div className=" flex items-center">
         <About />
        </div>

        </div>
    </>
  );
}
