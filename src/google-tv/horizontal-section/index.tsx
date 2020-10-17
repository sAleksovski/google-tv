import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { TvItem } from 'google-tv/data';
import { GoogleTvContext } from 'google-tv/state';
import React, { useCallback, useContext, useRef } from 'react';
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
  const { setSpotlightItem } = useContext(GoogleTvContext);

  const onBecameFocused = useCallback(
    ({ x }, { item }) => {
      setSpotlightItem(item);
      ref.current.scrollTo({
        left: x - 80,
        top: 0,
        behavior: 'smooth',
      });
    },
    [ref, setSpotlightItem],
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
