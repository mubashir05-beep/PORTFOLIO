import React from 'react';
import ProjectsData from './ProjectsData';
import { client } from '../../sanity/config/client-config';

interface Category {
  tech_stack: string[];
}

interface Project {
  _id: string;
  thumbnail_image: {
    asset: {
      url: string;
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

interface AllProjectsProps {
  projectsData: Project[];
  fetchedCategories: Category[];
}
const allProjects = async () => {

  const query = '*[_type=="all_projects"]';
  const projects = await client.fetch(query, { next: { revalidate: 60 } });
  return projects;
}

const categories = async () => {

  const query = '*[_type=="techStack"]';
  const categories = await client.fetch(query, { next: { revalidate: 60 } });
  return categories;
}

const AllProjects = async () => {
  const [fetchedCategories, projectsData] = await Promise.all([categories(), allProjects()])


  return (
    <div>
      <ProjectsData projectsData={projectsData} fetchedCategories={fetchedCategories} />
    </div>
  );
};

export default AllProjects;

export const revalidate = 60; 