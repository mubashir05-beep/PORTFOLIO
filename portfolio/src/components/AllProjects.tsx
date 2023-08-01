'use client'
import React, { useEffect, useState } from "react";
import { categories, allProjects } from "../../sanity/sanity-utils";
import { urlFor } from "../../sanity/config/client-config";
import Image from "next/image";

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

const AllProjects: React.FC = () => {
  const [categoriesProjects, setCategoriesProjects] = useState<Category[] | null>(
    null
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const [projects, setProjects] = useState<Projects[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: Category[] = await categories();
        setCategoriesProjects(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Handle the error here (e.g., show an error message to the user).
      }
    };
    const fetchProjects = async () => {
      const projectsData: Projects[] = await allProjects();
      setProjects(projectsData);
    };
    fetchProjects();
    fetchCategories();
  }, []);

  const handleSelection = (stack: string): void => {
    setSelectedOption((prevSelectedOption) => {
      // Toggle "Show All Projects" when the "ALL" option is selected or deselected
      setShowAllProjects(stack === "ALL");
      return stack;
    });
  };

  // Filter projects based on the selected category
  const filteredProjects = showAllProjects
    ? projects // Show all projects when "ALL" is selected
    : projects.filter((project) =>
        selectedOption ? project.category.includes(selectedOption) : true
      );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categoriesProjects &&
          categoriesProjects.map((tech) =>
            tech.tech_stack.map((stack) => (
              <div
                key={stack}
                className={`bg-gray-100 dark:bg-gray-800 cursor-pointer px-2 py-1 rounded ${
                  selectedOption === stack
                    ? "bg-black text-white dark:bg-gray-600"
                    : "text-gray-800 dark:text-gray-200"
                }`}
                onClick={() => handleSelection(stack)}
              >
                {stack}
              </div>
            ))
          )}
      </div>
      <div className="project-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.length === 0 ? (
          <p>No projects found for the selected category.</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project._id} className="project-item">
              {project.thumbnail_image && (
                <Image
                  src={urlFor(project.thumbnail_image.asset).url()}
                  alt={project.project_name}
                  width={700}
                  height={100}
                  className="object-cover rounded-lg border dark:border-white border-gray-600 w-full flex-1"
                />
              )}
              <h2>{project.project_name}</h2>
              <p>{project.project_description}</p>
              <div>
                <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.repo_link} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllProjects;
