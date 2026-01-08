"use client";

import { Footer } from "@/components/Footer";
import { AboutHeader } from "@/components/AboutHeader";
import { AboutContentSection } from "@/components/AboutContentSection";
import { Plasma } from "@/components/Plasma";
import { GradientOrbs } from "@/components/animations/GradientOrbs";

export default function About() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen scroll-smooth selection:bg-indigo-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 w-full h-full opacity-30">
        <Plasma
          color="#5227FF"
          speed={0.5}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={true}
        />
      </div>
      
      <GradientOrbs className="fixed inset-0 z-0" />
      
      <div className="relative z-10">
        <AboutHeader />

      <section className="relative z-10 px-6 md:px-16 pt-32 pb-24 max-w-6xl mx-auto">
        <div className="space-y-32">
          <AboutContentSection
            title={
              <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100">
                Sobre <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">mim</span>
              </h1>
            }
            content={
              <>
                <p className="text-lg">
                  Desenvolvedor de software focado em criar interfaces bem pensadas,
                  código limpo e soluções simples para problemas complexos.
                </p>

                <p>
                  Trabalho com desenvolvimento web e mobile, sempre buscando
                  performance, boa experiência do usuário e produtos fáceis de
                  manter. Gosto de entender como as coisas funcionam nos bastidores
                  e transformar isso em soluções reais.
                </p>
              </>
            }
            imageSrc="/images/Gemini_Generated_Image_9s3u7l9s3u7l9s3u - Editado.png"
            imageAlt="Imagem representando desenvolvimento"
            imagePosition="right"
          />

          <AboutContentSection
            title="Mentalidade & Filosofia"
            content={
              <ul className="space-y-4">
                {[
                  "Código simples, organizado e bem estruturado",
                  "Performance e experiência do usuário lado a lado",
                  "Aprendizado contínuo como parte do processo",
                  "Boa comunicação e trabalho em equipe"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            }
            imageSrc="/images/gustagouveia2ndimage.png"
            imageAlt="Imagem representando processo e filosofia"
            imagePosition="left"
          />

          <AboutContentSection
            title="Além do código"
            content={
              <>
                <p>
                  Acompanho Fórmula 1, sou torcedor de carteirinha do Santa Cruz e pratico
                  natação, ciclismo e corrida regularmente.
                </p>

                <p>
                  Também gosto de desafios que exigem persistência e aprendizado
                  contínuo. Entre eles, <strong className="text-zinc-100">ELDEN RING</strong>{" "}
                  se destaca como um dos meus jogos favoritos.
                </p>

                <p>
                  Essa combinação de interesses influencia diretamente minha forma
                  de pensar, trabalhar e evoluir como desenvolvedor.
                </p>
              </>
            }
            imageSrc="/images/gustavogouveia3rdimage.png"
            imageAlt="Imagem representando hobbies e inspiração"
            imagePosition="right"
            imageHeight={500}
          />
        </div>
      </section>

      <Footer />
      </div>
    </main>
  );
}
