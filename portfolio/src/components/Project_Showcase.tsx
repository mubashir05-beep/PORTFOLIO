import React from "react";
import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import { urlFor } from "../../sanity/config/client-config";

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";
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
  project_status:string,
  project_industry:string,
  project_description: string;
  project_caution:string;
  project_date:string;
  project_stack: string[];
  live_link: string;
  repo_link: string;
  
}

const Project_Showcase: React.FC = async () => {
  const projects: projectsTypes[] = await getProjects();

  return (
    <div className="p-4 border border-black flex flex-col gap-[2rem] dark:border-white rounded-lg">
      {projects.map((project: projectsTypes) => (
        <div
          className="flex  max-[1201px]:flex-col-reverse border-b py-[1rem] dark:border-white justify-between gap-8"
          key={project._id}
        >
          <div className="flex flex-col justify-between flex-1 gap-8">
            <div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">
                  {project.project_name}
                </div>
                <div className="text-[16px]">
                  {project.project_status}
                </div>
              </div>
              <div className="text-sm  text-gray-800 max-w-[800px] dark:text-gray-300">
                {project.project_description}
              </div>
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
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.repo_link}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Repo
                </a>
              </div>
              
              <DescModal project={project}/>
              
            </div>
          </div>
          {project.thumbnail_image&&
      <Image
      src={urlFor(project.thumbnail_image).url()}
      alt={project.project_name}
      width={800}
      height={800}
      className="object-cover rounded-lg border dark:border-white min-[1201px]:max-w-[50%] max-w-[100%] w-full border-gray-600 flex-1"
    />}
    
        </div>
      ))}
    </div>
  );
};

export default Project_Showcase;
