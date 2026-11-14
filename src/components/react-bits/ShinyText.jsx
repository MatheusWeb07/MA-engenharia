import React from "react";

/**
 * React Bits — ShinyText Component
 * Elegant shimmering shine animation moving across text.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = "",
  shimmerColor = "rgba(255, 255, 255, 0.85)",
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block relative overflow-hidden ${disabled ? "" : "shiny-text"} ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, currentColor 0%, currentColor 38%, ${shimmerColor} 50%, currentColor 62%, currentColor 100%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: disabled ? "none" : `shine ${animationDuration} linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shine {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </span>
  );
}
