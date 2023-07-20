import Image from "next/image";
import { getProjects } from "../../sanity/sanity-utils";
import { use, useEffect, useState } from "react";

// Assuming the Project type is defined in "../../sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projects &&
        projects.map((project: any) => (
          <div key={project._id}>{project.project_name}</div>
        ))}
    </main>
  );
}
