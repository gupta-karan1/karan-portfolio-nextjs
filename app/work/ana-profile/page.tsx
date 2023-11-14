import ProjectFooter from "@/components/ProjectFooter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANA Brand Profile - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function AnaProfile() {
  return (
    <main className="bg-base-300">
      <section
        className="min-h-screen py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-profile/profile-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 lg:w-max p-3 rounded">
            <p className="text-md">
              Helping ANA Design Studio Achieve Their Business Goals:
            </p>
            <h1 className="text-4xl">ANA Brand Brochure/Profile</h1>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-profile/profile-2.png')",
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
              India, was struggling to pitch for new projects and clients. They
              needed a way to showcase their work and expertise in a way that
              would help them stand out from the competition with a simple,
              concise, and visually appealing digital & print profile.
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-profile/profile-3.png')",
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
              After thorough research, layout and content design, I designed a
              brand profile by highlighting the core services, social proof, and
              selected projects. It was designed using Adobe InDesign,
              Photoshop, Illustrator, for a digital PDF and a printed brochure.
              While compressing huge amount of content in a concise layout was a
              challenge, I ensuring a minimal, clean and brand-consistent
              design.
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end mb-5 "
        style={{
          backgroundImage: "url('/assets/ana-profile/profile-4.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 w-full lg:w-6/12 p-3 rounded">
            <h1 className="text-4xl mb-2">The Impact</h1>
            <p className="text-md ">
              Within weeks of launching the brand profile, ANA Design Studio was
              able to pitch for new projects as a sales tool to showcase their
              work and expertise to potential clients. It was sent out to
              potential skilled employees to attract talent. Two brand profiles
              were designed, one for complete services, and one for engineering
              services.
            </p>
          </div>
        </div>
      </section>
      <ProjectFooter />
    </main>
  );
}

export default AnaProfile;
