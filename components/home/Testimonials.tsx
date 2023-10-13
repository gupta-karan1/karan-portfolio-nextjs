"use client";

import { testimonials } from "@/constants";
import LinkArrow from "@/components/LinkArrow";
import { useState } from "react";

function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-base-300 px-5 pb-5">
      <div className="flex flex-col justify-center items-center gap-10 py-10 rounded-3xl lg:rounded-full lg:rounded-ss-sm bg-success">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          Testimonials
        </h2>

        <div className="flex flex-wrap gap-10 items-center justify-center xl:grid xl:grid-cols-3 xl:w-10/12 ">
          {testimonials
            .map((item, index) => (
              <div
                className="card w-auto h-auto xl:h-96  bg-neutral-focus shadow-xl "
                key={index}
              >
                <div className="card-body justify-between">
                  <div className="card-actions justify-end">
                    <p>
                      <span className="text-6xl text-accent">"</span>
                      {item.description}
                    </p>{" "}
                  </div>
                  <h2 className="card-title justify-end text-right mt-5 ">
                    <a href={item.linkedin} className="hover:text-accent">
                      {item.name} <br />
                      <span className="text-sm font-light">
                        {item.designation}
                      </span>{" "}
                    </a>
                  </h2>
                </div>
              </div>
            ))
            .slice(0, showMore ? testimonials.length : 3)}
        </div>

        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="btn btn-outline text-primary-content"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
