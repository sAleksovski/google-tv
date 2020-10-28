import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { TvItem } from 'google-tv/data';
import { GoogleTvContext } from 'google-tv/state';
import { remToPx, scrollToRef, scrollToY } from 'google-tv/utils';
import React, { useCallback, useContext, useRef } from 'react';
import HorizontalSectionListItem from './horizontal-section-list-item';
import {
  HorizontalSectionContainer,
  HorizontalSectionLabel,
  HorizontalSectionList,
  ScrollableHorizontalSection,
} from './styled';

const FocusableHorizontalSectionContainer = withFocusable({ trackChildren: true })(HorizontalSectionContainer);
const FocusableHorizontalSectionListItem = withFocusable()(HorizontalSectionListItem);

interface HorizontalSectionProps {
  scrollToTop?: boolean;
  title: string;
  items: TvItem[];
}

function HorizontalSection({ title, items, scrollToTop }: HorizontalSectionProps) {
  const ref = useRef<any>();
  const containerRef = useRef<any>();
  const childRefs = useRef<{ [key: string]: any }>({});
  const { setSpotlightItem, startPlayingVideo } = useContext(GoogleTvContext);

  const onBecameFocused = useCallback(
    ({ x }, { item }) => {
      setSpotlightItem(item, !!scrollToTop);
      if (scrollToTop) {
        scrollToY(0);
      } else {
        scrollToRef(containerRef);
      }
      ref.current.scrollTo({
        left: x - remToPx(4),
        top: 0,
        behavior: 'smooth',
      });
    },
    [ref, containerRef, scrollToTop, setSpotlightItem],
  );

  const onEnterPress = useCallback(
    ({ item }: { item: TvItem }) => {
      startPlayingVideo(item, childRefs.current[item.id].getBoundingClientRect());
    },
    [startPlayingVideo],
  );

  return (
    <div ref={containerRef}>
      <FocusableHorizontalSectionContainer>
        <HorizontalSectionLabel>{title}</HorizontalSectionLabel>
        <ScrollableHorizontalSection ref={ref}>
          <HorizontalSectionList>
            {items.map((item: TvItem) => (
              <FocusableHorizontalSectionListItem
                forwardRef={(imageRef: any) => (childRefs.current[item.id] = imageRef)}
                key={item.id}
                item={item}
                onBecameFocused={onBecameFocused}
                onEnterPress={onEnterPress}
              />
            ))}
          </HorizontalSectionList>
        </ScrollableHorizontalSection>
      </FocusableHorizontalSectionContainer>
    </div>
  );
}

export default HorizontalSection;
