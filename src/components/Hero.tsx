"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer | Next.js | Full Stack Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="position-relative vh-100 d-flex align-items-center"
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
          zIndex: -1,
        }}
      />

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            {/* Nombre principal con efecto glitch */}
            <h1
              className="mb-4 arcade-text"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: "900",
                background:
                  "linear-gradient(45deg, var(--neon-blue), var(--electric-violet), var(--sunset-orange))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(0, 212, 255, 0.6)",
                letterSpacing: "5px",
              }}
            >
              MICHAEL NEGRETE
            </h1>

            {/* Subtítulo con efecto typewriter */}
            <div className="mb-4">
              <h2
                className="tech-text fw-bold"
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  color: "var(--neon-blue)",
                  textShadow: "var(--neon-glow-blue)",
                  minHeight: "2.5rem",
                  fontFamily: "var(--font-tech)",
                }}
              >
                {displayText}
                <span
                  style={{
                    animation: "blink 1s infinite",
                    color: "var(--sunset-orange)",
                  }}
                >
                  |
                </span>
              </h2>
            </div>

            {/* Descripción */}
            <p
              className="mb-5 tech-text fade-in-up"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: "0 auto 3rem",
                lineHeight: "1.6",
              }}
            >
              Building fast, sleek, and pixel-perfect experiences.
            </p>

            {/* Frase japonesa */}
            <div className="mb-5 fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p
                className="arcade-text"
                style={{
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  color: "var(--electric-purple)",
                  textShadow: "var(--neon-glow-purple)",
                  marginBottom: "0.5rem",
                  letterSpacing: "2px",
                }}
              >
                コードは東京の夜の道のように
              </p>
              <p
                className="tech-text"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontStyle: "italic",
                }}
              >
                &quot;Code like the night streets of Tokyo — fast and
                precise.&quot;
              </p>
            </div>

            {/* Botón CTA */}
            <div className="fade-in-up" style={{ animationDelay: "1s" }}>
              <button
                onClick={handleScrollToProjects}
                className="btn-racing"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  padding: "clamp(12px, 3vw, 16px) clamp(25px, 6vw, 40px)",
                }}
              >
                <span>View My Work</span>
                <i
                  className="bi bi-arrow-right-short"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS interno para animación del cursor */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
