'use client'
import React, { useState } from 'react';
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

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 -z-10 bg-black opacity-60" onClick={handleModalToggle} />
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">{project.project_name}</h2>
            {/* <img src={project.thumbnail_image.asset.url} alt={project.project_name} className="mb-4 rounded-lg" /> */}
            <p className="text-gray-700 mb-4">{project.project_description}</p>
            <div>Tech Stack:</div>
            <ul className="mb-4">
              {project.project_stack.map((tech, index) => (
                <li key={index} className="text-blue-600">{tech}</li>
              ))}
            </ul>
            <div className="flex justify-between">
              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Live Demo</a>
              <a href={project.repo_link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">GitHub Repo</a>
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