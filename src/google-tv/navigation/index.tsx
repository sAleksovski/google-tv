import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React, { useEffect } from 'react';

const Container = ({ setFocus, children }: any) => {
  useEffect(() => {
    setFocus('initial-focus');
  }, [setFocus, children]);

  return <div>{children}</div>;
};

export default withFocusable()(Container);

export const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop - 32, behavior: 'smooth' });

export const scrollToY = (top: number) => window.scrollTo({ top, behavior: 'smooth' });
