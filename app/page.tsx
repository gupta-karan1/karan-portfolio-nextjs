import SelectedProjects from "@/components/SelectedProjects";
import Hero from "../components/home/Hero";
import HowIWork from "@/components/home/HowIWork";
import WhyHireMe from "@/components/home/WhyHireMe";
import ContactMe from "@/components/home/ContactMe";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />

      <SelectedProjects />
      <HowIWork />

      <WhyHireMe />
      <Testimonials />

      <ContactMe />
    </main>
  );
}
