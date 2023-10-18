import React from "react";
import Image from "next/image";

function LogoDesign() {
  return (
    <section className="min-h-screen bg-base-300 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      <div className="card xl:card-side bg-neutral shadow-xl w-full ">
        <div className="card-body w-full xl:w-4/12">
          <h1 className="text-6xl mb-10 card-title">Logo Design </h1>
          <ul className="list-disc">
            <li>
              It's a monogram logo with brand name written in a radial manner
              around the initials in a traditional stamp-like layout.
            </li>
            <li>
              The initial, 'S' for Stone is depicted by juxtaposing two bread
              loafs brought together and tilted to indicate the initial.
            </li>

            <li>
              The initial, 'B' for Bakery is depicted as a brad slice by
              extending the width of the letterform, adding a thick stroke to
              indicate the bread crust, and clipping a circle from the left to
              indicate a bite.
            </li>

            <li>
              4 distinct earthy colours derived from bread. The yellow and ruby
              red are primary colours.
            </li>

            <li>
              Signika Negative is used as typeface from Google Fonts. Signika is
              a sans-serif with a gentle character, developed for wayfinding,
              signage, and other media where clarity of information is required.
            </li>

            <li>
              A separate logo version is created for favicon and small screens
              where the radial text is removed and only the monogram remains.
            </li>
          </ul>
        </div>
        <figure className="xl:w-8/12">
          <Image
            src="/assets/stone-bakery/logo.jpg"
            alt="stone bakery branding"
            width={1024}
            height={768}
            className="w-full h-full"
          />
        </figure>
      </div>
    </section>
  );
}

export default LogoDesign;
