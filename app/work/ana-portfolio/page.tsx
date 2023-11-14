import ProjectFooter from "@/components/ProjectFooter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANA Brand Portfolio - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function AnaPortfolio() {
  return (
    <main className="bg-base-300">
      <section
        className="min-h-screen py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-portfolio/portfolio-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 lg:w-max p-3 rounded">
            <p className="text-md">
              Presenting ANA Design Studio's 26+ Years of Excellence:
            </p>
            <h1 className="text-4xl">ANA's Brand Portfolio</h1>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-portfolio/portfolio-2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 w-full lg:w-6/12 p-3 rounded">
            <h1 className="text-4xl mb-2">The Problem</h1>
            <p className="text-md ">
              ANA Design Studio, an architecture consultancy based in Delhi,
              India, had over 26 years of experience in the industry, but they
              had not documented any of their 100+ projects. They wanted a way
              to showcase their vast experience, knowledge, and expertise with
              industry experts, potential clients, academicians, students of
              architecture, and employees. Most large scale architecture
              companies were already publishing their portfolio and gaining a
              lot of publicity and recognition. ANA Design Studio wanted to do
              the same, to become a thought leader in the industry.
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-portfolio/portfolio-4.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 w-full lg:w-6/12 p-3 rounded">
            <h1 className="text-4xl mb-2">The Solution</h1>
            <p className="text-md ">
              After 3 months of research, documentation, polishing architecture
              graphics, and creating a portfolio structure divided by project
              types, I designed a 300+ page brand portfolio using Adobe
              InDesign, Photoshop and Illustrator. Every project case study was
              designed with a consistent layout, images and graphics, all
              telling the story of the project from the architectural stage, to
              engineering design, finishing at the construction stage.
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end mb-5 "
        style={{
          backgroundImage: "url('/assets/ana-portfolio/portfolio-3.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 w-full lg:w-6/12 p-3 rounded">
            <h1 className="text-4xl mb-2">The Challenge</h1>
            <p className="text-md ">
              The biggest challenge was to compress 26+ years of work and
              experience into a concise, minimal, and visually appealing
              portfolio. Designing a project case study based on its story from
              start to finish was a challenge along with ensuring technical
              jargon was avoided. I had to ensure that the design was consistent
              across all projects, and that the brand portfolio was consistent
              with the brand guidelines.
            </p>
          </div>
        </div>
      </section>
      <ProjectFooter />
    </main>
  );
}

export default AnaPortfolio;
