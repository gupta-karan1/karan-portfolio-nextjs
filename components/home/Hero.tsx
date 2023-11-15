"use client";
import Image from "next/image";
import LinkArrow from "../LinkArrow";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export default function Hero() {
  const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

  const GradientBackground = styled(motion.div)`
    background: linear-gradient(
      to right,
      #1eb854 0%,
      #1db990 50%,
      #1db9ac 100%
    );
    background-size: 200% 200%;
    animation: ${gradientAnimation} 5s ease-in-out infinite;
  `;
  return (
    // <section className=" grid grid-cols-1 lg:grid-flow-dense lg:grid-cols-2 bg-base-300 pt-20 pb-5 gap-2 min-h-screen px-5 ">

    //   <div className="lg:col-span-3 p-10 bg-gradient-to-tr from-primary to-accent rounded-3xl  flex">
    //     <h1 className="text-6xl xl:text-8xl font-light text-primary-content  self-end">
    //       Hi, I am <span className="font-bold">Karan.</span>{" "}
    //       <br className="md:hidden" />
    //       <span className="text-xl xl:text-4xl">Based in Dublin, Ireland.</span>
    //     </h1>
    //   </div>

    //   <div className="p-10 bg-secondary rounded-3xl grid place-content-end ">
    //     <h2 className="text-2xl xl:text-4xl font-light text-primary-content">
    //       I'm an <span className="font-semibold">Architect</span> turned{" "}
    //       <span className="font-semibold">UX/UI Designer</span> with a flair for{" "}
    //       <span className="font-semibold">Frontend Development</span> and 3+
    //       years of experience.
    //     </h2>
    //   </div>

    //   <div className="bg-accent p-10 rounded-3xl grid place-content-end">
    //     <h3 className="text-2xl xl:text-4xl text-primary-content font-light">
    //       I specialize in{" "}
    //       <span className="font-semibold">user-centered design</span>, thrive in{" "}
    //       <span className="font-semibold">Agile</span> environments, and craft
    //       compelling <span className="font-semibold">brand</span> experiences.
    //     </h3>
    //   </div>

    //   <div className="bg-success p-10 rounded-3xl grid place-content-end gap-5  ">
    //     <a
    //       href="https://www.linkedin.com/in/karan-gupta-designer/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="btn btn-outline text-success-content w-full"
    //     >
    //       LinkedIn <LinkArrow />
    //     </a>
    //     <a
    //       href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing
    //         "
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="btn btn-outline text-success-content w-full"
    //     >
    //       Resume
    //       <LinkArrow />
    //     </a>
    //   </div>

    // </section>

    <section className="min-h-screen pt-20 px-5 pb-5 bg-base-300 grid place-content-center">
      {/* <motion.div
        initial={{
          background: "linear-gradient(to right, #1eb854 0%, #1db9ac 100%)",
        }}
        animate={{
          background: "linear-gradient(to right, #1db9ac 0%, #1eb854 100%)",
          transition: {
            duration: 0.01,
            repeat: Infinity,
          },
        }} */}
      <GradientBackground className="rounded-b-full lg:rounded-full lg:rounded-tl-lg p-5 lg:p-10 lg:ps-20 w-full h-full grid grid-cols-1 lg:grid-cols-2 place-content-center gap-5 lg:gap-10 2xl:gap-20">
        {/* <div className=" bg-gradient-to-br from-accent to-primary rounded-b-full lg:rounded-full lg:rounded-tl-lg p-5 lg:p-10 lg:ps-20 w-full h-full grid grid-cols-1 lg:grid-cols-2 place-content-center gap-5 lg:gap-10 2xl:gap-20"> */}
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
            <h1 className="text-4xl xl:text-7xl font-light text-primary-content  self-end">
              Hi, I am <span className="font-bold">Karan.</span> <br />
            </h1>
            <br />

            <h2 className="text-lg xl:text-2xl font-light text-primary-content">
              I'm an <span className="font-semibold">Architect</span> turned{" "}
              <span className="font-semibold">UX/UI Designer</span> with a flair
              for <span className="font-semibold">Frontend Development</span>{" "}
              and 4 years of experience.
            </h2>
            <br />
            <h2 className="text-lg xl:text-2xl text-primary-content font-light">
              I specialize in{" "}
              <span className="font-semibold">user-centered design</span>,
              thrive in <span className="font-semibold">Agile</span>{" "}
              environments, and craft compelling{" "}
              <span className="font-semibold">brand</span> experiences.
            </h2>
            <br />

            <div className="  flex gap-5">
              <a
                href="https://www.linkedin.com/in/karan-gupta-designer/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-primary-content"
              >
                LinkedIn <LinkArrow />
              </a>
              <a
                href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing
            "
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-primary-content "
              >
                Resume
                <LinkArrow />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <figure className="w-full h-full  ">
            <Image
              src="/profile-pic.jpg"
              width={900}
              height={900}
              alt="karan"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </figure>
        </motion.div>
        {/* </div> */}
        {/* </motion.div> */}
      </GradientBackground>
    </section>
  );
}
