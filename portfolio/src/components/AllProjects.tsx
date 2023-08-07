import React from "react";
import { categories, allProjects } from "../../sanity/sanity-utils";

import ProjectsData from "./ProjectsData";

interface Category {
  tech_stack: string[];
}
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

const AllProjects: React.FC = async () => {
  const fetchedCategories: Category[] = await categories();
  const projectsData: Projects[] = await allProjects();

  return (
    <>
      <ProjectsData
        projectsData={projectsData}
        fetchedCategories={fetchedCategories}
      />
    </>
  );
};

export default AllProjects;
