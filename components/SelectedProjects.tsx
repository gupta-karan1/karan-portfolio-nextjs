import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import { homeProjects } from "@/constants";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

function SelectedProjects() {
  return (
    <section className=" min-h-screen flex flex-col gap-10 items-center justify-center">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center">
        Selected Works
      </h2>

      <ProjectGrid projects={homeProjects} />

      <Link href="/work" className="btn btn-outline ">
        Explore More Projects <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </section>
  );
}

export default SelectedProjects;
