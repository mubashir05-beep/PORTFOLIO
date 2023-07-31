"use client";
import React, { useEffect, useState } from "react";
import { getProjects } from "../../sanity/sanity-utils";

const Project_Showcase: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setFeaturedProjects(projects);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      {featuredProjects.map((project: any) => (
        <div key={project.id}>{project.project_name}</div>
      ))}
    </div>
  );
};

export default Project_Showcase;
