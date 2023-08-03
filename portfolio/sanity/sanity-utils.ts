
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
