import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import './globals.css'
// Assuming the Project type is defined in "../../sanity/sanity-utils"

export default function Home({}) {
  interface Ilinks {
    id: number;
    name: string;
    url: string ;
  }

  const linkData: Ilinks[] = [
    { id: 1, name: "Projects", url: "/projects" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <div className="flex justify-between ">
        <div>Mubsah1r</div>
        <ul>
          {linkData.map((data) => (
            <li key={data.id}>
              <Link href={data.url}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
// https://www.ahsankhan.me/
// Fetch projects here and pass them as props to Home component
export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}
