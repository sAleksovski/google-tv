import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { TvItem } from 'google-tv/data';
import React, { useCallback, useRef } from 'react';
import HorizontalSectionListItem from './horizontal-section-list-item';
import {
  HorizontalSectionContainer,
  HorizontalSectionLabel,
  HorizontalSectionList,
  ScrollableHorizontalSection,
} from './styled';

const FocusableHorizontalSectionListItem = withFocusable()(HorizontalSectionListItem);
const FocusableHorizontalSectionContainer = withFocusable()(HorizontalSectionContainer);

interface HorizontalSectionProps {
  title: string;
  items: TvItem[];
}

function HorizontalSection({ title, items }: HorizontalSectionProps) {
  const ref = useRef<any>();

  const onBecameFocused = useCallback(
    ({ x }) => {
      ref.current.scrollTo({
        left: x - 80,
        top: 0,
        behavior: 'smooth',
      });
    },
    [ref],
  );

  return (
    <FocusableHorizontalSectionContainer>
      <HorizontalSectionLabel>{title}</HorizontalSectionLabel>
      <ScrollableHorizontalSection ref={ref}>
        <HorizontalSectionList>
          {items.map((item: TvItem) => (
            <FocusableHorizontalSectionListItem
              key={item.backdropImage}
              item={item}
              onBecameFocused={onBecameFocused}
            />
          ))}
        </HorizontalSectionList>
      </ScrollableHorizontalSection>
    </FocusableHorizontalSectionContainer>
  );
}

export default HorizontalSection;
