import { createContext } from 'react';

import type { ThemeName } from '../types';

export type State = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

export const THEME_KEY = 'theme';

export const initialState: State = {
  theme: localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light',
  setTheme: (theme: ThemeName) => {
    void theme;
  },
};

const ThemeContext = createContext(initialState);

export default ThemeContext;
