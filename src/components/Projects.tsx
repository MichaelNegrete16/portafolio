"use client";

import { useEffect, useRef, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

const GITHUB_USERNAME = "MichaelNegrete16";

const manualProjects = [
  {
    title: "FinAI",
    description:
      "App de finanzas personales con análisis financiero impulsado por IA — patrones de gasto, recomendaciones de inversión, seguimiento de presupuestos y metas de ahorro con sugerencias accionables.",
    tech: ["Flutter", "Dart", "Supabase", "Groq AI", "Riverpod", "fl_chart"],
  },
  {
    title: "Portal de Pagos Multi-Pasarela",
    description:
      "Flujo de pago renderizado en servidor manejando múltiples proveedores con polling en tiempo real, validación dinámica, modales informativos y restricciones inteligentes de pasarela. Sirve tráfico real en producción.",
    tech: ["React", "TypeScript", "SSR", "REST APIs", "Vanilla JS"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: GitHubRepo[]) => setRepos(data))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  const langColor: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Dart: "#00B4AB",
    Python: "#3776AB",
    HTML: "#E34C26",
    CSS: "#563D7C",
    Ruby: "#CC342D",
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative grid-bg"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-[2px] bg-jdm-red" />
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-jdm-gray">
            03 &mdash; Proyectos Destacados
          </h2>
        </div>

        <h3
          className={`text-4xl md:text-5xl font-bold text-jdm-black mb-16 leading-tight ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Mis
          <br />
          <span className="text-jdm-red">Proyectos</span>
        </h3>

        {/* Featured Projects (from CV) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {manualProjects.map((project, idx) => (
            <div
              key={project.title}
              className={`project-card-jdm tech-border bg-white/70 backdrop-blur-sm ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Card Header */}
              <div className="bg-jdm-black text-jdm-cream px-6 py-3 flex justify-between items-center">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-jdm-red">
                  Destacado
                </span>
                <span className="font-[var(--font-jp)] text-jdm-cream/50 text-xs">
                  プロジェクト
                </span>
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-bold text-jdm-black mb-3">
                  {project.title}
                </h4>
                <p className="text-jdm-black/60 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold border border-jdm-black/20 text-jdm-black/70 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos - Oculto temporalmente
        TODO: Descomentar cuando los repos estén listos
        */}
      </div>
    </section>
  );
}
