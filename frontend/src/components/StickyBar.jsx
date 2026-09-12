import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { useLang } from "../App";
import { PHONE_TEL, PHONE_SMS } from "../i18n";

export default function StickyBar() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          data-testid="sticky-action-bar"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-red-500/25 bg-[#070709]/90 p-3 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={PHONE_TEL}
              data-testid="sticky-call-btn"
              className="cta-pulse flex flex-1 items-center justify-center gap-2.5 rounded-full bg-red-500 py-3.5 font-display text-lg font-black uppercase tracking-wide text-white transition-colors duration-300 hover:bg-red-600"
            >
              <Phone className="h-5 w-5" />
              {t.sticky.call} — 438-402-4080
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={PHONE_SMS}
              data-testid="sticky-sms-btn"
              aria-label={t.sticky.sms}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 font-code text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-red-500/60"
            >
              <MessageSquare className="h-4 w-4 text-red-400" />
              <span className="hidden sm:inline">{t.sticky.sms}</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
