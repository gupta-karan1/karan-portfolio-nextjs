import { testimonials } from "@/constants";

function Testimonials() {
  return (
    <section className=" min-h-screen flex flex-col justify-center items-center gap-10">
      <h2 className=" text-4xl lg:text-5xl font-semibold text-center text-primary-content">
        Words of Appreciation
      </h2>

      <div className="flex flex-wrap gap-10 items-center justify-center xl:grid xl:grid-cols-3 xl:place-content-center  px-5 ">
        {testimonials.map((item, index) => (
          <div
            className="card w-auto h-auto xl:h-96  bg-base-100 border "
            key={index}
          >
            <div className="card-body justify-between">
              <div className="card-actions justify-end">
                <p>
                  <span className="text-6xl text-accent">"</span>
                  {item.description}
                </p>{" "}
              </div>
              <h2 className="card-title justify-end text-right mt-5 ">
                <a href={item.linkedin} className="hover:text-accent">
                  {item.name} <br />
                  <span className="text-sm font-light">
                    {item.designation}
                  </span>{" "}
                </a>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
