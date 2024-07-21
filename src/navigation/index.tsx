import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStackNavigator from '../screens/stacks/main-stack';

import useInitThemeScheme from '../hooks/useInitThemeScheme';

import { RootStackScreens } from './helpers/screens';

import { getBaseScreenOptions } from './helpers/options';

import { navigationRef } from './helpers';

import { RootStackParamList } from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: FunctionComponent = () => {
  const themeScheme = useInitThemeScheme();

  return (
    <NavigationContainer ref={navigationRef} theme={themeScheme}>
      <RootStack.Navigator
        screenOptions={{
          ...getBaseScreenOptions(),
          headerShown: false,
        }}
      >
        <RootStack.Screen name={RootStackScreens.MainStackNavigator} component={MainStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
