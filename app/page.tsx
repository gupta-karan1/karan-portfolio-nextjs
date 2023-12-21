import SelectedProjects from "@/components/SelectedProjects";
import WhyHireMe from "@/components/home/WhyHireMe";
import ContactMe from "@/components/home/ContactMe";
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="pt-20 lg:pt-10 flex flex-col gap-5 lg:gap-20 px-5 lg:px-20">
      <Hero />

      <SelectedProjects />

      <Testimonials />

      <WhyHireMe />

      <ContactMe />
    </main>
  );
}
