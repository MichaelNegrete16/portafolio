"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-4"
      style={{
        background: "var(--bg-asphalt)",
        borderTop: "1px solid rgba(0, 255, 240, 0.2)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p
              className="tech-text mb-0"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.95rem",
              }}
            >
              &copy; {currentYear} Jackson. Coded with{" "}
              <span
                className="neon-text-red"
                style={{
                  animation: "pulse-glow 2s infinite",
                  fontSize: "1.1rem",
                }}
              >
                ♥
              </span>{" "}
              in Colombia
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              {/* Indicador de estado online */}
              <div className="d-flex align-items-center">
                <div
                  className="me-2"
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "var(--bright-cyan)",
                    borderRadius: "50%",
                    boxShadow: "var(--neon-glow-cyan)",
                    animation: "pulse-glow 2s infinite",
                  }}
                />
                <span
                  className="tech-text"
                  style={{
                    color: "var(--bright-cyan)",
                    fontSize: "0.9rem",
                    textShadow: "var(--neon-glow-cyan)",
                  }}
                >
                  Available for hire
                </span>
              </div>

              {/* Enlaces rápidos del footer */}
              <div className="d-flex gap-2">
                <a
                  href="#hero"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.9rem",
                    transition: "var(--transition-smooth)",
                    padding: "5px 10px",
                    borderRadius: "15px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--bright-cyan)";
                    e.currentTarget.style.textShadow = "var(--neon-glow-cyan)";
                    e.currentTarget.style.background = "rgba(0, 255, 240, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.textShadow = "";
                    e.currentTarget.style.background = "";
                  }}
                >
                  Top
                </a>
                <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
                <a
                  href="#contact"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.9rem",
                    transition: "var(--transition-smooth)",
                    padding: "5px 10px",
                    borderRadius: "15px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--neon-red)";
                    e.currentTarget.style.textShadow = "var(--neon-glow-red)";
                    e.currentTarget.style.background = "rgba(255, 0, 60, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.textShadow = "";
                    e.currentTarget.style.background = "";
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea decorativa con efectos */}
        <div className="row mt-3">
          <div className="col-12">
            <div
              className="position-relative"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, var(--bright-cyan), var(--electric-purple), var(--neon-red), transparent)",
                margin: "0 auto",
                width: "80%",
              }}
            >
              {/* Puntos decorativos */}
              <div
                className="position-absolute top-50 translate-middle"
                style={{
                  left: "25%",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "var(--bright-cyan)",
                  borderRadius: "50%",
                  boxShadow: "var(--neon-glow-cyan)",
                }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "var(--electric-purple)",
                  borderRadius: "50%",
                  boxShadow: "var(--neon-glow-purple)",
                }}
              />
              <div
                className="position-absolute top-50 translate-middle"
                style={{
                  left: "75%",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "var(--neon-red)",
                  borderRadius: "50%",
                  boxShadow: "var(--neon-glow-red)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Mensaje adicional con estilo japonés */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p
              className="arcade-text mb-0"
              style={{
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.7rem",
                letterSpacing: "1px",
              }}
            >
              頑張って！ (Ganbatte! - ¡Hagámoslo!)
            </p>
          </div>
        </div>
      </div>

      {/* Efectos de fondo sutil */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: "100px",
          background:
            "linear-gradient(0deg, rgba(0, 255, 240, 0.05) 0%, transparent 100%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </footer>
  );
}
