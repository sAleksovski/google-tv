import { TvItem } from 'google-tv/data';
import styled, { css, keyframes } from 'styled-components';

export const HorizontalSectionLabel = styled.div`
  color: white;
  font-size: 24px;
  height: 32px;
  margin-bottom: 8px;
  transition: all 0.25s ease-in-out;
  padding: 0px 80px;
`;

export const HorizontalSectionContainer = styled.div<{ hasFocusedChild: boolean }>`
  margin-bottom: 32px;

  ${({ hasFocusedChild }) =>
    hasFocusedChild &&
    `
    ${HorizontalSectionLabel} {
      font-size: 32px;
    }
  `}
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

const glow = keyframes`
  from {
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 1);
  }
  to {
    box-shadow: 0px 0px 4px 8px rgba(255, 255, 255, .6);
  }
`;

const glowRule = css`
  animation: ${glow} 1s ease-in-out infinite alternate;
  animation-delay: 0.25s;
`;

export const HorizontalSectionListItemImage = styled.div<{ focused: boolean; item: TvItem }>`
  height: 200px;
  width: 300px;
  border-radius: 8px;
  background: url('${({ item }) => item.backdropImage}') no-repeat center center;
  background-size: cover;
  margin-bottom: 16px;
  position: relative;
  backface-visibility: visible;

  ${({ focused }) =>
    focused &&
    css`
      ${glowRule}
    `}
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

export const HorizontalSectionListItemSubtitle = styled.div<{ focused: boolean }>`
  color: white;
  font-size: 18px;
  opacity: 0;

  ${({ focused }) =>
    focused &&
    `
      opacity: 0.7;
    `}
`;
