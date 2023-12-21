"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="min-h-screen pt-20 px-5 pb-5 grid place-content-center">
      <div className="p-5 lg:p-10 lg:ps-20 w-full h-full grid grid-cols-1 lg:grid-cols-2 place-content-center gap-5 lg:gap-10 2xl:gap-20">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="grid place-content-center"
        >
          <div>
            <h1 className="text-4xl xl:text-7xl font-bold text-primary  self-end">
              About Me <br />
            </h1>
            <br />

            <h2 className="text-lg xl:text-xl font-light text-primary-content">
              Hi, I'm Karan Gupta, currently living in Dublin, Ireland.
              Originally from New Delhi, India. I am highly self motivated and
              passionate person with a keen interest in technology and design.
            </h2>
            <br />
            <h2 className="text-lg xl:text-xl text-primary-content font-light">
              Outside work, you'll find me reading books, specifically
              non-fiction ones. I also enjoy traveling and exploring new places.
              I would often learn new skills and try to improve upon my
              strengths and weaknesses.
            </h2>
            <br />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <figure>
            <Image
              src="/assets/about/profile/profile-about2.jpg"
              width={600}
              height={600}
              alt="karan"
              className="object-cover object-center"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
