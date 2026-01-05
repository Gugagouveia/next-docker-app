import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 100;

export const useScrollPosition = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsAtTop(scrolled < SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isAtTop };
};
