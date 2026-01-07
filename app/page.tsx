"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ScrollButton } from "@/components/ScrollButton";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import Aurora from "@/components/Aurora";

export default function Home() {
  const { isAtTop } = useScrollPosition();

  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-indigo-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 w-full h-full opacity-40">
        <Aurora
          colorStops={['#5227FF', '#FF9FFC', '#B19EEF']}
          amplitude={0.5}
          blend={0.8}
        />
      </div>
      
      <div className="relative z-10">
        <ScrollButton isAtTop={isAtTop} />
        <Header />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <Footer />
      </div>
    </main>
  );
}
