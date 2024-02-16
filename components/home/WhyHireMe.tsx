import { whyHireMe } from "@/constants";
import TextCard from "../TextCard";

function WhyHireMe() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-10">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
        Why Hire Me
      </h2>

      <div className="flex lg:grid lg:grid-cols-3 gap-10 lg:gap-20 items-center justify-center flex-wrap ">
        {whyHireMe.map((item, index) => (
          <TextCard
            key={item.title}
            title={item.title}
            description={item.description}
            styles="bg-base-100 lg:w-96 w-auto lg:h-80 h-auto border "
            icon={item.icon}
          />
        ))}

        {/* Show More messages */}
      </div>
    </section>
  );
}

export default WhyHireMe;
