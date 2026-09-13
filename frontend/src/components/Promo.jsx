import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Phone, Gift } from "lucide-react";
import { useLang } from "../App";
import { PHONE_TEL } from "../i18n";

export default function Promo() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.4, 0.15]);

  const p = t.promoSection;
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      data-testid="promo-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070709] py-24"
    >
      <motion.div
        style={{ opacity: glow }}
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.5),transparent_65%)]"
      />
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]">
        <div className="marquee-track flex h-full w-max flex-col justify-around">
          {[0, 1, 2].map((r) => (
            <p
              key={r}
              className="whitespace-nowrap font-display text-[22vw] font-black uppercase italic leading-none text-white"
            >
              {p.line1} • {p.line2} • {p.line1} • {p.line2}
            </p>
          ))}
        </div>
      </div>

      <motion.div style={{ scale, rotate }} className="relative z-10 px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 flex w-fit items-center gap-2.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 font-code text-xs font-bold uppercase tracking-[0.3em] text-amber-300"
          data-testid="promo-kicker"
        >
          <Gift className="h-4 w-4" />
          {p.kicker}
        </motion.div>

        <h2 ref={titleRef} className="font-display font-black uppercase leading-[0.85] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "115%" }}
              animate={titleInView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block text-7xl italic text-white sm:text-9xl lg:text-[11rem]"
            >
              {p.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "115%" }}
              animate={titleInView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-7xl italic text-red-500 drop-shadow-[0_0_45px_rgba(239,68,68,0.5)] sm:text-9xl lg:text-[11rem]"
            >
              {p.line2}
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          data-testid="promo-sub"
          className="mx-auto mt-8 max-w-xl text-lg text-slate-200 sm:text-xl"
        >
          {p.sub}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-3 font-code text-xs uppercase tracking-[0.25em] text-slate-400"
        >
          {p.note}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PHONE_TEL}
            data-testid="promo-cta-btn"
            className="cta-pulse inline-flex items-center gap-3 rounded-full bg-red-500 px-9 py-5 font-display text-2xl font-black uppercase tracking-wide text-white transition-colors duration-300 hover:bg-red-600"
          >
            <Phone className="h-6 w-6" />
            {p.cta}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
