import React, { FunctionComponent, useCallback } from 'react';

import Screen from './Screen';

import { MainStackScreens } from '../../../../../navigation/helpers/screens';

import { BooksScreenProps } from '../../../../../types/navigation';

const BooksScreen: FunctionComponent<BooksScreenProps> = (props) => {
  const { navigation } = props;

  const onPressReadBook = useCallback(() => navigation.navigate(MainStackScreens.ReadBookScreen), [navigation]);

  return <Screen onPressReadBook={onPressReadBook} />;
};

export default BooksScreen;
