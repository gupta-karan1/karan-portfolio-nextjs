import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import { homeProjects } from "@/constants";

function SelectedProjects() {
  return (
    <section className="bg-base-300  px-5 ">
      <div className=" rounded-3xl lg:rounded-b-full bg-accent py-10 px-5 flex flex-col gap-10 items-center justify-center">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          Selected Works
        </h2>

        <ProjectGrid projects={homeProjects} />

        <Link href="/work" className="btn btn-outline text-primary-content ">
          Show All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default SelectedProjects;
