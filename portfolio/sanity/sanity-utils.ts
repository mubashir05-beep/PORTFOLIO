import { client } from "../sanity/config/client-config";
import { createClient, groq } from "next-sanity";
export const getProjects = async () => {
  const query = '*[_type=="projects"]';
  const projects = await client.fetch(query, {
    next: { next: { revalidate: 60 } },
  });
  return projects;
};

export const revalidate = 60;
