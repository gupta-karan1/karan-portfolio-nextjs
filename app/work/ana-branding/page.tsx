import ProjectFooter from "@/components/ProjectFooter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANA Branding - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function AnaBranding() {
  return (
    <main className="bg-base-300">
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-branding/branding-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-neutral-content">
          <div className="bg-neutral bg-opacity-90 lg:w-max p-3 rounded">
            <p className="text-md">
              Transforming ANA Design Studio's Business into a Brand:
            </p>
            <h1 className="text-4xl">ANA's Branding & Content Strategy</h1>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-branding/branding-2.png')",
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
              India, had a really strong reputation among its existing clients,
              but all was dependant on the word of mouth. There was no digital
              presence. The company was doing well as a business but didn't have
              a brand strategy to grow as the world was moving towards digital.
              While the company had highly skilled employees, they were not able
              to digitally communicate their story to their potential clients.
              The company needed a brand strategy to grow and expand its
              business.
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end "
        style={{
          backgroundImage: "url('/assets/ana-branding/branding-4.png')",
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
              With my experience in architecture and branding, I was employed to
              help them establish their brand identity and digital presence. We
              started of by conducting a brand audit and competitor analysis. We
              then worked on the brand strategy and brand guidelines to direct
              the team towards communicating their brand values through all of
              their communications. We then worked on creating a content
              strategy aligned with the needs of our potential clients instead
              of simply bragging about our work.
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[1080px] py-5 px-10 flex flex-col justify-end mb-5  "
        style={{
          backgroundImage: "url('/assets/ana-branding/branding-3.png')",
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
              Within 2 years, ANA Design Studio was able to create a strong
              brand presence by gaining over 4000+ followers on LinkedIn, and
              2000+ traffic on their website. Email newsletter subscribers
              started to enjoy the content and the company was able to generate
              leads through the branding efforts. They able to grow its business
              by 30% in the first year of implementing the brand strategy. They
              were able to establish themselves as a brand and not just a
              business. People were able to connect with the brand and its
              values.
            </p>
          </div>
        </div>
      </section>

      <ProjectFooter />
    </main>
  );
}

export default AnaBranding;
