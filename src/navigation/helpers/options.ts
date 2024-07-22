import { CardStyleInterpolators, TransitionPresets, StackNavigationOptions } from '@react-navigation/stack';
import { StyleSheet, ViewStyle } from 'react-native';

import Header from '../components/Header';

import { ThemeScheme } from '../../assets/themeSchemes';

export const getBaseScreenOptions = (headerInsetsTop = 0, themeScheme?: ThemeScheme): StackNavigationOptions => {
  const headerStyle: ViewStyle = {
    height: headerInsetsTop + 52,
  };

  return {
    header: Header,
    headerMode: 'screen',
    headerTitleAlign: 'center',
    headerTintColor: themeScheme?.colors.text,
    headerStyle: [styles.header, headerStyle],
    headerLeftContainerStyle: styles.headerLeftContainer,
    headerRightContainerStyle: styles.headerRightContainer,
    headerTitleContainerStyle: styles.headerTitleContainer,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
};

export const getModalScreenOptions = (): StackNavigationOptions => {
  return {
    presentation: 'modal',
    ...TransitionPresets.ModalSlideFromBottomIOS,
  };
};

const styles = StyleSheet.create({
  header: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeftContainer: {
    paddingLeft: 8,
  },
  headerRightContainer: {
    paddingRight: 8,
  },
  headerTitleContainer: {
    marginLeft: 8,
    marginRight: 8,
  },
});
