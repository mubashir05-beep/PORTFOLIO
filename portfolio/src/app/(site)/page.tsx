import "../globals.css";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Github from "@/components/Github";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
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
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-between h-auto">
      
          <div className="pt-[40px] pb-[30px]   flex flex-col items-baseline  justify-end">
            <h1 className="text-[80px] max-[1070px]:text-[60px] max-[600px]:text-[40px] break-words font-[500] ">
              Muhammad Mubashir Munir Khan.
            </h1>
            <p className="text-[35px] max-[600px]:text-[20px] font-[300] ">
              Front-End Engineer
            </p>
          </div>
          <div className=" h-auto w-auto flex max-[1495px]:flex-col gap-[2rem] ">
            <About />
            <div className="flex max-[760px]:flex-col gap-[2rem] max-[500px]:gap-[1rem] w-full   max-[1250px]:w-auto ">
              <div className="flex  flex-col gap-[2rem] w-full h-full max-[500px]:gap-[1rem]">
                <Resume />
                <Projects />
              </div>
              <div className="flex flex-col gap-[2rem] w-full h-full  max-[500px]:gap-[1rem]">
                <Github />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
