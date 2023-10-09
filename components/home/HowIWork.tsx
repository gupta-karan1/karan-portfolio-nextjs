import TextCard from "@/components/TextCard";
import { howIWork } from "@/constants";

function HowIWork() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-16 py-10 lg:py-20 px-10 bg-base-300 ">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center">
        How I Work
      </h2>
      <div className="flex lg:grid lg:grid-cols-2  gap-10 items-center justify-center flex-wrap ">
        {howIWork.map((work) => (
          <TextCard
            key={work.title}
            title={work.title}
            description={work.description}
            styles="bg-primary text-primary-content lg:w-96 w-auto lg:h-80 h-auto "
            icon={work.icon}
          />
        ))}
      </div>
      <a href="/about" className="btn btn-outline">
        Know More{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </section>
  );
}

export default HowIWork;
