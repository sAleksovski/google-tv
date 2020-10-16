import React from 'react';
import GoogleTV from './google-tv';
import { BaseStyles, NormalizeStyles } from './styles';
import './styles/fontStyles.css';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <GoogleTV />
    </>
  );
}

export default App;
