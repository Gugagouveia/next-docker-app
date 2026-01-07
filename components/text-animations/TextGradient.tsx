"use client";

import { CSSProperties } from "react";

interface TextGradientProps {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export const TextGradient = ({
  text,
  className = "",
  from = "#6366f1",
  via = "#a855f7",
  to = "#ec4899",
  animate = false,
}: TextGradientProps) => {
  const gradientStyle: CSSProperties = {
    background: `linear-gradient(90deg, ${from}, ${via}, ${to})`,
    backgroundSize: animate ? "200% 100%" : "100% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: animate ? "gradientShift 3s ease infinite" : undefined,
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      <span className={className} style={gradientStyle}>
        {text}
      </span>
    </>
  );
};
