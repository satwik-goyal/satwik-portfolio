import Image from "next/image";
import HeroSection from "@/components/HeroSection";

import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </>
  );
}
