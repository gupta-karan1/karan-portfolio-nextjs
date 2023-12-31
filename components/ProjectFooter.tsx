import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

function ProjectFooter() {
  return (
    <section className=" lg:px-10 px-5">
      <div className="flex flex-col items-center justify-start py-10  ">
        <h1 className="text-6xl mb-10 text-primary font-bold">Thankyou!</h1>

        <div className="flex flex-col items-center justify-center gap-5 ">
          <h2 className="text-2xl text-primary-content text-center ">
            Interested in working together?
          </h2>
          <div className="md:btn-group flex flex-col lg:flex-row gap-5">
            <a href="/work" className="btn btn-ghost mb-2 md:mb-0">
              <ArrowLeftIcon className="w-5 h-5" /> View All Projects
            </a>
            <a
              href="mailto:karang6@gmail.com"
              className="btn btn-accent  text-primary-content"
            >
              Say Hello <ArrowUpRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectFooter;
