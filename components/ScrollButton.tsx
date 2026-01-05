"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { scrollToTop, scrollToBottom } from "@/utils/scroll";

interface ScrollButtonProps {
  isAtTop: boolean;
}

export const ScrollButton = ({ isAtTop }: ScrollButtonProps) => {
  const handleClick = () => {
    if (isAtTop) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={handleClick}
      className="fixed right-8 bottom-8 z-50 p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl shadow-indigo-600/30 transition-all hover:scale-110 active:scale-95"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isAtTop ? "Ir para o final" : "Ir para o topo"}
    >
      {isAtTop ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
    </motion.button>
  );
};
