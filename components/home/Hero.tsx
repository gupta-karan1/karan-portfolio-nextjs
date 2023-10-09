import LinkArrow from "../LinkArrow";

export default function Hero() {
  return (
    <section className=" heroBg pt-10 gap-16 flex flex-col items-center min-h-screen justify-center px-10">
      <h1 className="text-6xl lg:text-9xl text-center">
        Hi, I am <span className="text-accent"> Karan</span>
      </h1>
      {/* <h2 className="text-2xl lg:text-3xl w-full  lg:w-6/12   font-light  text-center p-3 bg-neutral bg-opacity-50 rounded-lg">
        I'm an Architect turned
        <span className="text-accent"> UX/UI Designer </span>
        with proficiency in
        <span className="text-accent"> Frontend Development </span> and 3+ years
        of work experience.
      </h2> */}
      <div className="bg-neutral bg-opacity-50 rounded-lg p-3 flex items-center justify-center flex-col gap-10 w-6/12">
        <h2 className="  text-2xl lg:text-3xl font-light  text-center">
          Architect turned UX Designer with a flair for Frontend Development.
        </h2>

        <p className="text-lg lg:text-2xl font-light text-center">
          Specializing in user-centered design, thriving in Agile environments,
          and crafting compelling brand experiences.
        </p>
      </div>

      <div className="flex gap-5 ">
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
      </div>
    </section>
  );
}
