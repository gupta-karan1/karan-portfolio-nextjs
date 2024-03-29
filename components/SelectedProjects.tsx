import Link from "next/link";
import { homeProjects } from "@/constants";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import HomeProjectGrid from "./HomeProjectGrid";

function SelectedProjects() {
  return (
    <section className=" min-h-screen flex flex-col gap-10 items-center justify-center">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center">
        Selected Projects
      </h2>

      {/* <ProjectGrid projects={homeProjects} /> */}

      <HomeProjectGrid projects={homeProjects} />

      <Link href="/work" className="btn btn-outline btn-lg mt-10 mb-10 w-full">
        Explore All Projects <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </section>
  );
}

export default SelectedProjects;
