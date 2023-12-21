"use client";

import { useState } from "react";
import { whyHireMe } from "@/constants";
import { motion } from "framer-motion";
import TextCard from "../TextCard";

function WhyHireMe() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
        Why Hire Me
      </h2>

      <div className="flex lg:grid lg:grid-cols-3 gap-10  lg:gap-20 items-center justify-center flex-wrap ">
        {whyHireMe
          .map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={index}
            >
              <TextCard
                key={item.title}
                title={item.title}
                description={item.description}
                styles="bg-base-200 lg:w-96 w-auto lg:h-80 h-auto shadow-xl "
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
    </section>
  );
}

export default WhyHireMe;
