"use client";

import { useState } from "react";
import { whyHireMe } from "@/constants";
import { motion } from "framer-motion";
import TextCard from "../TextCard";

function WhyHireMe() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className=" bg-base-300 px-5 pb-5">
      <div className="flex flex-col justify-center items-center gap-10 py-10 bg-secondary rounded-3xl lg:rounded-full lg:rounded-tr-3xl">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          Why Hire Me
        </h2>

        <div className="flex lg:grid lg:grid-cols-3  gap-10 items-center justify-center flex-wrap px-5 ">
          {whyHireMe
            .map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                key={index}
              >
                {/* <div className="chat chat-start" key={index}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="/profile-pic.jpg" title="avatar" />
                    </div>
                  </div>
                  <div className="chat-header text-secondary-content ">
                    {item.title}
                  </div>
                  <div className="chat-bubble bg-neutral-focus shadow-2xl">
                    {item.description}
                  </div>
                </div> */}
                <TextCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  styles="bg-neutral-focus text-neutral-content lg:w-96 w-auto lg:h-80 h-auto shadow-xl "
                  icon={item.icon}
                />
              </motion.div>
            ))
            .slice(0, showMore ? whyHireMe.length : 3)}

          {/* Show More messages */}
        </div>
        <button
          type="button"
          className="btn btn-outline text-accent-content"
          onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default WhyHireMe;
