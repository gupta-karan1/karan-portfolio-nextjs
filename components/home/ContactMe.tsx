import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function ContactMe() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 px-5 ">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
        Say Hello 👋
      </h2>

      <div className="flex flex-col w-full xl:w-9/12 border-opacity-50">
        <div className="grid lg:flex lg:flex-row lg:items-center lg:justify-center  gap-5 lg:grid-cols-2 card rounded-full place-items-center py-10  ">
          <h3 className="text-2xl flex items-center justify-center gap-5 text-primary-content">
            Write to me at{" "}
          </h3>
          <a
            className="btn btn-outline w-full lg:w-auto text-primary-content"
            href="mailto:karang6@gmail.com"
          >
            karang6@gmail.com <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="divider text-primary-content">OR</div>

        <div className="grid grid-cols-1  gap-4 lg:grid-cols-5 card   rounded-full place-items-center py-10  ">
          <a
            className="btn btn-outline w-full lg:w-auto text-primary-content "
            href="https://www.linkedin.com/in/karan-gupta-designer/"
          >
            LinkedIn <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto text-primary-content "
            href="https://wa.me/353851358902"
          >
            WhatsApp <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto text-primary-content "
            href="https://twitter.com/karang6"
          >
            Twitter <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto text-primary-content"
            href="https://www.instagram.com/gupta_.karan/"
          >
            Instagram <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            className="btn btn-outline w-full lg:w-auto text-primary-content "
            href="https://github.com/gupta-karan1"
          >
            GitHub <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
