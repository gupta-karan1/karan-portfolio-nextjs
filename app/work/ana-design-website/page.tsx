import Hero from "@/components/ana-website/Hero";
import Context from "@/components/ana-website/Context";
import Problem from "@/components/ana-website/Problem";
import Objectives from "@/components/ana-website/Objectives";
import Research from "@/components/ana-website/Research";
import Design from "@/components/ana-website/Design";
import ProjectFooter from "@/components/ProjectFooter";

function AnaWebsiteProject() {
  return (
    <main>
      <Hero />
      <Context />
      <Problem />
      <Objectives />

      <Research />
      <Design />

      <section className="min-h-screen bg-base-300 flex flex-col items-center justify-start py-10 lg:py-20 px-10 lg:px-20">
        <h1 className="text-6xl mb-10">Conclusion</h1>
      </section>

      <ProjectFooter />
    </main>
  );
}

export default AnaWebsiteProject;
