import React, { FunctionComponent } from 'react';
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../../navigation/components/Header';

import CloseButton from '../../../navigation/components/CloseButton';

import BooksScreen from '../main-stack/screens/BooksScreen';
import ReadBookScreen from '../main-stack/screens/ReadBookScreen';

import useThemeScheme from '../../../hooks/useThemeScheme';

import { MainStackScreens } from '../../../navigation/helpers/screens';

import { getBaseScreenOptions, getModalScreenOptions } from '../../../navigation/helpers/options';

import { MainStackParamList, MainStackNavigatorProps } from '../../../types/navigation';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator: FunctionComponent<MainStackNavigatorProps> = () => {
  const insets = useSafeAreaInsets();

  const themeScheme = useThemeScheme();

  const renderBooksScreenHeader = (headerProps: StackHeaderProps) => {
    return <Header {...headerProps} headerTitleShown={false} />;
  };

  return (
    <MainStack.Navigator
      screenOptions={{
        ...getBaseScreenOptions(insets.top, themeScheme),
      }}
    >
      <MainStack.Screen
        name={MainStackScreens.BooksScreen}
        component={BooksScreen}
        options={{
          header: renderBooksScreenHeader,
        }}
      />

      <MainStack.Group
        screenOptions={{
          ...getModalScreenOptions(),
          headerLeft: CloseButton,
        }}
      >
        <MainStack.Screen name={MainStackScreens.ReadBookScreen} component={ReadBookScreen} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
