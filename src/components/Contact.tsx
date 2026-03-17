"use client";

import { useEffect, useRef, useState } from "react";

const contactInfo = [
  { label: "Correo", value: "michael.negrete16@gmail.com", icon: "✉" },
  { label: "Teléfono", value: "+57 302 287 1071", icon: "☎" },
  { label: "Ubicación", value: "Cartagena, Colombia", icon: "◎" },
  { label: "LinkedIn", value: "linkedin.com/in/michael-negrete-camano", icon: "⬡" },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-jdm-blue text-jdm-cream relative overflow-hidden"
    >
      {/* Background pattern */}
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
            04 &mdash; Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Construyamos
              <br />
              algo increíble
              <br />
              <span className="text-jdm-red">juntos.</span>
            </h3>

            <p className="text-jdm-cream/60 text-lg leading-relaxed mb-8">
              Siempre abierto a nuevos retos y proyectos interesantes. Ya sea
              que necesites una aplicación full-stack, optimización frontend o
              consultoría técnica — hablemos.
            </p>

            <p className="font-[var(--font-jp)] text-jdm-cream/20 text-2xl mb-2">
              一緒に作りましょう
            </p>
            <p className="text-sm text-jdm-cream/40 italic">
              &quot;Creemos juntos.&quot;
            </p>
          </div>

          {/* Right - Contact Details */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="border border-jdm-cream/10">
              <div className="bg-jdm-cream/10 px-6 py-3 flex justify-between items-center">
                <span className="text-xs font-bold tracking-[0.3em] uppercase">
                  Datos de Contacto
                </span>
                <span className="font-[var(--font-jp)] text-jdm-red text-xs">
                  連絡先
                </span>
              </div>

              <div className="divide-y divide-jdm-cream/10">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="px-6 py-5 flex items-center gap-4 hover:bg-jdm-cream/5 transition-colors"
                  >
                    <span className="text-jdm-red text-xl w-8 text-center">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold tracking-wider text-jdm-cream/40 uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-jdm-cream/10">
                <a
                  href="mailto:michael.negrete16@gmail.com"
                  className="block w-full bg-jdm-red text-jdm-cream text-center px-8 py-4 font-semibold tracking-wider uppercase text-sm hover:bg-jdm-red-dark transition-colors duration-300"
                >
                  Envíame un correo
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/MichaelNegrete16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-jdm-cream/10 py-3 text-center text-sm font-semibold tracking-wider uppercase hover:bg-jdm-cream/10 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/michael-negrete-camano/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-jdm-cream/10 py-3 text-center text-sm font-semibold tracking-wider uppercase hover:bg-jdm-cream/10 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
