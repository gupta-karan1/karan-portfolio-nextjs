import SelectedProjects from "@/components/SelectedProjects";
import WhyHireMe from "@/components/home/WhyHireMe";
import ContactMe from "@/components/home/ContactMe";
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main className="pt-20 lg:pt-10 flex flex-col gap-20 px-5 lg:px-10 ">
      <Hero />

      <SelectedProjects />

      <Testimonials />
      <Skills />
      <WhyHireMe />

      <ContactMe />
    </main>
  );
}
