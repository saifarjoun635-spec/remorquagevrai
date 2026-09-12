import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Send, MapPin, Car } from "lucide-react";
import { useLang } from "../App";
import { PHONE_TEL, PHONE_SMS, PHONE_DISPLAY } from "../i18n";

export default function ContactSms() {
  const { t, lang } = useLang();
  const [need, setNeed] = useState(0);
  const [location, setLocation] = useState("");
  const [vehicle, setVehicle] = useState("");

  const c = t.contact;
  const message =
    lang === "fr"
      ? `REMORQUAGE 40 EST — Besoin: ${c.needs[need]} | Lieu: ${location || "—"} | Véhicule: ${vehicle || "—"}`
      : `REMORQUAGE 40 EST — Need: ${c.needs[need]} | Location: ${location || "—"} | Vehicle: ${vehicle || "—"}`;

  const sendSms = () => {
    window.location.href = `${PHONE_SMS}?&body=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-code text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            {c.eyebrow}
          </p>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {c.title}
            <br />
            <span className="text-stroke-red italic">{c.title2}</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
            {c.sub}
          </p>

          <div className="mt-10">
            <p className="font-code text-xs uppercase tracking-[0.25em] text-slate-400">{c.or}</p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={PHONE_TEL}
              data-testid="contact-call-btn"
              className="cta-pulse mt-4 inline-flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 font-display text-2xl font-black uppercase tracking-wide text-white transition-colors duration-300 hover:bg-red-600"
            >
              <Phone className="h-6 w-6" />
              {PHONE_DISPLAY}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-red-500/20 bg-[#121218]/80 p-7 backdrop-blur sm:p-9"
          data-testid="sms-form"
        >
          <p className="font-code text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {c.needLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.needs.map((n, i) => (
              <button
                key={n}
                data-testid={`sms-need-${i}`}
                onClick={() => setNeed(i)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  need === i
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-white/15 bg-white/5 text-slate-300 hover:border-red-500/50 hover:text-white"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <label className="mt-7 block font-code text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {c.locationLabel}
          </label>
          <div className="relative mt-3">
            <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-red-400" />
            <input
              data-testid="sms-location-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={c.locationPh}
              className="w-full rounded-2xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-red-500/60"
            />
          </div>

          <label className="mt-6 block font-code text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {c.vehicleLabel}
          </label>
          <div className="relative mt-3">
            <Car className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-red-400" />
            <input
              data-testid="sms-vehicle-input"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              placeholder={c.vehiclePh}
              className="w-full rounded-2xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-red-500/60"
            />
          </div>

          <p className="mt-7 font-code text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {c.previewLabel}
          </p>
          <div
            data-testid="sms-preview"
            className="mt-3 rounded-2xl border border-dashed border-red-500/30 bg-red-500/5 p-4 font-code text-sm leading-relaxed text-slate-300"
          >
            {message}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={sendSms}
            data-testid="sms-submit-btn"
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 font-display text-xl font-black uppercase tracking-wide text-white transition-colors duration-300 hover:bg-red-600"
          >
            <MessageSquare className="h-5 w-5" />
            {c.submit}
            <Send className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
