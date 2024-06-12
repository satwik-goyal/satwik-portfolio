import Image from "next/image";
import HeroSection from "@/components/HeroSection";

import AboutSection from "@/components/AboutSection";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Education />
      </div>
    </>
  );
}
