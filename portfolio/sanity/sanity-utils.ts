
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
// interface Project {
//   _id: string;
//   thumbnail_image: {
//     asset: {
//       url: string | any;
//       // Add other properties from the 'thumbnail_image' field here if needed
//     };
//     // Add other properties from the 'thumbnail_image' field here if needed
//   };
//   project_name: string;
//   slug: string;
//   project_description: string;
//   project_stack: string[];
//   live_link: string;
//   repo_link: string;
// }
// export async function getProject() {
//   const query = `*[_type == "product"]{
//     slug {
//       current
//     }
//   }`;
//   const products: Project[] = await client.fetch(query);
//   const paths = products.map((product) => ({
//     params: {
//       slug: product.slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }

// export async function getProjectProps({ params: { slug } }) {
//   const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
//   const product: Project = await client.fetch(query);

//   return {
//     props: {
//       project: product,
//     },
//   };
// }
