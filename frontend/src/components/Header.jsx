import { motion } from "framer-motion";
import { Phone, Radio } from "lucide-react";
import { useLang } from "../App";
import { PHONE_TEL, PHONE_DISPLAY } from "../i18n";

const scrollTo = (lenisRef, id) => {
  const el = document.querySelector(id);
  if (!el) return;
  if (lenisRef?.current) lenisRef.current.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  const { lang, setLang, t, lenisRef } = useLang();
  const links = [
    { label: t.nav.services, href: "#services", id: "nav-services-link" },
    { label: t.nav.zones, href: "#zones", id: "nav-zones-link" },
    { label: t.nav.contact, href: "#contact", id: "nav-contact-link" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-red-500/15 bg-[#070709]/85 backdrop-blur-xl"
      data-testid="site-header"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={() => scrollTo(lenisRef, "#top")}
          className="flex items-center gap-3"
          data-testid="header-logo-btn"
          aria-label="Remorquage 40 Est"
        >
          <img
            src="/assets/logo.png"
            alt="Remorquage 40 Est"
            className="h-11 w-11 rounded-full bg-white object-cover ring-2 ring-red-500/40"
          />
          <div className="hidden text-left sm:block">
            <p className="font-display text-lg font-black uppercase leading-none tracking-wide text-white">
              Remorquage <span className="text-red-500">40 Est</span>
            </p>
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-slate-400">
              MTL &amp; environs
            </p>
          </div>
        </button>

        <nav className="hidden items-center gap-7 md:flex" data-testid="main-nav">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={l.id}
              onClick={() => scrollTo(lenisRef, l.href)}
              className="group relative font-code text-xs uppercase tracking-[0.22em] text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-[width] duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span
            data-testid="availability-badge"
            className="hidden items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 font-code text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 lg:flex"
          >
            <Radio className="h-3 w-3 animate-pulse" />
            {t.nav.badge}
          </span>

          <div
            className="flex overflow-hidden rounded-full border border-white/15"
            data-testid="lang-toggle"
          >
            {["fr", "en"].map((l) => (
              <button
                key={l}
                data-testid={`lang-toggle-${l}`}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 font-code text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                  lang === l ? "bg-red-500 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PHONE_TEL}
            data-testid="header-call-btn"
            className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-red-600"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">{t.nav.call}</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
