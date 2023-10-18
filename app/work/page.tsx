import ProjectGrid from "@/components/ProjectGrid";
import ContactMe from "@/components/home/ContactMe";
import { allProjects } from "@/constants";

export default function Work() {
  return (
    <main>
      <section className="min-h-screen pt-20 px-5 bg-base-300 pb-5">
        <div className="  bg-gradient-to-br from-primary to-accent rounded-3xl p-5 py-20 mb-5">
          <h1 className=" text-6xl md:text-9xl font-bold text-primary-content text-center">
            Work
          </h1>
          <p className="text-2xl text-primary-content text-center">
            Here are some of my projects.
          </p>
        </div>

        <div className=" bg-neutral py-20 px-5 rounded-3xl">
          {/* Filter List
          <div className="btn-group mb-5">
            <button className="btn btn-neutral">All</button>
            <button className="btn btn-neutral">Web</button>
            <button className="btn btn-neutral">Mobile</button>
            <button className="btn btn-neutral">Design</button>
          </div> */}
          <ProjectGrid projects={allProjects} />
        </div>
      </section>
      <ContactMe />
    </main>
  );
}
