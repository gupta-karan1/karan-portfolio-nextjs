"use client";
import { motion } from "framer-motion";

import LinkArrow from "@/components/LinkArrow";

function ContactMe() {
  return (
    <section className="bg-base-300 px-5 ">
      <div className="flex flex-col justify-center items-center gap-10  py-10 rounded-3xl xl:rounded-full xl:rounded-se-lg bg-accent px-5 ">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          Say Hello
          <motion.div
            animate={{
              rotate: 30,
              scale: 1.5,
            }}
            transition={{
              duration: 0.1,
              ease: "anticipate",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className="inline-block ml-2"
          >
            👋
          </motion.div>
        </h2>

        <div className="flex flex-col w-full xl:w-9/12 border-opacity-50">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div className="grid lg:flex lg:flex-row lg:items-center lg:justify-center  gap-5 lg:grid-cols-2 card rounded-full place-items-center py-10  ">
              <h3 className="text-2xl flex items-center justify-center gap-5 text-primary-content">
                Write to me at{" "}
              </h3>
              <a
                className="btn btn-outline w-full lg:w-auto text-primary-content"
                href="mailto:karang6@gmail.com"
              >
                karang6@gmail.com <LinkArrow />
              </a>
            </div>
          </motion.div>
          <div className="divider text-primary-content">OR</div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div className="grid grid-cols-1  gap-4 lg:grid-cols-5 card   rounded-full place-items-center py-10  ">
              <a
                className="btn btn-outline w-full lg:w-auto text-primary-content "
                href="https://www.linkedin.com/in/karan-gupta-designer/"
              >
                LinkedIn <LinkArrow />
              </a>
              <a
                className="btn btn-outline w-full lg:w-auto text-primary-content "
                href="https://wa.me/353851358902"
              >
                WhatsApp <LinkArrow />
              </a>
              <a
                className="btn btn-outline w-full lg:w-auto text-primary-content "
                href="https://twitter.com/karang6"
              >
                Twitter <LinkArrow />
              </a>
              <a
                className="btn btn-outline w-full lg:w-auto text-primary-content"
                href="https://www.instagram.com/gupta_.karan/"
              >
                Instagram <LinkArrow />
              </a>
              <a
                className="btn btn-outline w-full lg:w-auto text-primary-content "
                href="https://github.com/gupta-karan1"
              >
                GitHub <LinkArrow />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
