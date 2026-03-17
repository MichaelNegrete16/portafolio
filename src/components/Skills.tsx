"use client";

import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  title: string;
  titleJp: string;
  skills: { name: string; level: number }[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    titleJp: "フロントエンド",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
    ],
  },
  {
    title: "Backend",
    titleJp: "バックエンド",
    skills: [
      { name: "NestJS", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "TypeORM", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "OAuth 2.0", level: 75 },
    ],
  },
  {
    title: "Herramientas y DevOps",
    titleJp: "ツール",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Jest / RTL", level: 80 },
      { name: "SonarQube", level: 75 },
    ],
  },
];

const styleSkills = [
  "SASS/SCSS",
  "Material UI",
  "CSS Modules",
  "Tailwind CSS",
  "Diseño Responsivo",
  "Mobile-First",
];

const exploringSkills = [
  "Ruby on Rails",
  "GraphQL",
  "Flutter/Dart",
  "Integración AI/LLM",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimatedBars(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-jdm-black text-jdm-cream relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,241,234,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-[2px] bg-jdm-red" />
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-jdm-gray">
            02 &mdash; Piezas de Rendimiento
          </h2>
        </div>

        <h3
          className={`text-4xl md:text-5xl font-bold mb-16 leading-tight ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Arsenal
          <br />
          <span className="text-jdm-red">Técnico</span>
        </h3>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillsData.map((category, catIdx) => (
            <div
              key={category.title}
              className={`${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${catIdx * 0.15}s` }}
            >
              <div className="border border-jdm-cream/10 bg-jdm-cream/5 backdrop-blur-sm">
                {/* Category Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-jdm-cream/10">
                  <h4 className="font-bold text-lg tracking-wider uppercase">
                    {category.title}
                  </h4>
                  <span className="font-[var(--font-jp)] text-jdm-red text-xs">
                    {category.titleJp}
                  </span>
                </div>

                {/* Skills List */}
                <div className="p-6 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-jdm-cream/80">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-jdm-red">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="jdm-progress">
                        <div
                          className="jdm-progress-fill"
                          style={{
                            width: animatedBars ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tags */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Styling */}
          <div className="border border-jdm-cream/10 p-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-jdm-gray mb-4">
              Estilos y Diseño
            </h4>
            <div className="flex flex-wrap gap-2">
              {styleSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-jdm-cream/20 text-jdm-cream/70 hover:border-jdm-red hover:text-jdm-red transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Exploring */}
          <div className="border border-jdm-cream/10 p-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-jdm-gray mb-4">
              Explorando Actualmente
            </h4>
            <div className="flex flex-wrap gap-2">
              {exploringSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-jdm-red/30 text-jdm-red/70 hover:border-jdm-red hover:text-jdm-red transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
