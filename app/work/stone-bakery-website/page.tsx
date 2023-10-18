import React from "react";
import { Metadata } from "next";
import ProjectFooter from "@/components/ProjectFooter";
import Hero from "@/components/stone-bakery-website/Hero";
import ChallengeSolution from "@/components/stone-bakery-website/ChallengeSolution";
import Branding from "@/components/stone-bakery-website/Branding";
import MobileFirst from "@/components/stone-bakery-website/MobileFirst";
import Wireframes from "@/components/stone-bakery-website/Wireframes";
import DynamicTools from "@/components/stone-bakery-website/DynamicTools";
import ShoppingCart from "@/components/stone-bakery-website/ShoppingCart";
import LogoDesign from "@/components/stone-bakery-website/LogoDesign";

export const metadata: Metadata = {
  title: "Stone Bakery Website - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ChallengeSolution />
      <Branding />
      <MobileFirst />
      <Wireframes />
      <DynamicTools />
      <ShoppingCart />
      <LogoDesign />

      <ProjectFooter />
    </main>
  );
}

export default page;
