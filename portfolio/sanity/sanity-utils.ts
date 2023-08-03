
import { client } from '../sanity/config/client-config';
import { createClient, groq } from "next-sanity";
export const getProjects = async () => {
  const query = '*[_type=="projects"]';
  const projects = await client.fetch(query);
  return projects ;
};
export const allProjects=async()=>{
  const query = '*[_type=="all_projects"]';
  const projects = await client.fetch(query);
  return projects ;
}
export const categories=async()=>{
  const query = '*[_type=="techStack"]';
  const projects = await client.fetch(query);
  return projects ;
}
interface Project {
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

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

