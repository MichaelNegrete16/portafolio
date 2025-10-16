"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isScrolled ? "glass-dark" : "glass-effect"
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand neon-text arcade-text"
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "hero")}
        >
          <span className="d-inline-block me-2" style={{ fontSize: "1.2rem" }}>
            ジャクソン
          </span>
          <span className="d-none d-md-inline">GARAGE</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{
            boxShadow: "none",
            background: "rgba(0, 255, 240, 0.1)",
            borderRadius: "8px",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link tech-text fw-bold"
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                style={{
                  transition: "all 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "25px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--bright-cyan)";
                  e.currentTarget.style.textShadow = "var(--neon-glow-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.textShadow = "";
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link tech-text fw-bold"
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                style={{
                  transition: "all 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "25px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--bright-cyan)";
                  e.currentTarget.style.textShadow = "var(--neon-glow-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.textShadow = "";
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link tech-text fw-bold"
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                style={{
                  transition: "all 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "25px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--bright-cyan)";
                  e.currentTarget.style.textShadow = "var(--neon-glow-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.textShadow = "";
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link tech-text fw-bold"
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                style={{
                  transition: "all 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "25px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--bright-cyan)";
                  e.currentTarget.style.textShadow = "var(--neon-glow-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.textShadow = "";
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
