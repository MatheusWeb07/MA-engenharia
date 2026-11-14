import React, { useEffect, useRef, useState } from "react";
import Loader from "./components/awards/Loader";
import AwardsHero from "./components/awards/AwardsHero";
import { Manifesto, Services, Solutions, Process } from "./components/awards/AwardsSections";
import { About, Faq, Finale } from "./components/awards/AwardsFinale";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Cursor from "./components/Cursor";
import RestoraHeader from "./components/restora/RestoraHeader";


gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const progressBarRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Configuração idêntica ao site Monarch (duration 1.25s + easing expo-out)
    // respectReducedMotion: false garante que o Lenis 1.3+ nunca desative a inércia no Windows
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      respectReducedMotion: false,
    });

    lenis.stop();
    window.lenis = lenis;
    window.lenisInstance = lenis;

    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${e.progress})`;
      }
    });

    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Navegação suave por âncoras idêntica ao Monarch (duration: 1.8, offset: 0)
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      if (id === "#inicio" || id === "#top") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.8, force: true });
        return;
      }
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: 0, duration: 1.8, force: true });
    };

    document.addEventListener("click", onClick);

    const refreshTimer = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (ready && window.lenisInstance) {
      window.lenisInstance.start();
      window.lenisInstance.resize();
      ScrollTrigger.refresh();
    }
  }, [ready]);

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#121417] selection:bg-[#0B7A5A] selection:text-white antialiased font-sans">
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-[2px] w-full bg-[#0B7A5A] z-[9999] pointer-events-none origin-left scale-x-0"
      />
      <Cursor />
      {!ready && <Loader onDone={() => setReady(true)} />}
      <RestoraHeader />
      <main>
        <AwardsHero ready={ready} />
        <Manifesto />
        <Services />
        <Solutions />
        <Process />
        <About />
        <Faq />
        <Finale />
      </main>
    </div>
  );
}

