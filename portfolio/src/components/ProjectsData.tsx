'use client'
import { urlFor } from "../../sanity/config/client-config";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import React, { useState } from "react";

interface Category {
  tech_stack: string[];
}

interface Projects {
  _id: string;
  thumbnail_image?: {
    asset: {
      url: string | any;
    };
  };
  project_name: string;
  category: string[];
  slug: string;
  project_description: string;
  project_stack: string[];
  live_link: string;
  repo_link: string;
}

const ProjectsData: React.FC<{ projectsData: Projects[], fetchedCategories: Category[] }> = ({ projectsData, fetchedCategories }) => {
  const [selectedOption, setSelectedOption] = useState<string>("ALL");
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const handleSelection = (stack: string): void => {
    setSelectedOption((prevSelectedOption) => {
      setShowAllProjects(stack === "ALL");
      return stack;
    });
  };

  const truncateDescription = (description: string, numWords: number): string => {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, numWords);
    return truncatedWords.join(" ") + (words.length > numWords ? " ..." : "");
  };

  const filteredProjects = showAllProjects
    ? projectsData
    : projectsData.filter((project) => (selectedOption === "ALL" ? true : project.category.includes(selectedOption)));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <div
          className={`bg-black text-white dark:bg-gray-800 cursor-pointer px-2 py-1 rounded ${selectedOption === "ALL" ? "bg-gray-700 dark:bg-white dark:text-black text-white" : ""
            }`}
          onClick={() => handleSelection("ALL")}
        >
          ALL
        </div>
        {fetchedCategories &&
          fetchedCategories.map((tech) =>
            tech.tech_stack.map((stack) => (
              <div
                key={stack}
                className={`bg-black text-white dark:bg-gray-800 cursor-pointer px-2 py-1 rounded ${selectedOption === stack ? "bg-gray-700 dark:bg-white dark:text-black text-white" : ""
                  }`}
                onClick={() => handleSelection(stack)}
              >
                {stack}
              </div>
            ))
          )}
      </div>
      <div className="grid grid-cols-2 max-[850px]:grid-cols-1 mt-8 gap-4">
        {filteredProjects.length === 0 ? (
          <p className="col-span-2">No projects found for the selected category.</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project._id} className="border border-black dark:border-white rounded-lg p-4">
              {project.thumbnail_image && (
                <Image
                  src={urlFor(project.thumbnail_image.asset).url()}
                  alt={project.project_name}
                  width={700}
                  height={100}
                  className="object-cover rounded-lg border dark:border-white border-gray-600 w-full h-[200px]"
                />
              )}
              <h2 className="text-xl font-semibold mt-4">{project.project_name}</h2>
              <div className="text-sm  text-gray-800 dark:text-gray-300">{truncateDescription(project.project_description, 25)}</div>
              <p className="mt-2 flex gap-1">
                {project.project_stack.map((stack) => (
                  <span className={`bg-black text-white dark:bg-gray-800  px-2 py-1 rounded`} key={stack}>
                    {stack}
                  </span>
                ))}
              </p>

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

                <div className="dark:group-hover:bg-white w-[30px]  h-[30px] absolute duration-300 transition -z-20 dark:bg-black" />
                <BsArrowUpRightCircleFill size={55} className="dark:hover:text-[#323138] cursor-pointer hover:text-[#323138] duration-300 transition" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProjectsData;
