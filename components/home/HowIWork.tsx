"use client";
import TextCard from "@/components/TextCard";
import { howIWork } from "@/constants";
import { motion } from "framer-motion";

function HowIWork() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 ">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
        How I Work
      </h2>
      <div className="flex lg:grid lg:grid-cols-3  gap-10 items-center justify-center flex-wrap px-5 ">
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
              styles="bg-base-200 lg:w-96 w-auto lg:h-80 h-auto shadow-xl "
              icon={work.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowIWork;
