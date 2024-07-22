import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';

import Screen from './Screen';

import { MainStackScreens } from '../../../../../navigation/helpers/screens';

import { getBooksCategories } from '../../../../../core/api/books/requests';

import { BooksCategory } from '../../../../../core/api/books/responses';

import { BooksCategoriesScreenProps } from '../../../../../types/navigation';

const BooksCategoriesScreen: FunctionComponent<BooksCategoriesScreenProps> = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = useState<boolean>(true);

  const [booksCategories, setBooksCategories] = useState<BooksCategory[]>([]);

  const onPressBook = useCallback(
    (chapters: string[]) => {
      navigation.navigate(MainStackScreens.ReadBookScreen, {
        chapters,
        chapterIndex: 0,
      });
    },
    [navigation],
  );

  useEffect(() => {
    getBooksCategories().then((response) => {
      setBooksCategories(response.data);

      setLoading(false);
    });
  }, []);

  return <Screen loading={loading} booksCategories={booksCategories} onPressBook={onPressBook} />;
};

export default BooksCategoriesScreen;
