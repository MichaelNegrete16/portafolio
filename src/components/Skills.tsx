"use client";

import { useEffect, useRef } from "react";

interface Skill {
  category: string;
  icon: string;
  skills: string[];
  progress: number;
  color: string;
}

const skillsData: Skill[] = [
  {
    category: "Frontend",
    icon: "bi-code-slash",
    skills: ["Next.js", "React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    progress: 95,
    color: "var(--neon-red)",
  },
  {
    category: "Backend",
    icon: "bi-server",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ],
    progress: 85,
    color: "var(--bright-cyan)",
  },
  {
    category: "Tools & Others",
    icon: "bi-tools",
    skills: ["Git", "Bootstrap", "Tailwind", "Figma", "SSR", "Vercel"],
    progress: 90,
    color: "var(--electric-purple)",
  },
];

export default function Skills() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const progressValue = progressBar.getAttribute("data-progress");
            if (progressValue) {
              progressBar.style.transform = `scaleX(${progressValue}%)`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-5"
      style={{ background: "var(--gradient-tokyo)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title neon-text arcade-text">
              Technical Skills
            </h2>
            <div className="section-divider"></div>
            <p
              className="tech-text mb-0"
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Especializaciones técnicas que domino para crear experiencias web
              excepcionales
            </p>
          </div>
        </div>

        <div className="row g-4">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="skill-card h-100 fade-in-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Icono principal */}
                <div
                  className="text-center mb-4"
                  style={{
                    fontSize: "3rem",
                    color: skillCategory.color,
                    filter: `drop-shadow(0 0 20px ${skillCategory.color})`,
                  }}
                >
                  <i className={skillCategory.icon}></i>
                </div>

                {/* Título de categoría */}
                <h4
                  className="text-center mb-4 arcade-text"
                  style={{
                    color: skillCategory.color,
                    textShadow: `0 0 20px ${skillCategory.color}`,
                    fontSize: "1.3rem",
                    letterSpacing: "1px",
                  }}
                >
                  {skillCategory.category}
                </h4>

                {/* Lista de habilidades */}
                <div className="mb-4">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="tech-tag"
                        style={{
                          background: `${skillCategory.color}20`,
                          border: `1px solid ${skillCategory.color}60`,
                          color: skillCategory.color,
                          transition: "var(--transition-smooth)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            skillCategory.color;
                          e.currentTarget.style.color = "var(--bg-asphalt)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = `0 0 15px ${skillCategory.color}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${skillCategory.color}20`;
                          e.currentTarget.style.color = skillCategory.color;
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.boxShadow = "";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Barra de progreso */}
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span
                      className="tech-text"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      Nivel de Expertise
                    </span>
                    <span
                      className="arcade-text"
                      style={{
                        color: skillCategory.color,
                        fontSize: "0.9rem",
                      }}
                    >
                      {skillCategory.progress}%
                    </span>
                  </div>

                  <div className="progress-bar-custom">
                    <div
                      ref={(el) => {
                        progressRefs.current[index] = el;
                      }}
                      className="progress-fill"
                      data-progress={skillCategory.progress / 100}
                      style={{
                        background: `linear-gradient(90deg, ${skillCategory.color}, ${skillCategory.color}80)`,
                        transform: "scaleX(0)",
                        transition: "transform 2s ease-out",
                      }}
                    />
                  </div>
                </div>

                {/* Efecto de border animado específico por color */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${skillCategory.color}, transparent)`,
                    animation: "rotate-border 4s linear infinite",
                    zIndex: -1,
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional: Metodologías y herramientas */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="glass-effect p-4 rounded">
              <h4
                className="text-center mb-4 arcade-text"
                style={{
                  color: "var(--bright-cyan)",
                  textShadow: "var(--neon-glow-cyan)",
                }}
              >
                Metodologías y Herramientas
              </h4>

              <div className="row text-center">
                <div className="col-md-3 col-6 mb-3">
                  <div className="glass-effect p-3 rounded">
                    <i
                      className="bi bi-arrow-repeat neon-text-red d-block mb-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <span className="tech-text">Agile/Scrum</span>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="glass-effect p-3 rounded">
                    <i
                      className="bi bi-git neon-text d-block mb-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <span className="tech-text">Git Flow</span>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="glass-effect p-3 rounded">
                    <i
                      className="bi bi-phone neon-text-purple d-block mb-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <span className="tech-text">Responsive Design</span>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="glass-effect p-3 rounded">
                    <i
                      className="bi bi-speedometer2 neon-text-red d-block mb-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <span className="tech-text">Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
