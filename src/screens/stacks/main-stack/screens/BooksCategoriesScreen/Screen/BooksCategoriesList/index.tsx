import React, { FunctionComponent, Fragment, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SectionList, View, StyleSheet } from 'react-native';

import Typography from '../../../../../../../components/Typography';

import BooksList from '../BooksList';

import StubList from '../../../../../../components/StubList';

import { BooksCategory } from '../../../../../../../core/api/books/responses';

interface BooksCategoriesListProps {
  loading: boolean;
  booksCategories: BooksCategory[];
  onPressBook(chapters: string[]): void;
}

const BooksCategoriesList: FunctionComponent<BooksCategoriesListProps> = (props) => {
  const { loading, booksCategories, onPressBook } = props;

  const insets = useSafeAreaInsets();

  const sections = useMemo(() => {
    return booksCategories.map((booksCategory) => {
      return {
        title: booksCategory.name,
        data: booksCategory.books,
      };
    });
  }, [booksCategories]);

  return (
    <SectionList
      sections={sections}
      extraData={sections}
      contentContainerStyle={[styles.listContentContainerStyle, { paddingBottom: insets.bottom }]}
      ListEmptyComponent={<StubList loading={loading} />}
      renderSectionHeader={({ section }) => {
        return (
          <Fragment>
            <View style={styles.listSectionHeader}>
              <Typography variant="headline-small" fontWeight="extra-bold">
                {section.title}
              </Typography>
            </View>

            <BooksList books={section.data} onPressBook={onPressBook} />
          </Fragment>
        );
      }}
      renderItem={() => <Fragment />}
    />
  );
};

const styles = StyleSheet.create({
  listContentContainerStyle: {
    flexGrow: 1,
  },
  listSectionHeader: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});

export default BooksCategoriesList;
