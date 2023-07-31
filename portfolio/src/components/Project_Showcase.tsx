'use client'
import React, { useEffect, useState } from "react";
import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import { urlFor } from "../../sanity/config/client-config";

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
    <div className="p-4 border border-black rounded-md dark:border-white">
      {featuredProjects.map((project: projectsTypes) => (
        <div className="flex " key={project._id}>
          <div className="flex flex-col flex-1 gap-4" >
            <div className="flex flex-col gap-2">
              <div>
            <div className="text-[2rem] font-[500]">{project.project_name}</div>
            </div>
            <div className="text-sm max-w-[600px]">{project.project_description}</div>
            </div>
            <div className="flex gap-2 flex-col">
              <p className="text-[1rem] font-[500]">Tech Stack :</p>
              <span className="flex gap-1 text-sm">
              {project.project_stack.map((tech: string) => (
                <div key={tech}>{tech}</div>
              ))}</span>
            </div>
          </div>
          <Image
              src={urlFor(project.thumbnail_image).url()}
              alt={project.project_name}
              className="object-cover"
              width={400} // Set an appropriate width for your image
              height={200} // Set an appropriate height for your image
            />
        </div>
      ))}
    </div>
  );
};

export default Project_Showcase;
