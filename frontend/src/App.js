import { useEffect, useRef, useState, createContext, useContext } from "react";
import Lenis from "lenis";
import { translations } from "./i18n";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Zones from "./components/Zones";
import Promo from "./components/Promo";
import ContactSms from "./components/ContactSms";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";

const LangContext = createContext(null);
export const useLang = () => useContext(LangContext);
export const useLenis = () => useContext(LangContext)?.lenisRef;

function App() {
  const [lang, setLang] = useState("fr");
  const lenisRef = useRef(null);
  const t = translations[lang];

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t, lenisRef }}>
      <div className="grain min-h-screen bg-[#070709] font-body text-slate-100 selection:bg-red-500">
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Fleet />
          <Zones />
          <Promo />
          <ContactSms />
        </main>
        <Footer />
        <StickyBar />
      </div>
    </LangContext.Provider>
  );
}

export default App;
