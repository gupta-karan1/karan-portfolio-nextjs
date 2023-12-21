import { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectFooter from "@/components/ProjectFooter";

export const metadata: Metadata = {
  title: "ANA Website - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function AnaWebsiteProject() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Elevating Architectural Excellence:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Redefining Web Presence for ANA Design Studio Pvt Ltd
        </h1>
        <p className="md:text-xl text-center">
          Mobile responsive business-portfolio website for an integrated
          architecture, engineering & construction consultancy to enhance their
          brand awareness & client acquisition
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-cover.jpg"
        width="1920"
        height="1080"
        alt="Ana Website Hero"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-cover.jpg"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Establishing ANA Design Studio as a thought leader in the building
          industry in India
        </h2>
        <p>
          ANA Design Studio is a 26 year old Delhi-based Architecture,
          Engineering & Construction Consultancy firm with a mid size team of
          highly skilled architects and engineers working on large scale
          commercial projects. They were known in the industry for providing
          integrated design, engineering and construction services unlike
          conventional firms of the same size. <br />
          <br />
          It was the COVID-19 pandemic that motivated ANA to focus on their
          digital presence to attract more clients and to hire skilled employees
          for future projects. The existing website was outdated and did not
          reflect the firm's current capabilities. It was not generating any
          leads and was not helping in brand awareness. They wanted to establish
          themselves as a thought leader in the industry and wanted to showcase
          their work to attract more clients.
        </p>

        <a
          href="https://ana-design.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Live <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      {/* <iframe
        width="900"
        height="506"
        src="https://www.youtube.com/embed/-v5KsE6YOis?si=MEbmL06hPEpg6smS"
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full md:max-w-3xl md:h-[506px]"
      ></iframe> */}

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-hero.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-hero.jpeg"
        />
      </div>
      <section className="max-w-3xl">
        <h3>Social Proof</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Leveraging social proof & testimonials to build trust with potential
          clients
        </h2>
        <p>
          Even though they had worked with over 35+ clients, they still relied
          on cold calling, emailing, and word of mouth, to pitch for projects to
          potential clients. It was unorganised, time consuming and not
          effective. <br />
          <br />
          Research phase allowed us to collect several client testimonials,
          numerical data, project locations, recognitions, publications, awards,
          and company's history. This helped in creating a strong social proof
          that was used throughout the website to build trust with potential
          clients.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-social.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-social.jpg"
      />

      <section className="max-w-3xl">
        <h3>Branding & Consistency</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Creating a brand style guide enabled consistency across web pages
          enhancing user experience
        </h2>
        <p>
          Budget, time, availability of team, and the lack of content &
          documentation were the biggest constraints. After several unsuccessful
          attempts with external agencies who didn’t understand the business of
          architecture, we had to create an in-house brand strategy, guidelines,
          and design system to ensure all the marketing collaterals communicate
          similar brand values. <br />
          <br />
          Brand colours and typography were selected based on the brand values
          of being professional, knowledgeable, and trustworthy. Everything had
          to be geometrical, clean, and convey growth. The style guide was
          created to maintain consistency in the design. Further this allowed us
          to create a design system that helped in creating the website faster.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-style.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-style.jpg"
      />

      <section className="max-w-3xl">
        <h3>Knowledge Bank</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Project case studies helped potential clients to acknowledge ANA as
          highly skilled professionals
        </h2>
        <p>
          They’ve been in business for 26 years and over 100+ projects across
          India, Africa, Middle East, with no documented proof. Existing
          portfolio template website had some photos of their final buildings.
          Potential clients didn't understand their design process, service
          benefits, and what made them different. <br />
          <br />
          Documenting & presenting 100+ projects was the most challenging task.
          Photos, drawings, and diagrams were refined. Facts and figures were
          collected. Case studies were created. This helped in attracting more
          clients and employees by establishing the firm as a thought leader in
          the industry.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-projects.jpg"
        width="1280"
        height="720"
        alt="ANA Project Case Study"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-projects.jpg"
      />
      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-case-study.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-case-study.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Services & Offerings</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Communicating the brand’s services effectively was most important to
          target the right clients
        </h2>
        <p>
          Most of their clients were high-valued professionals, usually CEOs &
          MDs of large organisations who would be very careful with their
          investments when approaching consultants for their real-estate
          projects. It’s one of the biggest investments of their business.{" "}
          <br />
          <br />
          While some clients wanted complete building solutions, some only
          wanted architecture design, some only needed engineering services, and
          some only wanted construction management for an existing project. So,
          we emphasised on communicating all of their services in the most
          elaborate & impactful manner to target the right kind of client needs.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-services.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-services.jpg"
      />

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-engineering.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-engineering.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Process over Product</h3>
        <h2 className="font-semibold text-3xl mb-5">
          High-quality images & graphics demonstrated their technical expertise
          and attention to detail
        </h2>
        <p>
          ANA’s competitors were modern, young, and professional firms. They
          used images of their projects and team, animations, and videos to make
          their websites more engaging. They showcased their design process and
          thinking instead of relying on final built projects. They used simple
          language to explain their services because their clients were not
          architects or engineers. <br />
          <br />
          So, we decided to extract diagrams from BIM (Building Information
          Modeling) models, refined architectural drawings, created 3D
          presentation diagrams using Adobe CC & Sketchup, collected and refined
          available project photographs before & after construction to create a
          visually impactful website. This not only showcased the final
          building, but also the process & design thinking behind the scenes.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-photos.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-photos.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Brand over Business</h3>
        <h2 className="font-semibold text-3xl mb-5">
          To trust a consultant firm, clients wanted to connect with human faces
          & stories on the website
        </h2>
        <p>
          The existing website had no human connection to the visitor. Existing
          clients considered ANA as a reliable and trustworthy firm with a lot
          of technical knowledge and expertise. Existing website didn't reflect
          the firm's current brand story. They wanted a trustworthy team.
          Potential clients & skilled employees wanted to know more about the
          firm's history, work, process, team, and culture. <br />
          <br />
          So, we decided to build the About page with the company’s history,
          design philosophy, process, team, values, culture, latest updates, and
          testimonials to build trust with visitors. We also introduced YouTube
          hosted video content of managers narrating their stories. This helped
          them better connect with people who’re hungry for adventurous stories.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-about.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-about.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Media & Updates</h3>
        <h2 className="font-semibold text-3xl mb-5">
          An updated blog, media & publications helped in SEO, retention and
          gained 2000+ views monthly
        </h2>
        <p>
          Their existing website had close to 15 views per month because of no
          regular updates or SEO. To maintain relevance with time, we created a
          content strategy to regularly update the website with the latest
          informative content. Blog was included to regularly post content about
          the firm's work, process, and culture. This would keep the website
          fresh and help in SEO. It would also help in establishing the firm as
          a thought leader in the industry. Latest news about any national
          awards, speaker opportunities at public events and any projects
          featured in publications were also showcased on the website to
          showcase expertise & recognition.
        </p>
      </section>

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-blog.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-blog.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Impact on Business</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Increased the number of leads and conversions by attracting 5
          long-term clients & 10 skilled employees in the first year
        </h2>
        <p>
          The first version of the website had to be deployed within a time
          frame of 5 weeks (March-April 2020) which included content design,
          layout and wordpress development. The second and final version was
          developed after 3 months of intensive brand revamp and content
          creation where the website took 6 weeks of work from design to
          development. The final version was deployed in March 2021. <br />
          <br />
          The new website increased the brand awareness and credibility among
          clients, academicians, students of architecture, and skilled employees
          in the industry. The management was able to demonstrate their skills
          and expertise by presenting their previous projects through case
          studies. The knowledge bank with the updated blog attracted over 20+
          skilled employees & interns in the next 3 years.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-impact.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-impact.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Challenges & Lessons</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Showcasing 100+ projects & 26 years in an impactful and seamless user
          experience was the biggest challenge
        </h2>
        <p>
          We had to ensure all high quality imagery was well optimised to avoid
          page loading delays. One of the biggest challenges with communicating
          architecture business was to create content that wasn't technical
          jargon but was able to convey the expertise of the company to
          non-technical clients. We understood the importance of research and
          how it helps in defining the project goals and scope. We realised the
          value of design principles and how it can help in creating a better
          brand identity and design system. Finally, we realised the
          significance and impact of communicating the brand’s values and
          offerings through a website design.
        </p>
      </section>

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-work.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-work.jpeg"
        />
      </div>

      <ProjectFooter />
    </main>
  );
}

export default AnaWebsiteProject;
