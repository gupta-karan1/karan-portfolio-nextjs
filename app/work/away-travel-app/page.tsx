import Objectives from "@/components/away-app/Objectives";
import Context from "@/components/away-app/Context";
import Hero from "@/components/away-app/Hero";
import Problem from "@/components/away-app/Problem";

import { Metadata } from "next";
import Research from "@/components/away-app/Research";

export const metadata: Metadata = {
  title: "Away App - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Context />
      <Problem />
      <Objectives />

      <Research />
      <section className="min-h-screen py-10 lg:py-20 px-10 lg:px-20 bg-base-100 flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl mb-10">Design</h1>
      </section>
      <section className="min-h-screen py-10 lg:py-20 px-10 lg:px-20 bg-base-300 flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl mb-10">Development</h1>
      </section>
      <section className="min-h-screen py-10 lg:py-20 px-10 lg:px-20 bg-base-100 flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl mb-10">Conclusion</h1>
      </section>
    </main>
  );
}

export default page;
