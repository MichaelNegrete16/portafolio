"use client";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projectsData: Project[] = [];

export default function Projects() {
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title neon-text arcade-text">
              Featured Projects
            </h2>
            <div className="section-divider"></div>
            <p
              className="tech-text mb-0"
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Una selección de mis mejores trabajos que demuestran mi expertise
              en desarrollo web moderno
            </p>
          </div>
        </div>

        {/* Proyectos destacados */}
        <div className="row g-4 mb-5">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className="project-card fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Imagen del proyecto */}
                <div className="project-image">
                  <div
                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: "var(--gradient-tokyo)",
                      minHeight: "200px",
                    }}
                  >
                    <i
                      className="bi bi-globe neon-text"
                      style={{ fontSize: "4rem" }}
                    ></i>
                  </div>

                  {/* Overlay con enlaces */}
                  <div className="project-overlay">
                    <div className="d-flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="btn btn-racing"
                          style={{
                            padding: "10px 20px",
                            fontSize: "0.9rem",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-eye"></i>
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: "45px",
                            height: "45px",
                          }}
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-4">
                  <h4
                    className="mb-3 arcade-text"
                    style={{
                      color: "var(--bright-cyan)",
                      textShadow: "var(--neon-glow-cyan)",
                      fontSize: "1.2rem",
                    }}
                  >
                    {project.title}
                  </h4>

                  <p
                    className="tech-text mb-3"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "1.6",
                      fontSize: "0.95rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                        style={{
                          fontSize: "0.8rem",
                          padding: "4px 12px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separador con efecto */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              className="mx-auto"
              style={{
                width: "200px",
                height: "2px",
                background: "var(--gradient-cyber)",
                position: "relative",
              }}
            >
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "20px",
                  height: "20px",
                  background: "var(--electric-purple)",
                  borderRadius: "50%",
                  boxShadow: "var(--neon-glow-purple)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Otros proyectos */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h3
              className="arcade-text"
              style={{
                color: "var(--electric-purple)",
                textShadow: "var(--neon-glow-purple)",
                fontSize: "1.8rem",
                marginBottom: "3rem",
              }}
            >
              Other Notable Projects
            </h3>
          </div>
        </div>

        <div className="row g-3">
          {otherProjects.map((project, index) => (
            <div key={project.id} className="col-lg-6 col-md-6">
              <div
                className="glass-effect p-4 rounded fade-in-up"
                style={{
                  animationDelay: `${(index + 3) * 0.1}s`,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "var(--transition-glow)",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "var(--neon-glow-purple)";
                  e.currentTarget.style.borderColor = "var(--electric-purple)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5
                    className="tech-text mb-0"
                    style={{
                      color: "var(--bright-cyan)",
                      fontWeight: "700",
                    }}
                  >
                    {project.title}
                  </h5>
                  <div className="d-flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--bright-cyan)",
                          fontSize: "1.2rem",
                          transition: "var(--transition-smooth)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--neon-red)";
                          e.currentTarget.style.textShadow =
                            "var(--neon-glow-red)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--bright-cyan)";
                          e.currentTarget.style.textShadow = "";
                        }}
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--bright-cyan)",
                          fontSize: "1.2rem",
                          transition: "var(--transition-smooth)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--neon-red)";
                          e.currentTarget.style.textShadow =
                            "var(--neon-glow-red)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--bright-cyan)";
                          e.currentTarget.style.textShadow = "";
                        }}
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className="tech-text mb-3"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  {project.description}
                </p>

                <div className="d-flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 8px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      className="tech-tag"
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 8px",
                        color: "var(--electric-purple)",
                      }}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver más proyectos */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a
              href="https://github.com/jackson"
              className="btn-racing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                padding: "15px 35px",
              }}
            >
              <i className="bi bi-github"></i>
              <span>Ver Más Proyectos en GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
