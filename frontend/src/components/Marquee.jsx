import { Zap } from "lucide-react";
import { useLang } from "../App";

export default function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div
      data-testid="marquee-section"
      className="relative -rotate-1 overflow-hidden border-y border-red-500/25 bg-red-500 py-4"
    >
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {[...items, ...items].map((txt, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-black uppercase italic tracking-wide text-white"
          >
            {txt}
            <Zap className="h-5 w-5 fill-white" />
          </span>
        ))}
      </div>
    </div>
  );
}
