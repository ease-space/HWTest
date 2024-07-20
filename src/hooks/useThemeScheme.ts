import { useTheme } from '@react-navigation/native';

import { ThemeScheme } from '../assets/themeSchemes';

const useThemeScheme = () => {
  const theme = useTheme();

  return theme as ThemeScheme;
};

export default useThemeScheme;
