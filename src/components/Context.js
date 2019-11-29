import React from 'react';
import { readTheme, readDirection } from '@/utils/themeHelpers';

export const ThemeContext = React.createContext({
  direction: readDirection(),
  theme: readTheme()
});
