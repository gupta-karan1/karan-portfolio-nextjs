"use client";

import { useState } from "react";
import { whyHireMe } from "@/constants";

function WhyHireMe() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-16 py-10 lg:py-20 px-10 bg-base-100 ">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center">
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
              <div className="chat-header ">{item.title}</div>
              <div className="chat-bubble">{item.description}</div>
            </div>
          ))
          .slice(0, showMore ? whyHireMe.length : 3)}

        {/* Show More messages */}

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default WhyHireMe;
