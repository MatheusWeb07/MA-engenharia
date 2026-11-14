import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * React Bits — DecryptedText Component
 * Technical engineering character scramble into revealed text.
 */
export default function DecryptedText({
  text = "",
  speed = 40,
  maxIterations = 12,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><,./-=",
  className = "",
  parentClassName = "",
  animateOn = "view", // 'view' or 'hover'
  revealDirection = "start",
  useOriginalCharsOnly = false,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    let interval;
    let iteration = 0;

    const shouldAnimate =
      animateOn === "view" ? inView : isHovering;

    if (shouldAnimate) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "\n") return char;
              if (index < iteration) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          setIsScrambling(false);
          clearInterval(interval);
        }

        iteration += 1 / (maxIterations / text.length);
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [inView, isHovering, text, animateOn, speed, maxIterations, characters]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono ${parentClassName}`}
      onMouseEnter={() => animateOn === "hover" && setIsHovering(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
