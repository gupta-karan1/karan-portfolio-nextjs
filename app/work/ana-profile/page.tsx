import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectFooter from "@/components/ProjectFooter";

export const metadata: Metadata = {
  title: "ANA Brand Profile - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Communicating Architecture Services:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Helping ANA Design Studio Achieve Their Business Goals with a Brand
          Profile
        </h1>
        <p className="md:text-xl text-center">
          The strategic fusion of design elements, technological finesse, and
          compelling content yielded tangible results, positioning ANA Design
          Studio for success in both project acquisition and talent attraction.
        </p>
      </section>

      <Image
        src="/assets/ana-profile/profile-1.png"
        width="1920"
        height="1080"
        alt="ANA Brand Profile"
        placeholder="blur"
        blurDataURL="/assets/ana-profile/profile-1.png"
        className="mb-10 w-full 2xl:max-w-7xl"
        loading="eager"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Crafting a Distinctive Identity for ANA Design Studio's Architectural
          Brilliance
        </h2>
        <p>
          In the heart of Delhi, India, ANA Design Studio faced a pivotal
          challenge—conveying their architectural prowess to secure new projects
          and clients. This case details the development of a compelling brand
          brochure/profile, strategically crafted for both digital and print
          mediums, to establish a distinctive presence in a competitive market.
        </p>

        <a
          href="https://issuu.com/anadesignstudio/docs/ana_company_profile_r3"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Comprehensive Profile{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/ana-profile/profile-2.png"
        width="1920"
        height="1080"
        alt="ANA Brand Profile"
        placeholder="blur"
        blurDataURL="/assets/ana-profile/profile-2.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>The Challenge</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Pitching Problems for Skilled Architects & Engineers in a Competitive
          Market
        </h2>
        <p>
          ANA Design Studio grappled with project acquisition, lacking a
          compelling showcase of their work and expertise. The imperative was to
          create a succinct, visually striking digital and print profile capable
          of leaving a lasting impression on potential clients and skilled
          professionals.
        </p>
      </section>

      <Image
        src="/assets/ana-profile/profile-3.png"
        width="1920"
        height="1080"
        alt="ANA Brand Profile"
        placeholder="blur"
        blurDataURL="/assets/ana-profile/profile-3.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
      <section className="max-w-3xl">
        <h3>The Solution</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Crafting Brilliance in Design and Content Fusion to Achieve Business
          Goals
        </h2>
        <p>
          Responding to this challenge demanded a holistic approach. Extensive
          research, meticulous layout planning, and content design efforts were
          deployed to create a brand profile that accentuated core services,
          social proof, and select projects. The integration of Adobe InDesign,
          Photoshop, and Illustrator ensured a seamless fusion of aesthetics and
          functionality in both digital PDF and printed brochures. The art of
          condensing vast content into a concise layout was mastered through a
          commitment to minimalism, cleanliness, and brand consistency.
        </p>
      </section>

      <Image
        src="/assets/ana-profile/profile-4.png"
        width="1920"
        height="1080"
        alt="ANA Brand Profile"
        placeholder="blur"
        blurDataURL="/assets/ana-profile/profile-4.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
      <section className="max-w-3xl ">
        <h3>The Impact</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Transformation Unleashed for ANA Design Studio in Project Acquisition
          and Talent Attraction
        </h2>
        <p>
          The unveiling of the brand profile marked a turning point for ANA
          Design Studio. In a matter of weeks, it evolved into a potent sales
          tool, facilitating impactful project pitches and showcasing their
          expertise to potential clients. Beyond its sales utility, the profile
          became a talent magnet, attracting skilled professionals to the
          studio. Notably, two distinct profiles emerged—one encompassing
          complete services and another tailored specifically for engineering
          services, effectively catering to diverse audience segments.
        </p>

        <a
          href="https://issuu.com/anadesignstudio/docs/ana_company_profile_engineering_8.5x8.5"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Engineering Profile{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>
      <Image
        src="/assets/ana-profile/profile-1.png"
        width="1920"
        height="1080"
        alt="ANA Brand Profile"
        placeholder="blur"
        blurDataURL="/assets/ana-profile/profile-1.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <ProjectFooter />
    </main>
  );
}

export default page;
