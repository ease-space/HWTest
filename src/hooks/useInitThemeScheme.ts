import { useColorScheme } from 'react-native';

import { getThemeScheme, ThemeSchemes } from '../assets/themeSchemes';

const useInitThemeScheme = () => {
  const deviceThemeScheme = useColorScheme();

  return getThemeScheme(deviceThemeScheme === ThemeSchemes.dark);
};

export default useInitThemeScheme;
