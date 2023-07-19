import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: string; // Use string type for ISO date format
  thumbnail_image: string;
  hero_image: string;
  project_name: string;
  slug: {
    current: string;
  };
  project_description_1: string;
  project_description_2: string;
  project_description_3: string;
  project_description_4: string;
  project_stack: string[];
  images_collection: {
    title: string;
    image: string;
  }[];
  live_link: string;
  repo_link: string;
};
