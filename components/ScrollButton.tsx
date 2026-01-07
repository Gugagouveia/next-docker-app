"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { scrollToTop, scrollToBottom } from "@/utils/scroll";
import { Button } from "@/components/ui/button";

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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-8 bottom-8 z-50"
    >
      <Button
        onClick={handleClick}
        size="icon"
        className="h-14 w-14 rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-2xl shadow-indigo-600/30 transition-all hover:scale-110 active:scale-95"
        aria-label={isAtTop ? "Ir para o final" : "Ir para o topo"}
      >
        {isAtTop ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
      </Button>
    </motion.div>
  );
};
