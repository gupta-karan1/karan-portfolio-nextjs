import Image from "next/image";
import { ArrowUpRightIcon, MapPinIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-5 lg:gap-20 place-items-center mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-1 ">
          <MapPinIcon className="w-5 h-5 text-accent" />

          <p className="text-md font-light">Dublin, Ireland</p>
        </div>

        <h1 className="text-4xl xl:text-7xl font-light ">
          Hi, I am <span className="font-bold text-primary">Karan.</span> <br />
        </h1>

        <h2 className="text-lg xl:text-2xl  ">
          I'm an architect turned UX/UI Designer & Developer with 4+ years of
          helping businesses grow through better user experiences for their
          digital products and web presence.
        </h2>

        <h2 className="text-lg xl:text-xl font-light ">
          I specialize in user-centered design, thrive in Agile environments and
          dynamic teams, and skilled at crafting compelling brand experiences.
        </h2>

        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/karan-gupta-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline "
          >
            LinkedIn <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing
        "
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline  "
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
        className=" w-full shadow-xl"
        loading="eager"
      />
    </section>
  );
}
