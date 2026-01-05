"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { ScrollButton } from "@/components/ScrollButton";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { isAtTop } = useScrollPosition();

  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-indigo-500/30 overflow-x-hidden">
      <BackgroundGrid />
      <ScrollButton isAtTop={isAtTop} />
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
