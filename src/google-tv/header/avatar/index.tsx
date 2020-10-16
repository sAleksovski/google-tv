import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import { Image, Letter } from './styled';

interface AvatarProps {
  avatarUrl?: string;
  name?: string;
  focused: boolean;
}

function Avatar({ avatarUrl, name, focused }: AvatarProps) {
  if (avatarUrl) {
    return <Image {...{ focused }} avatarUrl={avatarUrl} />;
  }

  return (
    <Letter color="#DA7657" {...{ focused }}>
      <span>{name ? name[0] : '?'}</span>
    </Letter>
  );
}

export default withFocusable()(Avatar);
