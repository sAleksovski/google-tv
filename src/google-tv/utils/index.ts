import { useEffect } from 'react';

export function useDisableScroll() {
  useEffect(() => {
    function preventScroll(e: WheelEvent) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;
    }
    document.addEventListener('wheel', preventScroll, {
      passive: false,
    });

    return () => document.removeEventListener('wheel', preventScroll);
  }, []);
}

export const scrollToRef = (ref: any) =>
  window.scrollTo({ top: ref.current.offsetTop - remToPx(2), behavior: 'smooth' });

export const scrollToY = (top: number) => window.scrollTo({ top, behavior: 'smooth' });

const getBaseSize = () =>
  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--base-font-size').replace('px', ''));

export const remToPx = (rem: number): number => rem * getBaseSize();
