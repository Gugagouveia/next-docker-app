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
        className={`relative w-full hidden md:block ${
          isImageRight ? "order-2" : "order-2 md:order-1"
        }`}
        style={{ height: `${imageHeight}px` }}
      >
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          whileHover={{ 
            scale: 1.05,
            filter: "drop-shadow(0 25px 50px rgba(99,102,241,0.4))"
          }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-contain rounded-3xl"
          style={{ filter: "drop-shadow(0 0 0 rgba(99,102,241,0))" }}
        />
      </motion.div>
    </motion.div>
  );
};
