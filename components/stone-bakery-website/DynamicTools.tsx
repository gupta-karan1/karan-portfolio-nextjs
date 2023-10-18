import React from "react";

function DynamicTools() {
  return (
    <section className="min-h-screen bg-base-300 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      {/* <h1 className="text-6xl mb-10">Dynamic Tools </h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <video
          autoPlay
          loop
          muted
          width={450}
          height={900}
          className="rounded-3xl shadow-2xl  border-4 border-accent place-self-center"
        >
          <source
            src="/assets/stone-bakery/unit-converter.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col justify-between gap-5 w-full">
          <div className="bg-neutral self-start rounded-3xl p-5">
            <h3 className="text-2xl">Bakery Unit Convertor</h3>
            <p className="text-left">
              Converts units of measurements for baking ingredients. Allows home
              bakers to convert complex quantity and temperature units
              instantly.{" "}
            </p>
          </div>
          <div className="bg-neutral self-end rounded-3xl p-5">
            <h3 className="text-2xl text-right">Bakery Shopping List</h3>
            <p className="text-right">
              Creates a shopping list for home bakers. Allows them to add
              ingredients and quantities to the list. Serves as a reminder for
              the next time they go shopping.
            </p>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          width={450}
          height={900}
          className="rounded-3xl shadow-2xl  border-4 border-accent  place-self-center"
        >
          <source
            src="/assets/stone-bakery/shopping-list.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default DynamicTools;
