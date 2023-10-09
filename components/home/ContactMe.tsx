import LinkArrow from "@/components/LinkArrow";
function ContactMe() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-16 py-10 lg:py-20 px-10 bg-base-300 ">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center">
        Impressed by what you see?{" "}
        <span className="text-md font-extralight text-accent">
          Contact Me Now!
        </span>
      </h2>

      <div className="flex flex-col w-full xl:w-9/12 border-opacity-50">
        <div className="grid lg:flex lg:flex-row lg:items-center lg:justify-center  gap-5 lg:grid-cols-2 card rounded-box place-items-center py-10 bg-neutral px-10 lg:px-0">
          <h3 className="text-2xl flex items-center justify-center gap-5">
            Write to me at{" "}
          </h3>
          <a
            className="btn btn-outline w-full lg:w-auto"
            href="mailto:karang6@gmail.com"
          >
            karang6@gmail.com <LinkArrow />
          </a>
        </div>
        <div className="divider">OR</div>
        <div className="grid grid-cols-1  gap-4 lg:grid-cols-5 card bg-neutral  rounded-box place-items-center py-10 px-10 lg:px-0">
          <a
            className="btn btn-outline w-full lg:w-auto "
            href="https://www.linkedin.com/in/karan-gupta-designer/"
          >
            LinkedIn <LinkArrow />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto "
            href="https://wa.me/353851358902"
          >
            WhatsApp <LinkArrow />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto "
            href="https://twitter.com/karang6"
          >
            Twitter <LinkArrow />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto "
            href="https://www.instagram.com/gupta_.karan/"
          >
            Instagram <LinkArrow />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto "
            href="https://github.com/gupta-karan1"
          >
            GitHub <LinkArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
