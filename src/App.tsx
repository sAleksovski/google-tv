import React from 'react';
import styled from 'styled-components';
import { BaseStyles, NormalizeStyles } from './styles';
import './styles/fontStyles.css';

const StyledText = styled.div`
  font-weight: bold;
`;

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <div>
        <StyledText>Hello</StyledText>
      </div>
    </>
  );
}

export default App;
