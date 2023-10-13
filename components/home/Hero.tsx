import Image from "next/image";
import LinkArrow from "../LinkArrow";

export default function Hero() {
  return (
    <section className=" grid grid-cols-1 lg:grid-flow-dense lg:grid-cols-2 bg-base-300 pt-20 pb-5 gap-2 min-h-screen px-5 ">
      <div className="lg:col-span-3 p-5 bg-primary rounded-3xl  ">
        <h1 className="text-6xl lg:text-9xl text-primary-content">
          Hi, I am Karan!
        </h1>
      </div>

      <div className="p-5 bg-secondary rounded-3xl ">
        <h2 className="text-2xl lg:text-6xl text-primary-content">
          I'm an Architect turned UX Designer with a flair for Frontend
          Development.
        </h2>
      </div>

      <div className="bg-accent p-5 rounded-3xl w-full ">
        <h3 className="text-xl lg:text-4xl text-primary-content">
          I specialize in user-centered design, thrive in Agile environments,
          and craft compelling brand experiences.
        </h3>
      </div>

      <div className="bg-success p-5 rounded-3xl grid place-items-center w-full ">
        <a
          href="https://www.linkedin.com/in/karan-gupta-designer/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline w-full text-success-content"
        >
          LinkedIn <LinkArrow />
        </a>
        <a
          href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing
            "
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline   w-full text-success-content"
        >
          Resume
          <LinkArrow />
        </a>
      </div>
      {/* <div className="bg-neutral bg-opacity-50 rounded-lg p-3 flex items-center justify-center flex-col gap-10 w-6/12">
        <h2 className="  text-2xl lg:text-3xl font-light  text-center">
          Architect turned UX Designer with a flair for Frontend Development.
        </h2>
        <h3 className="text-xl lg:text-2xl font-medium text-center">
          I design and build digital products that are intuitive, accessible and
          delightful to use.
        </h3>
        <p className="text-lg lg:text-2xl font-light text-center">
          Specializing in user-centered design, thriving in Agile environments,
          and crafting compelling brand experiences.
        </p>
      </div> */}

      {/* <div className="flex gap-5 ">
        <a
          href="https://www.linkedin.com/in/karan-gupta-designer/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline normal-case"
        >
          LinkedIn <LinkArrow />
        </a>
        <a
          href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing
            "
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline  normal-case"
        >
          Resume
          <LinkArrow />
        </a>
      </div> */}
    </section>
  );
}
