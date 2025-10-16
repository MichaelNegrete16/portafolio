"use client";

import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "bi-github",
    url: "https://github.com/jackson",
    color: "var(--pure-white)",
  },
  {
    name: "LinkedIn",
    icon: "bi-linkedin",
    url: "https://linkedin.com/in/jackson",
    color: "var(--bright-cyan)",
  },
  {
    name: "Instagram",
    icon: "bi-instagram",
    url: "https://instagram.com/jackson",
    color: "var(--neon-red)",
  },
  {
    name: "Twitter",
    icon: "bi-twitter",
    url: "https://twitter.com/jackson",
    color: "var(--electric-purple)",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{ background: "var(--gradient-tokyo)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title neon-text arcade-text">
              Get In Touch
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
              ¿Tienes un proyecto en mente? Conectemos y hagámoslo realidad
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row g-4">
              {/* Información de contacto */}
              <div className="col-lg-6">
                <div className="fade-in-left">
                  <h3
                    className="mb-4 arcade-text"
                    style={{
                      color: "var(--bright-cyan)",
                      textShadow: "var(--neon-glow-cyan)",
                      fontSize: "1.5rem",
                    }}
                  >
                    Let&apos;s Work Together
                  </h3>

                  <p
                    className="tech-text mb-4"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "1.7",
                      fontSize: "1.1rem",
                    }}
                  >
                    Como desarrollador Full Stack especializado en Next.js,
                    estoy siempre disponible para nuevos proyectos desafiantes.
                    Ya sea que necesites una aplicación web completa,
                    optimización de rendimiento, o consultoría técnica, me
                    encantaría ayudarte.
                  </p>

                  {/* Información de contacto */}
                  <div className="mb-4">
                    <div className="glass-effect p-4 rounded mb-3">
                      <div className="d-flex align-items-center">
                        <div
                          className="me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "var(--gradient-cyber)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className="bi bi-geo-alt-fill"
                            style={{
                              color: "var(--bg-asphalt)",
                              fontSize: "1.3rem",
                            }}
                          ></i>
                        </div>
                        <div>
                          <h5
                            className="tech-text mb-1"
                            style={{ color: "var(--pure-white)" }}
                          >
                            Ubicación
                          </h5>
                          <p
                            className="tech-text mb-0"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Colombia 🇨🇴
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-effect p-4 rounded mb-3">
                      <div className="d-flex align-items-center">
                        <div
                          className="me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "var(--gradient-neon)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className="bi bi-envelope-fill"
                            style={{
                              color: "var(--bg-asphalt)",
                              fontSize: "1.3rem",
                            }}
                          ></i>
                        </div>
                        <div>
                          <h5
                            className="tech-text mb-1"
                            style={{ color: "var(--pure-white)" }}
                          >
                            Email
                          </h5>
                          <p
                            className="tech-text mb-0"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            jackson.dev@example.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-effect p-4 rounded">
                      <div className="d-flex align-items-center">
                        <div
                          className="me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background:
                              "linear-gradient(45deg, var(--electric-purple), var(--bright-cyan))",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className="bi bi-clock-fill"
                            style={{
                              color: "var(--bg-asphalt)",
                              fontSize: "1.3rem",
                            }}
                          ></i>
                        </div>
                        <div>
                          <h5
                            className="tech-text mb-1"
                            style={{ color: "var(--pure-white)" }}
                          >
                            Disponibilidad
                          </h5>
                          <p
                            className="tech-text mb-0"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Lun - Vie, 9:00 AM - 6:00 PM (COT)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enlaces sociales */}
                  <div>
                    <h4
                      className="mb-3 arcade-text"
                      style={{
                        color: "var(--electric-purple)",
                        textShadow: "var(--neon-glow-purple)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Sígueme en
                    </h4>
                    <div className="d-flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          style={{
                            transition: "var(--transition-glow)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = social.color;
                            e.currentTarget.style.color = "var(--bg-asphalt)";
                            e.currentTarget.style.boxShadow = `0 0 20px ${social.color}`;
                            e.currentTarget.style.transform =
                              "translateY(-5px) scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "";
                            e.currentTarget.style.color = "var(--bright-cyan)";
                            e.currentTarget.style.boxShadow = "";
                            e.currentTarget.style.transform = "";
                          }}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div className="col-lg-6">
                <div className="fade-in-right">
                  <div className="glass-effect p-4 rounded">
                    <h3
                      className="mb-4 arcade-text text-center"
                      style={{
                        color: "var(--neon-red)",
                        textShadow: "var(--neon-glow-red)",
                        fontSize: "1.3rem",
                      }}
                    >
                      Envía un Mensaje
                    </h3>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control-custom w-100"
                            placeholder="Tu Nombre"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control-custom w-100"
                            placeholder="Tu Email"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control-custom w-100"
                          placeholder="Asunto del Mensaje"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control-custom w-100"
                          rows={6}
                          placeholder="Cuéntame sobre tu proyecto..."
                          required
                          style={{ resize: "vertical", minHeight: "120px" }}
                        />
                      </div>

                      {/* Botón de envío */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-racing w-100"
                        style={{
                          fontSize: "1.1rem",
                          padding: "15px",
                          opacity: isSubmitting ? 0.7 : 1,
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send"></i>
                            <span>Enviar Mensaje</span>
                          </>
                        )}
                      </button>

                      {/* Mensajes de estado */}
                      {submitStatus === "success" && (
                        <div
                          className="mt-3 p-3 rounded text-center"
                          style={{
                            background: "rgba(0, 255, 240, 0.1)",
                            border: "1px solid var(--bright-cyan)",
                            color: "var(--bright-cyan)",
                          }}
                        >
                          <i className="bi bi-check-circle-fill me-2"></i>
                          ¡Mensaje enviado exitosamente! Te responderé pronto.
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div
                          className="mt-3 p-3 rounded text-center"
                          style={{
                            background: "rgba(255, 0, 60, 0.1)",
                            border: "1px solid var(--neon-red)",
                            color: "var(--neon-red)",
                          }}
                        >
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          Error al enviar el mensaje. Intenta nuevamente.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de fondo */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(0, 255, 240, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(255, 0, 60, 0.1) 0%, transparent 50%)
          `,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
