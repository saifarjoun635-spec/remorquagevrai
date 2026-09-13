import { motion } from "framer-motion";
import { Truck, Route, CarFront, Flame } from "lucide-react";
import { useLang } from "../App";

const icons = [Truck, Route, CarFront, Flame];
const images = [
  "/assets/truck-b.jpg",
  "/assets/truck-a.jpg",
  "https://images.unsplash.com/photo-1580014317999-e9f1936787a5?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
  "https://images.unsplash.com/photo-1738189035213-43f3575314b0?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" data-testid="services-section" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-code text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            {t.services.eyebrow}
          </p>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.services.title}
            <br />
            <span className="text-stroke-red italic">{t.services.title2}</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={s.n}
                data-testid={`service-card-${s.n}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-red-500/15 bg-[#121218]/75 p-8 backdrop-blur transition-colors duration-500 hover:border-red-500/50 sm:p-10"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <img src={images[i]} alt="" className="h-full w-full object-cover opacity-15" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/80 to-transparent" />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="text-stroke-white font-display text-7xl font-black leading-none sm:text-8xl">
                      {s.n}
                    </span>
                    <span className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3.5 text-red-400 transition-all duration-500 group-hover:bg-red-500 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400 transition-colors duration-500 group-hover:text-slate-200">
                    {s.desc}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 transition-[width] duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
