
import { client } from '../sanity/config/client-config';

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