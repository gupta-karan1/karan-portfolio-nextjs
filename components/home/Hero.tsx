import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-10 lg:gap-20 place-items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl xl:text-7xl font-light ">
          Hi, I am <span className="font-bold text-primary">Karan.</span> <br />
        </h1>

        <h2 className="text-lg xl:text-2xl  text-primary-content">
          Architect turned UX/UI Designer with a flair for Frontend Development
          & 4 years of experience
        </h2>

        <h2 className="text-lg xl:text-xl text-primary-content ">
          I specialize in user-centered design, thrive in Agile environments,
          and craft compelling brand experiences.
        </h2>

        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/karan-gupta-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-primary-content"
          >
            LinkedIn <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing
        "
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-primary-content "
          >
            Resume <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <Image
        src="/profile-pic.jpg"
        width={600}
        height={600}
        alt="karan"
        className=" shadow-xl"
      />
    </section>
  );
}
