"use client";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title neon-text arcade-text">About Me</h2>
            <div className="section-divider"></div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="fade-in-left">
              {/* Imagen de perfil placeholder con efecto neón */}
              <div
                className="position-relative mx-auto glass-effect p-4 rounded-circle"
                style={{
                  width: "300px",
                  height: "300px",
                  background: "var(--gradient-tokyo)",
                  border: "3px solid var(--bright-cyan)",
                  boxShadow: "var(--neon-glow-cyan)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center h-100 rounded-circle"
                  style={{
                    background: "rgba(0, 0, 0, 0.7)",
                    border: "2px solid rgba(0, 255, 240, 0.3)",
                  }}
                >
                  <i
                    className="bi bi-person-circle neon-text"
                    style={{ fontSize: "120px" }}
                  ></i>
                </div>

                {/* Efectos orbitales */}
                <div
                  className="position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    width: "20px",
                    height: "20px",
                    background: "var(--neon-red)",
                    borderRadius: "50%",
                    boxShadow: "var(--neon-glow-red)",
                    animation: "pulse-glow 2s infinite",
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: "30px",
                    left: "20px",
                    width: "15px",
                    height: "15px",
                    background: "var(--electric-purple)",
                    borderRadius: "50%",
                    boxShadow: "var(--neon-glow-purple)",
                    animation: "pulse-glow 3s infinite",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="fade-in-right">
              {/* Título japonés */}
              <h3
                className="arcade-text mb-3"
                style={{
                  color: "var(--electric-purple)",
                  textShadow: "var(--neon-glow-purple)",
                  fontSize: "clamp(1rem, 3vw, 1.5rem)",
                  letterSpacing: "2px",
                }}
              >
                コードは東京の夜の道のように
              </h3>

              <p
                className="tech-text mb-4"
                style={{
                  color: "var(--bright-cyan)",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                }}
              >
                &quot;Code like the night streets of Tokyo — fast and
                precise.&quot;
              </p>

              {/* Biografía principal */}
              <div className="glass-effect p-4 mb-4 rounded">
                <p
                  className="tech-text mb-3"
                  style={{
                    lineHeight: "1.8",
                    color: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  Soy un{" "}
                  <span className="neon-text-red fw-bold">
                    Full Stack Developer
                  </span>{" "}
                  con enfoque en Frontend y especialización en{" "}
                  <span className="neon-text fw-bold">Next.js</span>. Me
                  apasiona crear experiencias web rápidas, modernas y
                  visualmente impactantes que combinan funcionalidad con diseño
                  excepcional.
                </p>

                <p
                  className="tech-text mb-3"
                  style={{
                    lineHeight: "1.8",
                    color: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  Con experiencia en el desarrollo de aplicaciones web
                  completas, desde la conceptualización hasta el despliegue, me
                  especializo en tecnologías modernas como
                  <span className="tech-tag ms-2 me-1">React</span>
                  <span className="tech-tag me-1">Next.js</span>
                  <span className="tech-tag me-1">Node.js</span>
                </p>

                <p
                  className="tech-text mb-0"
                  style={{
                    lineHeight: "1.8",
                    color: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  Desde{" "}
                  <span className="neon-text-purple fw-bold">Colombia</span>,
                  trabajo creando soluciones digitales que no solo funcionan
                  perfectamente, sino que también cautivan visualmente a los
                  usuarios.
                </p>
              </div>

              {/* Ubicación y contacto rápido */}
              <div className="mt-4 d-flex align-items-center justify-content-start flex-wrap gap-3">
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-geo-alt-fill neon-text me-2"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span
                    className="tech-text"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    Colombia
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-code-slash neon-text-red me-2"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span
                    className="tech-text"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    Frontend Specialist
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-lightning-charge-fill neon-text-purple me-2"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span
                    className="tech-text"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    Next.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
