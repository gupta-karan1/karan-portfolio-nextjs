import React from "react";
import Image from "next/image";

function MobileFirst() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      <div className="card xl:card-side bg-neutral shadow-2xl w-full">
        <div className="card-body w-full xl:w-2/12">
          <h1 className="text-6xl mb-10 card-title">Mobile First Approach </h1>
          <p>
            The website was designed with a mobile first approach. This was
            because the bakery's target audience was home bakers who would
            primarily access the website on their mobile devices.
            <br />
            <br />
            This was achieved by designing the website for mobile devices first
            and then scaling up the design for larger screens. CSS media queries
            were used to ensure that the website was responsive on larger
            screens. An app like UX was achieved with this approach.
          </p>
        </div>
        <figure className="xl:w-8/12">
          <Image
            src="/assets/stone-bakery/stone-mobile.png"
            alt="stone bakery branding"
            width={1440}
            height={1080}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

export default MobileFirst;
