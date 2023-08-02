'use client'
import React, { useEffect, useState } from "react";
import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import { urlFor } from "../../sanity/config/client-config";
import Link from "next/link";

interface projectsTypes {
  _id: string;
  thumbnail_image: {
    asset: {
      url: string | any;
      // Add other properties from the 'thumbnail_image' field here if needed
    };
    // Add other properties from the 'thumbnail_image' field here if needed
  };
  project_name: string;
  slug: string;
  project_description: string;
  project_stack: string[];
  live_link: string;
  repo_link: string;
}

const Project_Showcase: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<projectsTypes[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const projects: projectsTypes[] = await getProjects();
      setFeaturedProjects(projects);
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-4 border border-black dark:border-white rounded-lg">
  {featuredProjects.map((project: projectsTypes) => (
    <div className="flex items-center max-[1735px]:flex-col-reverse justify-between gap-8" key={project._id}>
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-2">
          <div>
            <div className="text-2xl font-semibold">{project.project_name}</div>
          </div>
          <div className="text-sm  text-gray-800 dark:text-gray-300">
            {project.project_description}
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <p className="text-base font-semibold">Tech Stack :</p>
          <span className="flex gap-1  flex-wrap text-sm">
            {project.project_stack.map((tech: string) => (
              <div key={tech} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {tech}
              </div>
            ))}
          </span>
        </div>
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
      </div>
      <Image
        src={urlFor(project.thumbnail_image).url()}
        alt={project.project_name}
        width={700} // Set an appropriate width for your image
        height={600} // Set an appropriate height for your image
        className="object-cover rounded-lg border dark:border-white border-gray-600 w-full flex-1 "
      />
    </div>
  ))}
</div>

  );
};

export default Project_Showcase;
