import { TvItem } from 'google-tv/data';
import styled from 'styled-components';

export const HorizontalSectionContainer = styled.div`
  margin-bottom: 32px;
`;

export const HorizontalSectionLabel = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 8px;
  padding: 0px 80px;
`;

export const ScrollableHorizontalSection = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  transition: all 0.25s ease-in-out;
`;

export const HorizontalSectionList = styled.div`
  flex-shrink: 0;
  display: flex;
  padding: 0 64px;
  position: relative;
`;

export const HorizontalSectionListItemContainer = styled.div<{ focused: boolean; item: TvItem }>`
  padding: 16px;
  transition: all 0.25s ease-in-out;
  ${({ focused }) =>
    focused &&
    `
    transform: scale(1.05);
  `}
`;

export const HorizontalSectionListItemImage = styled.div<{ focused: boolean; item: TvItem }>`
  height: 200px;
  width: 300px;
  border-radius: 8px;
  background: url('${({ item }) => item.backdropImage}') no-repeat center center;
  background-size: cover;
  margin-bottom: 16px;
  position: relative;
`;

export const HorizontalSectionListItemImageDarken = styled.div<{ focused: boolean; item: TvItem }>`
  position: absolute;
  height: 200px;
  width: 300px;
  border-radius: 8px;
  background: linear-gradient(
    rgba(2, 2, 2, ${({ focused }) => (focused ? '0' : '0.3')}),
    rgba(2, 2, 2, ${({ focused }) => (focused ? '0' : '0.3')})
  );
  transition: all 0.25s ease-in-out;
`;

export const HorizontalSectionListItemTitle = styled.div`
  color: white;
  font-size: 20px;
`;
