import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WHATSAPP } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 72;

export default function HeroBuildingScroll() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const vignetteRef = useRef(null);
  const contentRef = useRef(null);
  const telemetryRef = useRef(null);
  const progressFillRef = useRef(null);
  const percentTextRef = useRef(null);
  const stageLabelRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const videoEl = videoRef.current;
    const canvasEl = canvasRef.current;
    if (!heroEl || !videoEl || !canvasEl) return;

    const ctx = canvasEl.getContext("2d", { alpha: false });
    const frames = new Array(TOTAL_FRAMES).fill(null);
    let currentFrameIndex = -1;
    let currentProgress = 0;

    // Draw image with object-fit: cover mathematics onto canvas
    const drawCoverImage = (img) => {
      if (!img || !img.complete || img.naturalWidth === 0) return false;
      const cw = canvasEl.width;
      const ch = canvasEl.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const dx = (cw - sw) * 0.5;
      const dy = (ch - sh) * 0.5;

      ctx.drawImage(img, dx, dy, sw, sh);
      return true;
    };

    const renderFrameAtProgress = (progress) => {
      const clamped = Math.max(0, Math.min(1, progress));
      const targetIdx = Math.round(clamped * (TOTAL_FRAMES - 1));

      // Find exact frame or nearest already-loaded frame
      let img = frames[targetIdx];
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          if (
            targetIdx - offset >= 0 &&
            frames[targetIdx - offset]?.complete &&
            frames[targetIdx - offset]?.naturalWidth > 0
          ) {
            img = frames[targetIdx - offset];
            break;
          }
          if (
            targetIdx + offset < TOTAL_FRAMES &&
            frames[targetIdx + offset]?.complete &&
            frames[targetIdx + offset]?.naturalWidth > 0
          ) {
            img = frames[targetIdx + offset];
            break;
          }
        }
      }

      if (img && drawCoverImage(img)) {
        currentFrameIndex = targetIdx;
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = Math.floor(window.innerWidth * dpr);
      canvasEl.height = Math.floor(window.innerHeight * dpr);
      currentFrameIndex = -1;
      renderFrameAtProgress(currentProgress);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Preload frame 0 immediately, then key intervals, then all remaining frames
    const loadFrame = (index) => {
      if (index < 0 || index >= TOTAL_FRAMES || frames[index]) return;
      const img = new Image();
      img.decoding = "async";
      img.src = `/assets/hero-frames/f_${String(index).padStart(3, "0")}.webp`;
      img.onload = () => {
        if (index === 0 && currentProgress === 0) {
          renderFrameAtProgress(0);
        }
      };
      frames[index] = img;
    };

    loadFrame(0);
    loadFrame(TOTAL_FRAMES - 1);
    for (let i = 0; i < TOTAL_FRAMES; i += 6) loadFrame(i);
    for (let i = 0; i < TOTAL_FRAMES; i++) loadFrame(i);

    // Prepare HTML5 video metadata without autoplay
    const prepareVideo = () => {
      videoEl.pause();
      videoEl.currentTime = 0;
    };

    if (videoEl.readyState >= 1) {
      prepareVideo();
    } else {
      videoEl.addEventListener("loadedmetadata", prepareVideo, { once: true });
    }

    // GSAP + ScrollTrigger Pinned Storytelling
    const gsapCtx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: heroEl,
        start: "top top",
        end: () => (window.innerWidth < 768 ? "+=185%" : "+=270%"),
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          currentProgress = p;

          // 1. Synchronize video.currentTime with scroll progress
          const dur = videoEl.duration || 6.916;
          const targetTime = Math.min(dur - 0.04, Math.max(0, p * (dur - 0.04)));
          if (!videoEl.seeking && Math.abs(videoEl.currentTime - targetTime) > 0.035) {
            try {
              videoEl.currentTime = targetTime;
            } catch (_) {
              // Ignore transient DOM seek exceptions
            }
          }

          // 2. Synchronize frame-accurate canvas for 0ms forward & reverse scrubbing
          renderFrameAtProgress(p);

          // 3. Fade out hero editorial text smoothly as building lights up (0 -> 0.28)
          const textFade = Math.max(0, Math.min(1, 1 - p / 0.28));
          if (contentRef.current) {
            const translateY = (1 - textFade) * -36;
            contentRef.current.style.opacity = String(textFade);
            contentRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
            contentRef.current.style.pointerEvents = textFade < 0.15 ? "none" : "auto";
          }
          if (vignetteRef.current) {
            vignetteRef.current.style.opacity = String(0.18 + textFade * 0.82);
          }

          // 4. Update architectural illumination bar & stage readout
          if (progressFillRef.current) {
            progressFillRef.current.style.transform = `scaleX(${p})`;
          }
          if (percentTextRef.current) {
            percentTextRef.current.textContent = `${Math.round(p * 100)}%`;
          }
          if (stageLabelRef.current) {
            if (p < 0.08) {
              stageLabelRef.current.textContent = "Estado inicial — Edificação desenergizada";
            } else if (p < 0.45) {
              stageLabelRef.current.textContent = "Acionamento — Circuitos de base e pavimento térreo";
            } else if (p < 0.88) {
              stageLabelRef.current.textContent = "Distribuição — Pavimentos superiores e fachada";
            } else {
              stageLabelRef.current.textContent = "Plena carga — Edificação 100% iluminada";
            }
          }
        },
      });

      return () => st.kill();
    }, heroEl);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      gsapCtx.revert();
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-[#0B0C0E] text-white"
    >
      {/* Camada 1: Vídeo nativo sincronizado com o ScrollTrigger */}
      <video
        ref={videoRef}
        src="/assets/hero-building.mp4"
        poster="/assets/hero-building-poster.jpg"
        muted
        playsInline
        preload="auto"
        className="
          absolute inset-0 h-full w-full object-cover object-center
          pointer-events-none select-none
        "
      />

      {/* Camada 2: Buffer de quadros em alta definição sincronizado para scrubbing reversível sem salto de frames */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full pointer-events-none select-none"
      />

      {/* Camada 3: Proteção tonal sutil e natural nas margens para legibilidade tipográfica sem esconder o edifício */}
      <div
        ref={vignetteRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,12,14,0.82) 0%, rgba(11,12,14,0.24) 40%, rgba(11,12,14,0.12) 100%), linear-gradient(to right, rgba(11,12,14,0.62) 0%, rgba(11,12,14,0.14) 50%, transparent 100%)",
        }}
      />


      {/* Camada 4: Composição centralizada, estilo Apple */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-end px-6 pb-24 pt-28 text-center sm:pb-28">
        <div ref={contentRef} className="flex flex-col items-center will-change-[transform,opacity]">
          <p className="mb-5 text-[13px] font-medium tracking-[0.02em] text-white/70">
            MA | Soluções e Engenharia
          </p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
            Projetos inteligentes.
            <br />
            Resultados eficientes.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.5] text-white/75">
            Projetos elétricos, controle e automação, consultoria e laudos técnicos em João Monlevade, MG.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento com a MA Soluções e Engenharia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-[15px] font-medium text-[#1D1D1F] transition-transform duration-300 hover:scale-[1.03]"
            >
              Solicitar orçamento
            </a>
            <a href="#servicos" className="group inline-flex items-center gap-1 text-[15px] font-medium text-white">
              Conhecer serviços
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Indicador mínimo de progresso */}
        <div ref={telemetryRef} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
          <span ref={percentTextRef} className="w-9 text-right text-[12px] font-medium tabular-nums text-white/80">0%</span>
          <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/20">
            <div ref={progressFillRef} className="h-full w-full origin-left scale-x-0 bg-white" />
          </div>
          <span ref={stageLabelRef} className="hidden" />
        </div>
      </div>
    </section>
  );
}

