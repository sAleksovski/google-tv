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

export const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop - 32, behavior: 'smooth' });

export const scrollToY = (top: number) => window.scrollTo({ top, behavior: 'smooth' });
