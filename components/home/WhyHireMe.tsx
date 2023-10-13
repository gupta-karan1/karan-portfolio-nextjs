"use client";

import { useState } from "react";
import { whyHireMe } from "@/constants";

function WhyHireMe() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className=" bg-base-300 px-5 pb-5">
      <div className="flex flex-col justify-center items-center gap-10 py-10 bg-secondary rounded-3xl lg:rounded-full lg:rounded-tr-3xl">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          Why Hire Me
        </h2>

        <div className="lg:w-6/12 w-full flex flex-col justify-center items-center gap-10">
          {whyHireMe
            .map((item, index) => (
              <div className="chat chat-start" key={index}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/profile.png" title="avatar" />
                  </div>
                </div>
                <div className="chat-header text-secondary-content ">
                  {item.title}
                </div>
                <div className="chat-bubble bg-secondary text-secondary-content shadow-2xl">
                  {item.description}
                </div>
              </div>
            ))
            .slice(0, showMore ? whyHireMe.length : 3)}

          {/* Show More messages */}

          <button
            type="button"
            className="btn btn-outline text-accent-content"
            onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;
