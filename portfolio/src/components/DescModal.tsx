"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { urlFor } from "../../sanity/config/client-config";
interface Projects {
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

const DescModal: React.FC<{ project: Projects }> = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = modalOpen ? "hidden" : "unset";
    };
    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "unset"; // Restore body overflow on component unmount
    };
  }, [modalOpen]);
  const handleModalToggle = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div
            className="fixed inset-0 -z-10 bg-black opacity-60"
            onClick={handleModalToggle}
          />
          <div className="dark:bg-[#323138] bg-white rounded-lg inset-0 max-[600px]:w-full  h-[664px] max-[600px]:h-full  w-[580px] max-[600px]:rounded-none max-[600px]:absolute overflow-auto shadow-lg min-[599px]:max-w-md p-6  flex  flex-col gap-[1rem]">
            <div className="flex flex-col">
              <div className="flex  items-center justify-between">
                <h2 className="text-[2rem] dark:text-white  font-[500]">
                  {project.project_name}
                </h2>
                <RxCross1
                  size={24}
                  className="cursor-pointer"
                  onClick={handleModalToggle}
                />
              </div>
              <h2 className="text-[14px] dark:text-gray-300">
                {project.project_status}
              </h2>
              {project.project_caution && (
                <div className="text-red-500 pt-[6px] text-xs">
                  {project.project_caution}
                </div>
              )}
            </div>
            {project.thumbnail_image && (
              <Image
                src={urlFor(project.thumbnail_image).url()}
                alt={project.project_name}
                width={800}
                quality={100}
                height={800}
                className="object-contain rounded-lg border dark:border-white  w-full border-gray-600 "
              />
            )}
            <div className="flex flex-col gap-[1rem]">
              <p className="dark:text-gray-300 text-sm">
                {project.project_description}
              </p>
              <div className="flex flex-col gapz">
                <div className="dark:text-white text-[1rem] font-[500]">
                  Project Industry
                </div>
                <div className="text-sm dark:text-gray-300">
                  {project.project_industry}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="dark:text-white text-[1rem] font-[500]">
                  Tech Stack:
                </div>
                <ul className="flex gap-1 flex-wrap">
                  {project.project_stack.map((tech, index) => (
                    <li
                      key={index}
                      className={`bg-black dark:text-white text-gray-300 dark:bg-gray-800  px-2 text-sm py-1 rounded`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center pt-4">
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-white transition duration-300 text-white bg-black dark:text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-white transition duration-300 text-white bg-black dark:text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    
      <BsArrowUpRightCircleFill
        size={55}
        className="dark:hover:text-[#323138] cursor-pointer hover:text-[#323138] duration-300 transition"
        onClick={handleModalToggle}
      />
    </>
  );
};

export default DescModal;
