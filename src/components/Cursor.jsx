import React, { useEffect, useRef, useState } from "react";

/**
 * Cursor de luxo editorial:
 * Uma bolinha vazada ("sem nada dentro, só a borda preta"),
 * com seguimento inercial suave (lerp) e expansão em botões/links.
 */
export default function Cursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Apenas para ponteiros finos (mouse / trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest?.(
        "a, button, [role='button'], input, textarea, select, [data-hover]"
      );
      setIsHovering(!!target);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const loop = () => {
      // Interpolação suave (lerp inercial de seda)
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-transparent transition-[width,height,border-color,background-color,opacity] duration-300 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isHovering
          ? "h-14 w-14 border-[2px] border-black shadow-[0_0_0_1px_rgba(255,255,255,0.7)] bg-black/[0.04]"
          : "h-8 w-8 border-[1.5px] border-black shadow-[0_0_0_1px_rgba(255,255,255,0.45)]"
      }`}
      aria-hidden="true"
    />
  );
}
