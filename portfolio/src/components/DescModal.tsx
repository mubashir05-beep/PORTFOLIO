'use client'
import React, { useState,useEffect } from 'react';
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
  project_description: string;
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
          <div className="dark:bg-[#323138]  rounded-lg shadow-lg max-w-md p-6 flex flex-col gap-[2rem]">
            <h2 className="text-[2rem] font-[500]">{project.project_name}</h2>
            <div className='flex flex-col gap-[1rem]'>
              <p className="">{project.project_description}</p>
              <div className='flex flex-col gap-2'>
                <div className='text-white text-[2rem]'>Tech Stack:</div>
                <ul className="flex gap-1 flex-wrap">
                  {project.project_stack.map((tech, index) => (
                    <li key={index} className={`bg-black text-white dark:bg-gray-800  px-2 py-1 rounded`}>{tech}</li>
                  ))}
                </ul></div>
              <div className="flex justify-between items-center pt-4">
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-md dark:hover:bg-gray-800">Live Demo</a>

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