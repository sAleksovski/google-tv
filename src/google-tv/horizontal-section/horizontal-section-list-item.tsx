import { TvItem } from 'google-tv/data';
import React from 'react';
import {
  HorizontalSectionListItemContainer,
  HorizontalSectionListItemImage,
  HorizontalSectionListItemImageDarken,
  HorizontalSectionListItemTitle,
} from './styled';

function HorizontalSectionListItem({ focused, item, forwardRef }: { focused: boolean; item: TvItem; forwardRef: any }) {
  return (
    <HorizontalSectionListItemContainer {...{ focused, item }}>
      <HorizontalSectionListItemImage {...{ focused, item }} ref={forwardRef}>
        <HorizontalSectionListItemImageDarken {...{ focused, item }} />
      </HorizontalSectionListItemImage>
      <HorizontalSectionListItemTitle>{item.title}</HorizontalSectionListItemTitle>
    </HorizontalSectionListItemContainer>
  );
}

export default HorizontalSectionListItem;
