import React, { FunctionComponent, useState, useEffect } from 'react';

import Screen from './Screen';

import { getBooksCategories } from '../../../../../core/api/books/requests';

import { BooksCategory } from '../../../../../core/api/books/responses';

import { BooksCategoriesScreenProps } from '../../../../../types/navigation';

const BooksCategoriesScreen: FunctionComponent<BooksCategoriesScreenProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [booksCategories, setBooksCategories] = useState<BooksCategory[]>([]);

  useEffect(() => {
    getBooksCategories().then((response) => {
      setBooksCategories(response.data);

      setLoading(false);
    });
  }, []);

  return <Screen loading={loading} booksCategories={booksCategories} />;
};

export default BooksCategoriesScreen;
