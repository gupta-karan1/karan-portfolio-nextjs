import Objectives from "@/components/away-app/Objectives";
import Context from "@/components/away-app/Context";
import Hero from "@/components/away-app/Hero";
import Problem from "@/components/away-app/Problem";

import { Metadata } from "next";
import Research from "@/components/away-app/Research";
import Design from "@/components/away-app/Design";
import Development from "@/components/away-app/Development";
import Conclusion from "@/components/away-app/Conclusion";
import ProjectFooter from "@/components/ProjectFooter";
import UserFlow from "@/components/away-app/UserFlow";

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
      <Design />
      <Development />
      <UserFlow />

      <Conclusion />

      <ProjectFooter />
    </main>
  );
}

export default page;
