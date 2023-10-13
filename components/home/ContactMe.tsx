import LinkArrow from "@/components/LinkArrow";
function ContactMe() {
  return (
    <section className="bg-base-300 px-5 ">
      <div className="flex flex-col justify-center items-center gap-10  py-10 rounded-3xl lg:rounded-t-full bg-accent ">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
          Say Hello 👋
        </h2>

        <div className="flex flex-col w-full xl:w-9/12 border-opacity-50">
          <div className="grid lg:flex lg:flex-row lg:items-center lg:justify-center  gap-5 lg:grid-cols-2 card rounded-full place-items-center py-10 bg-accent shadow-2xl px-10 lg:px-0">
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
          <div className="divider text-primary-content">OR</div>
          <div className="grid grid-cols-1  gap-4 lg:grid-cols-5 card bg-accent shadow-2xl  rounded-full place-items-center py-10 px-10 lg:px-0">
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
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
