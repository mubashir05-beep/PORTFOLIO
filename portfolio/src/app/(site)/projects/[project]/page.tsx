

import { getProject } from "../../../../../sanity/sanity-utils";

type Props = {
  params: { project: string };
};

const Project =async ({ params }: Props) => {
  const slug = params.project;

      const fetchedProject = await getProject(slug);
      
console.log(fetchedProject)
  return (
    <div>
  
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {fetchedProject&&fetchedProject.project_name}
        </h1>
        
    </div>
  );
};

export default Project;
