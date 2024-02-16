import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import { homeProjects } from "@/constants";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import HomeProjectCard from "@/components/HomeProjectCard";
import HomeProjectGrid from "./HomeProjectGrid";

function SelectedProjects() {
  return (
    <section className=" min-h-screen flex flex-col gap-10 items-center justify-center">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center">
        Selected Projects
      </h2>

      {/* <ProjectGrid projects={homeProjects} /> */}

      <HomeProjectGrid projects={homeProjects} />

      <Link href="/work" className="btn btn-accent btn-lg ">
        Explore All Projects <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </section>
  );
}

export default SelectedProjects;
