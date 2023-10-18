"use client";
import TextCard from "@/components/TextCard";
import { howIWork } from "@/constants";
import { motion } from "framer-motion";

function HowIWork() {
  return (
    <section className="bg-base-300 p-5  ">
      <div className="flex flex-col justify-center items-center gap-10 py-10 bg-primary rounded-3xl lg:rounded-full lg:rounded-s-lg ">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          How I Work
        </h2>
        <div className="flex lg:grid lg:grid-cols-2  gap-10 items-center justify-center flex-wrap px-5 ">
          {howIWork.map((work, index) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              key={index}
            >
              <TextCard
                key={work.title}
                title={work.title}
                description={work.description}
                styles="bg-neutral-focus text-neutral-content lg:w-96 w-auto lg:h-80 h-auto shadow-xl "
                icon={work.icon}
              />
            </motion.div>
          ))}
        </div>
        {/* <a href="/about" className="btn btn-outline text-primary-content">
          Know More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a> */}
      </div>
    </section>
  );
}

export default HowIWork;
