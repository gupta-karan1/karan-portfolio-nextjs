"use client";

import React, { useState } from "react";
import Image from "next/image";

const researchData = [
  {
    title: "Research Methods",
    content:
      "Stakeholder interviews to understand brand's existing image in the industry. Competitive analysis to understand how similar firms were presenting themselves. Reference mood boards to understand other websites that the stakeholders liked. User interviews to understand their needs and pain points. Analytics to understand user behavior on the existing website. Card sorting to understand stakeholder and user mental models. ",
    image: "/assets/ana-research.jpg",
  },
  {
    title: "User Insights",
    content:
      "Existing clients considered ANA as a reliable and trustworthy firm with a lot of technical knowledge and expertise. Existing website didn't reflect the firm's current brand story. Stakeholders wanted the website to be professional, modern and informative. They wanted to explorer project stories, firm's processes, and services offered. Potential clients wanted to know more about the firm's work, process, team, and culture. Potential employees wanted to know more about the firm's work, process, team, and culture. ",
    image: "/assets/ana-user-insights.jpg",
  },
  {
    title: "Market Insights",
    content:
      "ANA's competitors were presenting themselves as modern, young, and professional firms. They were using a lot of images of their projects and team. They were also using a lot of animations and videos to make their websites more engaging. Instead of relying on final built projects, they were also showcasing their design process and design thinking. Instead of using a lot of technical jargon, they were using simple language to explain their services because their clients were not architects or engineers. They were providing a lot of social proof by showcasing their clients and testimonials.",
    image: "/assets/ana-market.jpg",
  },
  {
    title: "Impact on Project",
    content:
      "The research helped in defining the project goals and scope. It developed a strong understanding the stakeholders and users needs and pain points. Competitive analysis helped in creating multiple differentiating factors. It helped in defining the content strategy (that included documenting 100+ projects) and the design direction that led to creation of brand principles, values, and style guidelines that further helped in creating the brand identity and website design. ",
    image: "/assets/ana-impact.jpg",
  },
];

function Research() {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <section className="min-h-screen bg-base-300 flex flex-col items-center justify-start py-10 lg:py-20 px-10 lg:px-20">
      <h1 className="text-6xl mb-10">Research</h1>

      <div className="grid  lg:grid-cols-4 grid-cols-2 gap-1 lg:gap-5">
        {researchData.map((data, index) => (
          <button
            key={index}
            className={`btn btn-secondary btn-outline ${
              active === index ? "btn-active " : ""
            }`}
            type="button"
            onClick={() => handleClick(index)}
          >
            {" "}
            {data.title}
          </button>
        ))}
      </div>

      {researchData.map((data, index) => (
        <div
          className={`card lg:card-side w-full bg-neutral mt-10  ${
            active === index ? "" : "hidden"
          }`}
          key={index}
        >
          <figure className="lg:w-8/12 w-full">
            <Image
              src={data.image}
              alt={data.title}
              width={1024}
              height={768}
            />
          </figure>

          <div className="card-body lg:w-96">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Research;
