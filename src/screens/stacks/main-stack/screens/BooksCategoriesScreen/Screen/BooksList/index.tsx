import React, { FunctionComponent, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import BooksListItem from '../BooksListItem';

import { Book } from '../../../../../../../core/api/books/responses';

interface BooksListProps {
  books: Book[];
  onPressBook(chapters: string[]): void;
}

const BooksList: FunctionComponent<BooksListProps> = (props) => {
  const { books, onPressBook } = props;

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Book>) => {
      return <BooksListItem item={item} onPressBook={onPressBook} />;
    },
    [onPressBook],
  );

  return (
    <FlatList
      data={books}
      extraData={books}
      contentContainerStyle={styles.listContentContainerStyle}
      renderItem={renderItem}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  listContentContainerStyle: {
    paddingHorizontal: 8,
  },
});

export default BooksList;
