import Image from "next/image";
import { getProjects } from "../../sanity/sanity-utils";
import { use, useEffect, useState } from "react";
import Hom from "@/components/Hom";
import AnotherComponent from "@/components/AnotherComponent";

// Assuming the Project type is defined in "../../sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <Hom/>
      <AnotherComponent/>
    </div>
  );
}
