import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onDone }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const o = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        onDone();
      },
    });
    tl.to(o, { v: 100, duration: 1.9, ease: "power2.inOut", onUpdate: () => setN(Math.round(o.v)) })
      .to(".ld-inner", { yPercent: -60, opacity: 0, duration: 0.5, ease: "power3.in" })
      .to(ref.current, { yPercent: -100, duration: 0.95, ease: "expo.inOut" }, "-=0.1");
    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[10000] flex items-end justify-between bg-[#060808] p-6 sm:p-10 text-white"
    >
      <div className="ld-inner flex w-full items-end justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#34D399]">
            MA | Soluções e Engenharia
          </p>
          <p className="mt-2 max-w-[260px] text-sm text-white/50">Projetos inteligentes, resultados eficientes.</p>
        </div>
        <div className="font-bold leading-none tracking-[-0.06em] text-[clamp(5rem,20vw,18rem)] tabular-nums">
          {n}
        </div>
      </div>
      <div className="absolute left-0 top-0 h-[3px] bg-[#0E966E]" style={{ width: `${n}%` }} />
    </div>
  );
}
