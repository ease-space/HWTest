import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BooksScreen from '../main-stack/screens/BooksScreen';
import ReadBookScreen from '../main-stack/screens/ReadBookScreen';

import { MainStackScreens } from '../../../navigation/helpers/screens';

import { MainStackParamList, MainStackNavigatorProps } from '../../../types/navigation';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator: FunctionComponent<MainStackNavigatorProps> = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={MainStackScreens.BooksScreen} component={BooksScreen} />

      <MainStack.Screen name={MainStackScreens.ReadBookScreen} component={ReadBookScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
