"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Ingeniero de Software Full Stack";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Scanner line effect */}
      <div className="scanner-line" />

      {/* Decorative vertical text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="vertical-text font-[var(--font-jp)] text-jdm-black/10 text-6xl font-bold tracking-widest">
          ハチロク
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Top label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-jdm-red" />
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-jdm-gray">
                Desde 2023 &mdash; Cartagena, Colombia
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-bold text-jdm-black leading-[0.9] mb-6 tracking-tight">
              MICHAEL
              <br />
              <span className="text-jdm-red">NEGRETE</span>
            </h1>

            {/* Typewriter subtitle */}
            <div className="mb-8 h-8">
              <p className="text-xl md:text-2xl font-medium text-jdm-gray">
                {displayText}
                <span className="animate-pulse text-jdm-red">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-jdm-black/60 max-w-xl mb-10 leading-relaxed">
              +3 años construyendo y escalando aplicaciones web en producción
              con TypeScript, React y Next.js. Enfocado en rendimiento, calidad
              de código y experiencia de usuario excepcional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="bg-jdm-red text-jdm-cream px-8 py-4 font-semibold tracking-wider uppercase text-sm hover:bg-jdm-red-dark transition-colors duration-300"
              >
                Ver Proyectos
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="border-2 border-jdm-black text-jdm-black px-8 py-4 font-semibold tracking-wider uppercase text-sm hover:bg-jdm-black hover:text-jdm-cream transition-colors duration-300"
              >
                Contáctame
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-16 pt-8 border-t border-jdm-black/10">
              <div>
                <p className="text-3xl font-bold text-jdm-black">3+</p>
                <p className="text-sm text-jdm-gray uppercase tracking-wider">
                  Años Exp.
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-jdm-black">3+</p>
                <p className="text-sm text-jdm-gray uppercase tracking-wider">
                  Apps en Producción
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-jdm-black">60%</p>
                <p className="text-sm text-jdm-gray uppercase tracking-wider">
                  Complejidad Reducida
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden lg:block">
            <div className="tech-border">
              {/* Image header bar */}
              <div className="bg-jdm-black text-jdm-cream px-4 py-2 flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-jdm-red">
                  AE86 // PROJECT_86
                </span>
                <span className="font-[var(--font-jp)] text-jdm-cream/40 text-[10px]">
                  ハチロク・ガレージ
                </span>
              </div>
              <Image
                src="/hero-bg.jpg"
                alt="JDM AE86 Cyberpunk"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Decorative label below image */}
            <div className="absolute -bottom-4 -right-4 bg-jdm-red text-jdm-cream px-4 py-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                Est. 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
