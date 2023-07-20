import "./globals.css";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Github from "@/components/Github";
import Contact from "@/components/Contact";

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
        <div className="pt-[70px] pb-[50px]  max-[600px]:pt-[50px]  flex flex-col  justify-end">
          <h1 className="text-[80px] max-[1070px]:text-[60px] max-[600px]:text-[40px] break-words font-[500] ">
            Muhammad Mubashir Munir Khan.
          </h1>
          <p className="text-[35px] max-[600px]:text-[20px] font-[300] ">
            Front-End Engineer
          </p>
        </div>
        <div className=" h-auto w-auto flex max-[1250px]:flex-col gap-[2rem] ">
          <About />

          <div className="flex max-[760px]:flex-col gap-[2rem] max-[500px]:gap-[1rem]  max-[1250px]:w-auto w-[55vw]">
            <div className="flex  flex-col gap-[2rem] max-[500px]:gap-[1rem]">
              <Resume />
              <Projects />
            </div>
            <div className="flex flex-col gap-[2rem] max-[500px]:gap-[1rem]">
              <Github />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
