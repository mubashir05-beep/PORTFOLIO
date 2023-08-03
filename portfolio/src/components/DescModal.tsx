'use client'
import React, { useState, useEffect } from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";

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
  project_status: string,
  project_industry: string,
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
      document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
    };
    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'unset'; // Restore body overflow on component unmount
    };
  }, [modalOpen]);
  const handleModalToggle = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 -z-10 bg-black opacity-60" onClick={handleModalToggle} />
          <div className="dark:bg-[#323138] bg-black  rounded-lg shadow-lg max-w-md p-6 flex flex-col gap-[1.5rem]">
            <div>
              <h2 className="text-[2rem] text-white  font-[500]">{project.project_name}</h2>
              <h2 className="text-[14px] text-gray-300">{project.project_status}</h2>
              {project.project_caution &&
                <div className='text-red-500 pt-[12px] text-[13px]'>{project.project_caution}</div>
              }
            </div>



            <div className='flex flex-col gap-[1rem]'>
              <p className="text-gray-300">{project.project_description}</p>
              <div className='flex flex-col gap-2'>
                <div className='text-white text-[1.5rem]'>Project Industry</div>
                <div className='text-[14px] text-gray-300'>{project.project_industry}</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='text-white text-[1.5rem]'>Tech Stack:</div>
                <ul className="flex gap-1 flex-wrap">
                  {project.project_stack.map((tech, index) => (
                    <li key={index} className={`bg-black dark:text-white text-gray-300 dark:bg-gray-800  px-2 py-1 rounded`}>{tech}</li>
                  ))}
                </ul></div>
              <div className="flex justify-between items-center pt-4">
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="dark:bg-white bg-black transition duration-300  dark:text-black text-white px-4 py-2 rounded-md dark:hover:bg-gray-400">Live Demo</a>
                <a href={project.repo_link} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-md dark:hover:bg-gray-800">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="dark:group-hover:bg-white w-[30px] h-[30px] absolute duration-300 transition -z-20 dark:bg-black" />
      <BsArrowUpRightCircleFill
        size={55}
        className="dark:hover:text-[#323138] cursor-pointer hover:text-[#323138] duration-300 transition"
        onClick={handleModalToggle}
      />
    </>
  );
};

export default DescModal;