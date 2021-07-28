import React from 'react';
import ThemeContext from './ThemeContext';

const C = () => (
  <ThemeContext.Consumer>
    {value => (
      <p style={{ color: value }}>
        Hello World
      </p>
    )}
  </ThemeContext.Consumer>
);
