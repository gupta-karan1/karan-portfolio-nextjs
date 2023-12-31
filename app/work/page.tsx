import ProjectGrid from "@/components/ProjectGrid";
import ContactMe from "@/components/home/ContactMe";
import { webProjects, mobileProjects, graphicProjects } from "@/constants";

export default function Work() {
  return (
    <main>
      <section className="min-h-screen pt-20 px-5 pb-5">
        <div className="p-10">
          <h1 className=" text-6xl md:text-9xl font-bold text-primary-content text-center">
            Work
          </h1>
        </div>
        <div className=" flex gap-2 lg:gap-5 items-center justify-center p-5">
          <p className="lg:text-2xl  text-sm text-center">
            Quickly Navigate To:
          </p>

          <a className="btn btn-neutral btn-outline" href="#web">
            Web
          </a>
          <a className="btn btn-neutral btn-outline" href="#mobile">
            Mobile
          </a>
          <a className="btn btn-neutral btn-outline" href="#graphic">
            Branding
          </a>
        </div>

        <div className="min-h-screen py-10 px-5 mb-5" id="web">
          <h2 className=" text-3xl md:text-5xl font-bold text-primary-content text-center mb-10">
            Websites | Web Apps | UX UI Design
          </h2>
          <ProjectGrid projects={webProjects} />
        </div>
        <div className="min-h-screen py-10 px-5 mb-5" id="mobile">
          <h2 className=" text-3xl md:text-5xl font-bold text-primary-content text-center mb-10">
            Mobile Apps | UX UI Design
          </h2>
          <ProjectGrid projects={mobileProjects} />
        </div>

        <div className="min-h-screen py-10 px-5 " id="graphic">
          <h2 className=" text-3xl md:text-5xl font-bold text-primary-content text-center mb-10">
            Branding | Visual Design
          </h2>
          <ProjectGrid projects={graphicProjects} />
        </div>
      </section>
      <ContactMe />
    </main>
  );
}
