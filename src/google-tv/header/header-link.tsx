import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { StyledHeaderLink } from './styled';

function HeaderLink({ children, focused, setFocused, label, ...props }: any) {
  const ref = useRef<typeof StyledHeaderLink>();
  const measureRef = useRef<any>();

  useLayoutEffect(() => {
    const clientRect = ref.current as any;
    measureRef.current = {
      height: clientRect.offsetHeight,
      width: clientRect.offsetWidth,
      left: clientRect.offsetLeft,
      top: clientRect.offsetTop,
    };
  }, []);

  useEffect(() => {
    if (focused) {
      setFocused({ ...measureRef.current, label });
    }
  }, [focused, label, setFocused]);

  return (
    <StyledHeaderLink ref={ref} {...props} focused={focused}>
      {children}
    </StyledHeaderLink>
  );
}

export default HeaderLink;
