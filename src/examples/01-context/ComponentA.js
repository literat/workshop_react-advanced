import React from 'react';
import ThemeContext from './ThemeContext';

const A = () => (
  <ThemeContext.Provider value="green">
    <D />
  </ThemeContext.Provider>
);
