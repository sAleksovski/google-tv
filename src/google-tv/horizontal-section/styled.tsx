import { TvItem } from 'google-tv/data';
import styled, { css, keyframes } from 'styled-components';

export const HorizontalSectionLabel = styled.div`
  color: white;
  font-size: 1.5rem;
  height: 2rem;
  margin-bottom: 0.5rem;
  transition: all 0.25s ease-in-out;
  padding: 0 5rem;
`;

export const HorizontalSectionContainer = styled.div<{ hasFocusedChild: boolean }>`
  margin-bottom: 2rem;

  ${({ hasFocusedChild }) =>
    hasFocusedChild &&
    `
    ${HorizontalSectionLabel} {
      font-size: 2rem;
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
  padding: 0 4rem;
  position: relative;
`;

export const HorizontalSectionListItemContainer = styled.div<{ focused: boolean; item: TvItem }>`
  padding: 1rem;
  transition: all 0.25s ease-in-out;
  ${({ focused }) =>
    focused &&
    `
    transform: scale(1.05);
  `}
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0.125rem 0.125rem rgba(255, 255, 255, 1);
  }
  to {
    box-shadow: 0 0 0.25rem 0.5rem rgba(255, 255, 255, .6);
  }
`;

const glowRule = css`
  animation: ${glow} 1s ease-in-out infinite alternate;
  animation-delay: 0.25s;
`;

export const HorizontalSectionListItemImage = styled.div<{ focused: boolean; item: TvItem }>`
  height: 12.5rem;
  width: 18.75rem;
  border-radius: 0.5rem;
  background: url('${({ item }) => item.backdropImage}') no-repeat center center;
  background-size: cover;
  margin-bottom: 1rem;
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
  height: 12.5rem;
  width: 18.75rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    rgba(2, 2, 2, ${({ focused }) => (focused ? '0' : '0.3')}),
    rgba(2, 2, 2, ${({ focused }) => (focused ? '0' : '0.3')})
  );
  transition: all 0.25s ease-in-out;
`;

export const HorizontalSectionListItemTitle = styled.div`
  color: white;
  font-size: 1.25rem;
`;

export const HorizontalSectionListItemSubtitle = styled.div<{ focused: boolean }>`
  color: white;
  font-size: 1.125rem;
  opacity: 0;

  ${({ focused }) =>
    focused &&
    `
      opacity: 0.7;
    `}
`;
