import { SCROLL_OFFSET } from '@/constants/navigation';

export const smoothScrollTo = (targetId: string): void => {
  const element = document.querySelector(targetId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToBottom = (): void => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};
