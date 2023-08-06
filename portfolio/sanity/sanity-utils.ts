
import { client } from '../sanity/config/client-config';
import { createClient, groq } from "next-sanity";
export const getProjects = async () => {
  const revalidate = 60 //Time interval
  const query = '*[_type=="projects"]';
  const projects = await client.fetch(query,{next: {revalidate}});
  return projects ;
};
export const allProjects=async()=>{
  const revalidate = 60 //Time interval
  const query = '*[_type=="all_projects"]';
  const projects = await client.fetch(query,{next: {revalidate}});
  return projects ;
}
export const categories=async()=>{
  const revalidate = 60 //Time interval
  const query = '*[_type=="techStack"]';
  const projects = await client.fetch(query,{next: {revalidate}});
  return projects ;
}

export const revalidate = 60; 