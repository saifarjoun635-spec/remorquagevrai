import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useLang } from "../App";

export default function Zones() {
  const { t } = useLang();

  return (
    <section id="zones" data-testid="zones-section" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1781563870880-193e11fefad4?crop=entropy&cs=srgb&fm=jpg&q=80&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#070709]/80 to-[#070709]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-code text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            {t.zones.eyebrow}
          </p>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.zones.title}
            <br />
            <span className="italic text-red-500">{t.zones.title2}</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.zones.items.map((z, i) => (
            <motion.div
              key={z.name}
              data-testid={`zone-card-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-3xl border border-white/10 bg-[#0f0f14]/80 p-7 backdrop-blur transition-colors duration-500 hover:border-red-500/50"
            >
              <MapPin className="h-6 w-6 text-red-500 transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-wide text-white">
                {z.name}
              </h3>
              <p className="mt-1 font-code text-[10px] uppercase tracking-[0.25em] text-slate-500">
                {t.zones.etaLabel}
              </p>
              <p className="mt-1 font-code text-2xl font-bold text-amber-400">{z.eta}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{z.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          data-testid="zones-long-distance"
          className="mt-10 flex items-center gap-3 font-code text-xs uppercase tracking-[0.2em] text-slate-400"
        >
          <Navigation className="h-4 w-4 shrink-0 text-red-500" />
          {t.zones.long}
        </motion.p>
      </div>
    </section>
  );
}
