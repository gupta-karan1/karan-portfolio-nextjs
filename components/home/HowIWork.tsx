import TextCard from "@/components/TextCard";
import { howIWork } from "@/constants";

function HowIWork() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10 ">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
        How I Work
      </h2>
      <div className="flex lg:grid lg:grid-cols-3  gap-10 items-center justify-center flex-wrap px-5 ">
        {howIWork.map((work, index) => (
          <TextCard
            key={work.title}
            title={work.title}
            description={work.description}
            styles="bg-base-100 lg:w-96 w-auto lg:h-80 h-auto border "
            icon={work.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default HowIWork;
