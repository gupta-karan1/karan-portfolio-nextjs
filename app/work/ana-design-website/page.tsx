import Hero from "@/components/ana-website/Hero";
import Context from "@/components/ana-website/Context";
import Problem from "@/components/ana-website/Problem";
import Objectives from "@/components/ana-website/Objectives";
import Research from "@/components/ana-website/Research";
import Design from "@/components/ana-website/Design";
import ProjectFooter from "@/components/ProjectFooter";
import Conclusion from "@/components/ana-website/Conclusion";

function AnaWebsiteProject() {
  return (
    <main>
      <Hero />
      <Context />
      <Problem />
      <Objectives />
      <Research />
      <Design />
      <Conclusion />
      <ProjectFooter />
    </main>
  );
}

export default AnaWebsiteProject;
