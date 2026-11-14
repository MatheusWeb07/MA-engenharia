import React from "react";
import { motion } from "framer-motion";

/**
 * React Bits — SplitText Component
 * Splits text into letters or words with smooth staggered entrance animation.
 */
export default function SplitText({
  text = "",
  className = "",
  delay = 0.03,
  animationFrom = { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  animationTo = { opacity: 1, transform: "translate3d(0, 0, 0)" },
  easing = [0.2, 0.8, 0.2, 1],
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "left",
  onLetterAnimationComplete,
}) {
  const words = text.split(" ");

  return (
    <p
      className={`inline-block overflow-hidden ${className}`}
      style={{ textAlign, whiteSpace: "normal", wordWrap: "break-word" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <motion.span
                key={letterIndex}
                initial={animationFrom}
                whileInView={animationTo}
                viewport={{ once: true, amount: threshold, margin: rootMargin }}
                transition={{
                  duration: 0.6,
                  delay: index * delay,
                  ease: easing,
                }}
                onAnimationComplete={onLetterAnimationComplete}
                className="inline-block transform-gpu"
              >
                {letter}
              </motion.span>
            );
          })}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </p>
  );
}
