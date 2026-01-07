"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}

export const TypingEffect = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  cursor = true,
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    if (!cursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayText}
      {cursor && currentIndex < text.length && (
        <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
      )}
    </span>
  );
};
