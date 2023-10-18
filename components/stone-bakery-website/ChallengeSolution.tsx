import React from "react";

function ChallengeSolution() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 px-5 lg:px-10">
      <div className=" xl:w-5/12 p-10 bg-neutral rounded-3xl shadow-2xl">
        <h2 className="text-4xl mb-5">Challenge</h2>
        <p className="text-xl font-light">
          The Stone Bakery is a well established business that specializes in
          authentic breads and baked pastries. However they are becoming more
          aware of the home baking market that is looking for equipment, guides,
          and ingredients, both to a Dublin and national customer base. They
          wish to make the most of this new opportunity with a redesign to their
          web presence, specifically targeting the valuable 55 to 70 year old
          customers, who actually do shop with their mobile devices and have
          ready cash to spend.
        </p>
      </div>
      <div className="divider lg:divider-horizontal">AND</div>
      <div className="xl:w-5/12  bg-neutral rounded-3xl p-10 shadow-2xl ">
        <h2 className="text-4xl mb-5">Solution</h2>
        <p className="text-xl font-light">
          A bold, warm, and easy to use website that allows the bread lovers to
          build trust with this authentic bakery online (social proof). They
          will be able to know the history of the bakery, the bakers, and their
          reviews. It will allow them to buy their favorite bakery products,
          learn how to bake at home, and book a baking class. The website will
          be accessible to all users, especially the elder people, and will be
          responsive to all devices, adopting a mobile-first approach. It will
          have tools like Unit Converter and Shopping List to help them bake at
          home.
        </p>
      </div>
    </section>
  );
}

export default ChallengeSolution;
