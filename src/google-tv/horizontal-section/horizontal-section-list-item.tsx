import { TvItem } from 'google-tv/data';
import React from 'react';
import {
  HorizontalSectionListItemContainer,
  HorizontalSectionListItemImage,
  HorizontalSectionListItemImageDarken,
  HorizontalSectionListItemTitle,
} from './styled';

function HorizontalSectionListItem({ focused, item }: { focused: boolean; item: TvItem }) {
  return (
    <HorizontalSectionListItemContainer {...{ focused, item }}>
      <HorizontalSectionListItemImage {...{ focused, item }}>
        <HorizontalSectionListItemImageDarken {...{ focused, item }} />
      </HorizontalSectionListItemImage>
      <HorizontalSectionListItemTitle>{item.title}</HorizontalSectionListItemTitle>
    </HorizontalSectionListItemContainer>
  );
}

export default HorizontalSectionListItem;
