import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

import { Nullable } from '../types/utils';

export enum ThemeSchemes {
  light = 'light',
  dark = 'dark',
}

export type ThemeScheme = Theme & {
  colors: {};
};

const generalColors: Partial<ThemeScheme['colors']> = {
  background: 'rgb(255, 255, 255)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(14, 14, 22)',
};

export const LightThemeScheme: ThemeScheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...generalColors,
  },
};

export const DarkThemeScheme: ThemeScheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...generalColors,
  },
};

export const getThemeScheme = (dark?: Nullable<boolean>) => {
  return dark ? DarkThemeScheme : LightThemeScheme;
};
