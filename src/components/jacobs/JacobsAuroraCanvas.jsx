import React, { useEffect, useRef } from "react";

export default function JacobsAuroraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    // Mouse parallax
    let mouse = { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Aurora Ribbon Configuration (Dense wave mesh)
    const LINES = 48; // Number of parallel flowing ribbon strands
    const POINTS_PER_LINE = 120; // Resolution of each strand
    let time = 0;

    const render = () => {
      time += 0.008;
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Dark deep base fade
      ctx.fillStyle = "#0B0F0D";
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric glow in the background
      const grad = ctx.createRadialGradient(
        width * 0.65 + (mouse.x - width * 0.5) * 0.1,
        height * 0.45 + (mouse.y - height * 0.5) * 0.1,
        20,
        width * 0.65,
        height * 0.45,
        width * 0.6
      );
      grad.addColorStop(0, "rgba(11, 122, 90, 0.28)");
      grad.addColorStop(0.4, "rgba(0, 194, 255, 0.12)");
      grad.addColorStop(0.8, "rgba(7, 12, 10, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Additive blending for luminous aurora glow
      ctx.globalCompositeOperation = "lighter";

      const startX = width * 0.2;
      const endX = width * 1.15;
      const stepX = (endX - startX) / POINTS_PER_LINE;

      for (let l = 0; l < LINES; l++) {
        const lineOffset = (l / LINES) * 180;
        const depthFactor = l / LINES; // 0 (back) to 1 (front)
        
        // Color transition: Deep cyan to emerald to mint
        const alpha = 0.18 + Math.sin(depthFactor * Math.PI) * 0.45;
        const r = Math.round(10 + depthFactor * 35);
        const g = Math.round(140 + depthFactor * 100);
        const b = Math.round(220 - depthFactor * 80);

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.75})`;
        ctx.lineWidth = 0.8 + depthFactor * 0.8;

        ctx.beginPath();
        let prevX = 0;
        let prevY = 0;

        for (let i = 0; i <= POINTS_PER_LINE; i++) {
          const x = startX + i * stepX;
          const normX = i / POINTS_PER_LINE;

          // Multi-frequency undulating wave formula (Identical to Jacobs Aurora)
          const wave1 = Math.sin(normX * 4.5 + time * 1.2 + lineOffset * 0.02) * 110;
          const wave2 = Math.cos(normX * 7.0 - time * 0.9 + lineOffset * 0.03) * 60;
          const wave3 = Math.sin(normX * 12.0 + time * 1.8) * 25;

          // Diagonal diagonal slant across viewport
          const baseY = height * 0.22 + normX * (height * 0.5) + lineOffset * 1.4;
          const mouseTilt = (mouse.y - height * 0.5) * 0.12 * normX;

          const y = baseY + wave1 + wave2 + wave3 + mouseTilt;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            // Smooth curve
            const cx = (prevX + x) * 0.5;
            const cy = (prevY + y) * 0.5;
            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
          }
          prevX = x;
          prevY = y;

          // Draw luminous particle nodes every few intervals
          if (i % 6 === 0 && Math.sin(i + l + time * 2) > 0.3) {
            ctx.save();
            ctx.fillStyle = `rgba(180, 255, 240, ${alpha * 0.9})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.2 + depthFactor * 1.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "source-over";
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0"
    />
  );
}

