import styled from 'styled-components';

const IMAGE_SIZE = 42;

interface ImageProps {
  avatarUrl: string;
  focused: boolean;
}

export const Image = styled.div<ImageProps>`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-radius: 100%;
  background-image: url('${(props) => props.avatarUrl}');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ebecf0;
  ${({ focused }) => focused && `box-shadow: 0 0 0 1pt white;`}
`;

interface LetterProps {
  color: string;
  focused: boolean;
}

export const Letter = styled.div<LetterProps>`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-radius: 100%;
  text-transform: uppercase;
  color: #fff;
  background: ${(props) => props.color};
  font-size: ${IMAGE_SIZE * 0.66}px;
  user-select: none;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  ${({ focused }) => focused && `box-shadow: 0 0 0 1pt white;`}
`;
