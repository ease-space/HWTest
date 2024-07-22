import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import ScreenLayout from '../../../../../../navigation/components/ScreenLayout';
import Typography from '../../../../../../components/Typography';

import BooksCategoriesList from './BooksCategoriesList';

import { BooksCategory } from '../../../../../../core/api/books/responses';

interface ScreenProps {
  loading: boolean;
  booksCategories: BooksCategory[];
}

const Screen: FunctionComponent<ScreenProps> = (props) => {
  const { loading, booksCategories } = props;

  return (
    <ScreenLayout
      header={
        <View style={styles.screenLayoutHeader}>
          <Typography variant="display-small" fontWeight="extra-bold" numberOfLines={1}>
            Discover
          </Typography>
        </View>
      }
    >
      <BooksCategoriesList loading={loading} booksCategories={booksCategories} />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  screenLayoutHeader: {
    height: 52,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default Screen;
