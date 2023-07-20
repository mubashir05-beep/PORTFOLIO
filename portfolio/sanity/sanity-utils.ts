
import { client } from '../sanity/config/client-config';

export const getProjects = async () => {
  const query = '*[_type=="projects"]';
  const projects = await client.fetch(query);
  return projects ;
};