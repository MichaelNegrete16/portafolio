"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jdm-black text-jdm-cream py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-jdm-red font-bold tracking-wider">
              PROJECT_86
            </span>
            <span className="text-jdm-cream/30">|</span>
            <span className="font-[var(--font-jp)] text-jdm-cream/30 text-sm">
              ハチロク
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-jdm-cream/40">
            &copy; {currentYear} Michael Negrete. Todos los derechos reservados.
          </p>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-jdm-cream/50">
              Disponible para contratar
            </span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-jdm-red/30 to-transparent" />

        <p className="text-center mt-4 font-[var(--font-jp)] text-jdm-cream/15 text-xs tracking-widest">
          頑張って！— ¡Ganbatte!
        </p>
      </div>
    </footer>
  );
}
