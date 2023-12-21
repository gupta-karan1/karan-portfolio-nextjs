import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";
import ProjectFooter from "@/components/ProjectFooter";

export const metadata: Metadata = {
  title: "ANA Brand Portfolio - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Architectural Legacy Unveiled:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Presenting ANA Design Studio's 26+ Years of Excellence Through a Brand
          Portfolio
        </h1>
        <p className="md:text-xl text-center">
          This project exemplifies the art of transforming extensive experience
          into a visually compelling portfolio. ANA Design Studio's brand
          portfolio stands as a testament to their architectural prowess,
          positioning them as a recognized thought leader in the industry.
        </p>
      </section>

      <Image
        src="/assets/ana-portfolio/portfolio-1.png"
        width="1920"
        height="1080"
        alt="ANA Brand portfolio"
        placeholder="blur"
        blurDataURL="/assets/ana-portfolio/portfolio-1.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Crafting a Timeless Portfolio for 26+ Years of Excellence in
          Architecture, Engineering & Construction
        </h2>
        <p>
          ANA Design Studio, a distinguished architecture consultancy in Delhi,
          India, embarked on a mission to showcase over 26 years of
          architectural expertise. Despite a rich history of 100+ projects, they
          lacked a documented portfolio. The goal was clear - to become a
          recognized industry thought leader and share their wealth of
          experience with experts, clients, academia, students, and potential
          hires.
        </p>

        <a
          href="https://issuu.com/anadesignstudio/docs/ana_portfolio_draft_31.03.2021_r2"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Draft Portfolio{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/ana-portfolio/portfolio-2.png"
        width="1920"
        height="1080"
        alt="ANA Brand portfolio"
        placeholder="blur"
        blurDataURL="/assets/ana-portfolio/portfolio-2.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>The Problem</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Hidden Brilliance Seeking Recognition in a Competitive Market
        </h2>
        <p>
          Despite their extensive experience, ANA Design Studio faced a critical
          void - none of their remarkable projects were documented. While other
          major architecture firms were leveraging portfolios to gain
          recognition, ANA Design Studio sought to join the ranks of industry
          leaders and gain the publicity they deserved.
        </p>
      </section>

      <Image
        src="/assets/ana-portfolio/portfolio-3.png"
        width="1920"
        height="1080"
        alt="ANA Brand portfolio"
        placeholder="blur"
        blurDataURL="/assets/ana-portfolio/portfolio-3.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
      <section className="max-w-3xl">
        <h3>The Solution</h3>
        <h2 className="font-semibold text-3xl mb-5">
          A 300+ Page Visual Chronicle of ANA Design Studio's Architectural
          Brilliance
        </h2>
        <p>
          After an intensive 3-month endeavor involving in-depth research,
          meticulous documentation, refinement of architectural graphics, and
          structuring a comprehensive portfolio, I brought ANA Design Studio's
          vision to life. Using Adobe InDesign, Photoshop, and Illustrator, I
          meticulously crafted a 300+ page brand portfolio. Each project case
          study adhered to a consistent layout, featuring compelling images and
          graphics that narrated the story of the project - from its
          architectural inception through engineering design, culminating in the
          construction stage.
        </p>
      </section>

      <Image
        src="/assets/ana-portfolio/portfolio-4.png"
        width="1920"
        height="1080"
        alt="ANA Brand portfolio"
        placeholder="blur"
        blurDataURL="/assets/ana-portfolio/portfolio-4.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
      <section className="max-w-3xl ">
        <h3>The Challenge</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Distilling Complexity into Simplicity to Create a Timeless Portfolio
        </h2>
        <p>
          The most formidable challenge lay in distilling 26+ years of prolific
          work into a concise, visually captivating portfolio. Designing each
          project case study as a narrative journey from conception to
          completion demanded finesse, ensuring avoidance of technical jargon.
          Maintaining consistency across diverse projects and aligning the brand
          portfolio with existing brand guidelines added an extra layer of
          complexity.
        </p>
      </section>
      <Image
        src="/assets/ana-portfolio/portfolio-1.png"
        width="1920"
        height="1080"
        alt="ANA Brand portfolio"
        placeholder="blur"
        blurDataURL="/assets/ana-portfolio/portfolio-1.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <ProjectFooter />
    </main>
  );
}

export default page;
