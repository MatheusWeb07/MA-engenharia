import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * React Bits — BlurText Component
 * Animates text in with a subtle Gaussian blur to crystal focus transition.
 */
export default function BlurText({
  text = "",
  delay = 0.05,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold, margin: rootMargin });

  const defaultFrom = {
    filter: "blur(10px)",
    opacity: 0,
    transform: direction === "top" ? "translate3d(0,-25px,0)" : "translate3d(0,25px,0)",
  };

  const defaultTo = [
    {
      filter: "blur(4px)",
      opacity: 0.6,
      transform: direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={defaultFrom}
          animate={inView ? defaultTo[1] : defaultFrom}
          transition={{
            duration: 0.65,
            delay: index * delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          className="inline-block transform-gpu will-change-[transform,filter,opacity]"
        >
          {element === " " ? "\u00A0" : element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
}
