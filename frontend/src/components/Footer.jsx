import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { useLang } from "../App";
import { PHONE_TEL, PHONE_SMS, PHONE_DISPLAY } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="relative overflow-hidden border-t border-red-500/15 bg-[#0f0f14] pb-28 pt-20 sm:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          href={PHONE_TEL}
          data-testid="footer-call-link"
          className="block text-center font-display text-6xl font-black italic uppercase leading-none tracking-tight text-white transition-colors duration-300 hover:text-red-500 sm:text-8xl lg:text-[9rem]"
        >
          {PHONE_DISPLAY}
        </motion.a>

        <p className="mt-6 text-center font-code text-xs uppercase tracking-[0.3em] text-slate-500">
          {t.footer.tagline}
        </p>

        <div className="mt-16 grid items-center gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo.png"
              alt="Remorquage 40 Est"
              className="h-14 w-14 rounded-full bg-white object-cover ring-2 ring-red-500/40"
            />
            <div>
              <p className="font-display text-xl font-black uppercase text-white">
                Remorquage <span className="text-red-500">40 Est</span>
              </p>
              <p className="font-code text-[10px] uppercase tracking-[0.3em] text-slate-500">
                {t.footer.madeIn}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-code text-[10px] uppercase tracking-[0.3em] text-slate-500">
              {t.footer.zonesTitle}
            </p>
            <p className="mt-2 font-code text-xs uppercase tracking-[0.2em] text-slate-300">
              {t.hero.zones.join(" • ")}
            </p>
          </div>

          <div className="flex justify-start gap-3 sm:justify-end">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PHONE_TEL}
              data-testid="footer-call-btn"
              className="flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 font-code text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-red-600"
            >
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PHONE_SMS}
              data-testid="footer-sms-btn"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-code text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-red-500/60"
            >
              <MessageSquare className="h-4 w-4 text-red-400" />
              SMS
            </motion.a>
          </div>
        </div>

        <p className="mt-10 text-center font-code text-[10px] uppercase tracking-[0.25em] text-slate-600">
          © {year} Remorquage 40 Est — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
