import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

const TOTAL_FRAMES = 64;
const frameSrc = (i) =>
  `/assets/house-frames/f_${String(i).padStart(3, "0")}.webp`;

export default function HeroHouse() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const line2Ref = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const canvasEl = canvasRef.current;
    if (!heroEl || !canvasEl) return;

    const ctx = canvasEl.getContext("2d", { alpha: false });
    const frames = new Array(TOTAL_FRAMES).fill(null);
    const animState = { value: 0 };

    // Estados: "dark" | "lighting" | "unlocked" | "darkening"
    let phase = window.scrollY > 10 ? "unlocked" : "dark";
    if (phase === "unlocked") {
      animState.value = 1;
    }

    const ready = (img) => img && img.complete && img.naturalWidth > 0;

    const draw = (p) => {
      const idx = Math.round(Math.max(0, Math.min(1, p)) * (TOTAL_FRAMES - 1));
      let img = frames[idx];
      if (!ready(img)) {
        for (let o = 1; o < TOTAL_FRAMES; o++) {
          if (ready(frames[idx - o])) {
            img = frames[idx - o];
            break;
          }
          if (ready(frames[idx + o])) {
            img = frames[idx + o];
            break;
          }
        }
      }
      if (!ready(img)) return;
      const cw = canvasEl.width;
      const ch = canvasEl.height;
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const renderState = (p) => {
      draw(p);

      // Revela "Resultados eficientes." em verde logo abaixo de "Projetos inteligentes."
      const t2 = Math.max(0, Math.min(1, (p - 0.12) / 0.65));
      const ease2 = 1 - Math.pow(1 - t2, 3);
      if (line2Ref.current) {
        line2Ref.current.style.opacity = String(ease2);
        line2Ref.current.style.transform = `translate3d(0, ${(1 - ease2) * 28}px, 0)`;
      }

      const t3 = Math.max(0, Math.min(1, (p - 0.35) / 0.65));
      const ease3 = 1 - Math.pow(1 - t3, 3);
      if (detailsRef.current) {
        detailsRef.current.style.opacity = String(ease3);
        detailsRef.current.style.transform = `translate3d(0, ${(1 - ease3) * 20}px, 0)`;
        detailsRef.current.style.pointerEvents = ease3 > 0.5 ? "auto" : "none";
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvasEl.getBoundingClientRect();
      canvasEl.width = Math.max(2, Math.floor(r.width * dpr));
      canvasEl.height = Math.max(2, Math.floor(r.height * dpr));
      renderState(animState.value);
    };

    const load = (i) => {
      if (frames[i]) return;
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      img.onload = () => {
        if (
          i === 0 ||
          Math.abs(i - Math.round(animState.value * (TOTAL_FRAMES - 1))) <= 2
        ) {
          renderState(animState.value);
        }
      };
      frames[i] = img;
    };

    load(0);
    load(TOTAL_FRAMES - 1);
    for (let i = 0; i < TOTAL_FRAMES; i += 4) load(i);
    for (let i = 0; i < TOTAL_FRAMES; i++) load(i);

    resize();
    renderState(animState.value);
    window.addEventListener("resize", resize);

    const lockScroll = () => {
      window.scrollTo(0, 0);
      if (window.lenis) window.lenis.stop();
      document.documentElement.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      if (window.lenis) window.lenis.start();
    };

    if (phase === "dark") {
      // Aguarda um tick para garantir que o Lenis já inicializou no App.jsx
      setTimeout(() => {
        if (phase === "dark") lockScroll();
      }, 20);
    }

    let activeTween = null;

    const startLighting = () => {
      if (phase !== "dark") return;
      phase = "lighting";
      lockScroll();
      if (activeTween) activeTween.kill();

      activeTween = gsap.to(animState, {
        value: 1,
        duration: 0.95,
        ease: "power2.inOut",
        onUpdate: () => renderState(animState.value),
        onComplete: () => {
          // Somente após as luzes acenderem 100% libera a rolagem do site
          phase = "unlocked";
          unlockScroll();
        },
      });
    };

    const startDarkening = () => {
      if (phase !== "unlocked") return;
      phase = "darkening";
      lockScroll();
      if (activeTween) activeTween.kill();

      activeTween = gsap.to(animState, {
        value: 0,
        duration: 0.75,
        ease: "power2.inOut",
        onUpdate: () => renderState(animState.value),
        onComplete: () => {
          phase = "dark";
        },
      });
    };

    const onWheel = (e) => {
      if (phase === "dark") {
        if (e.deltaY > 0) {
          e.preventDefault();
          startLighting();
        }
        return;
      }

      if (phase === "lighting" || phase === "darkening") {
        // Bloqueia qualquer avanço de página enquanto a luz está acendendo/apagando
        e.preventDefault();
        return;
      }

      if (phase === "unlocked" && window.scrollY <= 2 && e.deltaY < -15) {
        e.preventDefault();
        startDarkening();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const dy = touchStartY - e.touches[0].clientY;

      if (phase === "dark") {
        if (dy > 10) {
          e.preventDefault();
          startLighting();
        }
        return;
      }

      if (phase === "lighting" || phase === "darkening") {
        e.preventDefault();
        return;
      }

      if (phase === "unlocked" && window.scrollY <= 2 && dy < -20) {
        e.preventDefault();
        startDarkening();
      }
    };

    const onKeyDown = (e) => {
      if (phase === "dark") {
        if (["ArrowDown", "PageDown", "Space", " "].includes(e.key)) {
          e.preventDefault();
          startLighting();
        }
      } else if (phase === "lighting" || phase === "darkening") {
        if (
          ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Space", " "].includes(
            e.key
          )
        ) {
          e.preventDefault();
        }
      }
    };

    // Se o usuário clicar em algum tópico da barra no topo, libera imediatamente
    const onAnchorClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (href && href !== "#" && href !== "#inicio" && phase !== "unlocked") {
        if (activeTween) activeTween.kill();
        animState.value = 1;
        renderState(1);
        phase = "unlocked";
        unlockScroll();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onAnchorClick, true);

    return () => {
      unlockScroll();
      window.removeEventListener("resize", resize);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onAnchorClick, true);
      if (activeTween) activeTween.kill();
    };
  }, []);

  const msg = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia."
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative h-screen w-full bg-[#F5F5F7] p-2.5 sm:p-3.5"
    >
      {/* Quadrado com bordas arredondadas cobrindo toda a tela */}
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#0A0B0D] sm:rounded-[38px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        {/* Vídeo/Frames da casa em tela cheia dentro do quadro arredondado */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="
            absolute inset-0 h-full w-full select-none pointer-events-none
          "
        />

        {/* Vinheta lateral suave apenas para leitura perfeita do texto sobre o vídeo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,10,12,0.74) 0%, rgba(8,10,12,0.34) 44%, rgba(8,10,12,0.04) 78%, transparent 100%)",
          }}
        />

        {/* Texto ao lado esquerdo */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] flex-col justify-center px-7 pt-14 sm:px-14 lg:px-20">
          <div className="max-w-[680px]">
            <h1 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              <span className="block">Projetos inteligentes.</span>
              <span
                ref={line2Ref}
                className="mt-1 block text-[#10B981] opacity-0 will-change-[transform,opacity]"
              >
                Resultados eficientes.
              </span>
            </h1>

            <div
              ref={detailsRef}
              className="mt-7 max-w-[440px] opacity-0 pointer-events-none will-change-[transform,opacity]"
            >
              <p className="text-[16px] leading-[1.55] text-white/80 sm:text-[17px]">
                Projetos elétricos, controle e automação, consultoria e laudos
                técnicos com precisão normativa.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={`${WHATSAPP}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-medium text-[#0A0B0D] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#quem-somos"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
                >
                  Conhecer a empresa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
