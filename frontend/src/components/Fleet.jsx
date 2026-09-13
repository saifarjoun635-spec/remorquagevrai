import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useLang } from "../App";

export default function Fleet() {
  const { t } = useLang();
  const f = t.fleet;
  const photos = [
    { src: "/assets/truck-b.jpg", cap: f.cap1, id: "fleet-photo-1" },
    { src: "/assets/truck-a.jpg", cap: f.cap2, id: "fleet-photo-2" },
  ];

  return (
    <section id="flotte" data-testid="fleet-section" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-code text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            {f.eyebrow}
          </p>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {f.title}
            <br />
            <span className="italic text-red-500">{f.title2}</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {photos.map((p, i) => (
            <motion.figure
              key={p.id}
              data-testid={p.id}
              initial={{ opacity: 0, y: 60, rotate: i === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            >
              <img
                src={p.src}
                alt={p.cap}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 flex items-center gap-2.5 p-6 font-code text-xs font-bold uppercase tracking-[0.2em] text-white">
                <Camera className="h-4 w-4 text-red-500" />
                {p.cap}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
