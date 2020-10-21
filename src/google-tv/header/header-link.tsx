import React, { useLayoutEffect, useRef } from 'react';
import { StyledHeaderLink } from './styled';

function HeaderLink({ children, focused, setFocused, label, ...props }: any) {
  const ref = useRef<typeof StyledHeaderLink>();

  useLayoutEffect(() => {
    if (focused) {
      const clientRect = ref.current as any;
      const measure = {
        height: clientRect.offsetHeight,
        width: clientRect.offsetWidth,
        left: clientRect.offsetLeft,
        top: clientRect.offsetTop,
      };
      setFocused({ ...measure, label });
    }
  }, [focused, label, setFocused]);

  return (
    <StyledHeaderLink ref={ref} {...props} focused={focused}>
      {children}
    </StyledHeaderLink>
  );
}

export default HeaderLink;
