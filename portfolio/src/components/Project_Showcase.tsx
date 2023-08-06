import React from "react";
import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import { urlFor } from "../../sanity/config/client-config";
import DescModal from "./DescModal";
interface projectsTypes {
  _id: string;
  thumbnail_image: {
    asset: {
      url: string | any;
    };
  };
  project_name: string;
  category: string[];
  slug: string;
  project_status: string;
  project_industry: string;
  project_description: string;
  project_caution: string;
  project_date: string;
  project_stack: string[];
  live_link: string;
  repo_link: string;
}

const Project_Showcase: React.FC = async () => {
  const projects: projectsTypes[] = await getProjects();
  const truncateDescription = (
    description: string,
    numWords: number
  ): string => {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    return truncatedWords.join(" ") + (words.length > numWords ? " ..." : "");
  };
  return (
    <div className="p-4 border border-black flex flex-col  dark:border-white rounded-lg">
      {projects.map((project: projectsTypes) => (
        <div
          className="flex group items-center max-[1500px]:flex-col-reverse border-b border-black py-[1rem] dark:border-white justify-between gap-8"
          key={project._id}
        >
          <div className="flex flex-col justify-between flex-1 gap-8">
            <div>
              <div className="flex items-center relative max-[410px]:items-baseline max-[410px]:flex-col justify-between">
                <div className="text-2xl font-semibold mb-2">
                  {" "}
                  {/* Added margin-bottom */}
                  {project.project_name}
                </div>
                <div className="text-[16px]">{project.project_status}</div>
                <span className="block absolute bottom-0 left-0 w-full h-0.5 dark:bg-white bg-black transform-gpu origin-left group-hover:scale-x-100 scale-x-0 transition-all duration-300"></span>
              </div>

              <div className="text-sm my-2 text-gray-800 max-w-[800px] dark:text-gray-300">
                {truncateDescription(project.project_description, 30)}
              </div>

              <div className="flex gap-2 flex-col">
                <p className="text-base font-semibold">Tech Stack :</p>
                <span className="flex gap-1  flex-wrap text-sm">
                  {project.project_stack.map((tech: string) => (
                    <div
                      key={tech}
                      className={`bg-black text-white dark:bg-gray-800  px-2 py-1 rounded`}
                    >
                      {tech}
                    </div>
                  ))}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">

                <a
                 
                 href={project.live_link}
                  target="_blank"
                  className="text-black dark:text-white  font-[600] hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.repo_link}
                  target="_blank"
                  className="text-black dark:text-white font-[600] hover:underline"
                >
                  Repo
                </a>
              </div>

              <DescModal project={project} />
            </div>
          </div>
          {project.thumbnail_image && (
            <Image
              src={urlFor(project.thumbnail_image).url()}
              alt={project.project_name}
              width={800}
              quality={100}
              height={800}
              className="object-contain h-full rounded-lg border dark:border-white  max-w-[100%] w-full border-gray-600 flex-1"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Project_Showcase;
