"use client";

import { useEffect, useRef, useState } from "react";

const specs = [
  { label: "NOMBRE", value: "Michael Antonio Negrete" },
  { label: "ROL", value: "Ingeniero de Software Full Stack" },
  { label: "UBICACIÓN", value: "Cartagena, Colombia" },
  { label: "EXPERIENCIA", value: "+3 Años en Producción" },
  { label: "EDUCACIÓN", value: "Tecnólogo en Sistemas — UTB" },
  { label: "ESTADO", value: "Disponible para nuevos proyectos" },
  { label: "IDIOMAS", value: "Español (Nativo) / Inglés (Profesional)" },
  { label: "ENFOQUE", value: "React, Next.js, TypeScript, NestJS" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative stripe-pattern"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-[2px] bg-jdm-red" />
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-jdm-gray">
            01 &mdash; Ficha Técnica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Description */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-jdm-black mb-8 leading-tight">
              Construyendo
              <br />
              experiencias digitales
              <br />
              que <span className="text-jdm-red">rinden.</span>
            </h3>

            <p className="text-jdm-black/70 text-lg leading-relaxed mb-6">
              Ingeniero de Software Full Stack con historial comprobado
              entregando productos orientados al consumidor de extremo a extremo.
              Especializado en arquitectura frontend moderna, manejo de estado,
              testing integral y prácticas CI/CD.
            </p>

            <p className="text-jdm-black/70 text-lg leading-relaxed mb-8">
              He construido pasarelas de pago con SSR, reducido la complejidad
              del código en un 60%, y diseñado APIs RESTful con NestJS,
              sirviendo a miles de usuarios en producción.
            </p>

            <p className="font-[var(--font-jp)] text-jdm-black/30 text-2xl">
              コードは速く、正確に
            </p>
            <p className="text-sm text-jdm-gray italic mt-1">
              &quot;Código rápido, código preciso.&quot;
            </p>
          </div>

          {/* Right - Spec Table */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="tech-border bg-white/50 backdrop-blur-sm">
              <div className="bg-jdm-black text-jdm-cream px-6 py-3 flex justify-between items-center">
                <span className="text-xs font-bold tracking-[0.3em] uppercase">
                  Perfil del Desarrollador
                </span>
                <span className="font-[var(--font-jp)] text-jdm-red text-xs">
                  仕様書
                </span>
              </div>

              <div className="divide-y divide-jdm-black/10">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr]"
                  >
                    <div className="px-6 py-4 bg-jdm-black/5 text-xs font-bold tracking-wider text-jdm-gray uppercase">
                      {spec.label}
                    </div>
                    <div className="px-6 py-4 text-sm text-jdm-black font-medium">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
