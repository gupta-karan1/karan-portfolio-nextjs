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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={index}
            >
              <TextCard
                key={work.title}
                title={work.title}
                description={work.description}
                styles="bg-base-100 text-neutral-content lg:w-96 w-auto lg:h-80 h-auto shadow-xl "
                icon={work.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
