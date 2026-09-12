import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageSquare, Timer, MapPin } from "lucide-react";
import { useLang } from "../App";
import { PHONE_TEL, PHONE_SMS } from "../i18n";

const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1610641018556-030e920d6999?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
          alt=""
          className="h-[120%] w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/70 via-[#070709]/85 to-[#070709]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.16),transparent_60%)]" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr]"
      >
        <div>
          <MaskedLine delay={0.15}>
            <p
              data-testid="hero-eyebrow"
              className="mb-5 font-code text-xs font-bold uppercase tracking-[0.3em] text-red-400"
            >
              {t.hero.eyebrow}
            </p>
          </MaskedLine>

          <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight">
            <MaskedLine delay={0.3} className="text-6xl sm:text-8xl lg:text-[9rem]">
              <span className="italic text-white">{t.hero.line1}</span>
            </MaskedLine>
            <MaskedLine delay={0.45} className="text-6xl sm:text-8xl lg:text-[9rem]">
              <span className="italic text-red-500 drop-shadow-[0_0_35px_rgba(239,68,68,0.45)]">
                {t.hero.line2}
              </span>
            </MaskedLine>
            <MaskedLine delay={0.6}>
              <span className="mt-3 block font-code text-sm font-semibold uppercase tracking-[0.35em] text-slate-300 sm:text-base">
                {t.hero.line3}
              </span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            data-testid="hero-sub"
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={PHONE_TEL}
              data-testid="hero-call-btn"
              className="cta-pulse flex items-center gap-3 rounded-full bg-red-500 px-8 py-5 font-display text-xl font-black uppercase tracking-wide text-white transition-colors duration-300 hover:bg-red-600 sm:px-10 sm:text-2xl"
            >
              <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
              {t.hero.cta}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={PHONE_SMS}
              data-testid="hero-sms-btn"
              className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-code text-sm font-bold uppercase tracking-widest text-white backdrop-blur transition-colors duration-300 hover:border-red-500/60 hover:bg-red-500/10"
            >
              <MessageSquare className="h-4 w-4 text-red-400" />
              {t.hero.sms}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-9 flex flex-wrap items-center gap-2"
            data-testid="hero-zones"
          >
            <MapPin className="h-4 w-4 text-red-500" />
            {t.hero.zones.map((z, i) => (
              <span
                key={z}
                data-testid={`hero-zone-chip-${i}`}
                className="rounded-full border border-white/15 px-3.5 py-1.5 font-code text-[11px] uppercase tracking-[0.2em] text-slate-300"
              >
                {z}
              </span>
            ))}
            <span className="ml-1 flex items-center gap-1.5 font-code text-[11px] uppercase tracking-[0.2em] text-amber-400">
              <Timer className="h-3.5 w-3.5" />
              {t.hero.eta}
            </span>
          </motion.div>
        </div>

        <motion.div
          style={{ y: logoY }}
          initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-red-500/25 blur-[90px]" />
          <div className="float-slow rounded-[2rem] bg-white p-6 shadow-[0_40px_120px_rgba(239,68,68,0.25)] ring-1 ring-white/10">
            <img
              src="/assets/logo.png"
              alt="Logo Remorquage 40 Est — Montréal & environs"
              className="w-full rounded-2xl object-contain"
              data-testid="hero-logo"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
