import React from "react";
import Challenges from "./Challenges";
import Workflow from "./Workflow";

function Conclusion() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-10 lg:px-20 bg-neutral-focus flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Conclusion</h1>

      <Challenges />
      <Workflow />
    </section>
  );
}

export default Conclusion;