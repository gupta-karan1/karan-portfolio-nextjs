import React from "react";
import CompetitiveAnalysis from "./CompetitiveAnalysis";
import UserGoals from "./UserGoals";
import UserPersonas from "./UserPersonas";

function Research() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 bg-neutral-focus flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Research</h1>
      <CompetitiveAnalysis />
      <UserGoals />
      <UserPersonas />
    </section>
  );
}

export default Research;
