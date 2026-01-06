"use client";

import { motion } from "framer-motion";

interface AboutContentSectionProps {
  title: string | React.ReactNode;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageHeight?: number;
  animationDelay?: number;
}

export const AboutContentSection = ({
  title,
  content,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imageHeight = 450,
  animationDelay = 0,
}: AboutContentSectionProps) => {
  const isImageRight = imagePosition === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 + animationDelay }}
        className={`space-y-6 text-zinc-400 leading-relaxed ${
          isImageRight ? "order-1" : "order-1 md:order-2"
        }`}
      >
        {typeof title === "string" ? (
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">{title}</h2>
        ) : (
          title
        )}
        {content}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: isImageRight ? -15 : 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 + animationDelay }}
        whileHover={{ scale: 1.02, rotateY: isImageRight ? 5 : -5 }}
        className={`relative w-full rounded-3xl overflow-hidden border border-zinc-800/50 hidden md:block ${
          isImageRight ? "order-2" : "order-2 md:order-1"
        }`}
        style={{ height: `${imageHeight}px` }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.04] hover:drop-shadow-[0_25px_50px_rgba(99,102,241,0.35)]"
        />
      </motion.div>
    </motion.div>
  );
};
