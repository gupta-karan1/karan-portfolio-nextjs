import Image from "next/image";
import React from "react";

function Branding() {
  return (
    <section className="min-h-screen bg-base-300 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      <div className="card xl:card-side bg-neutral shadow-xl w-full ">
        <div className="card-body w-full xl:w-2/12">
          <h1 className="text-6xl mb-10 card-title">Branding </h1>
          <ul className="list-disc">
            <li>
              A warm color palette was chosen to reflect the warmth of the
              bakery.
            </li>

            <li>
              A diverse range of colors was selected to represent the diversity
              of the bakery products.
            </li>

            <li>
              High contrast text was used to ensure readability. Large text with
              extra large UI elements were used to ensure accessibility.
            </li>

            <li>
              A warm tone of voice was used to communicate the bakery's friendly
              and welcoming nature.
            </li>

            <li>
              Signika Negative, a common signage typeface, was used to ensure
              readability and familiarity.
            </li>

            <li>
              Rounded corners were used to reflect the softness of the bakery
              products.
            </li>

            <li>
              High quality photos of bakery products, bakers, and their
              processes were used to portray the bakery's authenticity.
            </li>
          </ul>
        </div>
        <figure className="w-full xl:w-8/12">
          <Image
            src="/assets/stone-bakery/stone-branding.png"
            alt="stone bakery branding"
            width={1024}
            height={768}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

export default Branding;
