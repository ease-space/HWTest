import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import Typography from '../../../../../../../components/Typography';

import useThemeScheme from '../../../../../../../hooks/useThemeScheme';

import { Book } from '../../../../../../../core/api/books/responses';

interface BooksListItemProps {
  item: Book;
}

const BooksListItem: FunctionComponent<BooksListItemProps> = (props) => {
  const { item } = props;

  const { cover, description } = item;

  const themeScheme = useThemeScheme();

  return (
    <View style={styles.listItem}>
      <FastImage style={styles.cover} source={{ uri: cover }} />

      <Typography variant="label-medium" color={themeScheme.colors.gray} numberOfLines={2}>
        {description}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 148,
    height: 262,
    marginHorizontal: 8,
  },
  cover: {
    width: 148,
    height: 222,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default BooksListItem;
