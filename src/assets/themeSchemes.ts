import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

import { Nullable } from '../types/utils';

export enum ThemeSchemes {
  light = 'light',
  dark = 'dark',
}

export type ThemeScheme = Theme & {
  colors: {};
};

export const LightThemeScheme: ThemeScheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const DarkThemeScheme: ThemeScheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export const getThemeScheme = (dark?: Nullable<boolean>) => {
  return dark ? DarkThemeScheme : LightThemeScheme;
};
