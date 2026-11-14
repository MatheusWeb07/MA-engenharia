import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * React Bits — Magnet Component
 * Magnetic pull effect towards user cursor.
 */
export default function Magnet({
  children,
  padding = 30,
  disabled = false,
  magnetStrength = 2.5,
  activeTransition = "transform 0.25s ease-out",
  inactiveTransition = "transform 0.45s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const magnetRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!magnetRef.current || disabled) return;
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    if (
      Math.abs(distX) < width / 2 + padding &&
      Math.abs(distY) < height / 2 + padding
    ) {
      setIsHovered(true);
      setPosition({ x: distX / magnetStrength, y: distY / magnetStrength });
    } else {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${wrapperClassName}`}
      {...props}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={innerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}
