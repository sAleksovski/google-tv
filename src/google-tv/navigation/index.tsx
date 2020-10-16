import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React, { useEffect } from "react";

const Container = ({ setFocus, children }: any) => {
  useEffect(() => {
    setFocus('initial-focus')
  }, [setFocus, children])

  return <div>{children}</div>
};

export default withFocusable()(Container);;
