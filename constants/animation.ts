export const FADE_IN_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const SLIDE_IN_FROM_LEFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

export const SLIDE_IN_FROM_RIGHT = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2 }
};

export const SLIDE_DOWN_ANIMATION = {
  initial: { y: -100 },
  animate: { y: 0 }
};

export const SCALE_ON_HOVER = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 }
};
