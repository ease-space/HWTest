import React, { FunctionComponent } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import Typography from '../../../../../../../components/Typography';

import useThemeScheme from '../../../../../../../hooks/useThemeScheme';

import { Book } from '../../../../../../../core/api/books/responses';

interface BooksListItemProps {
  item: Book;
  onPressBook(chapters: string[]): void;
}

const BooksListItem: FunctionComponent<BooksListItemProps> = (props) => {
  const { item, onPressBook } = props;

  const { cover, description, chapters } = item;

  const themeScheme = useThemeScheme();

  const onPress = () => onPressBook(chapters);

  return (
    <TouchableOpacity style={styles.listItem} activeOpacity={0.8} onPress={onPress}>
      <FastImage style={styles.cover} source={{ uri: cover }} />

      <Typography style={styles.description} variant="label-medium" color={themeScheme.colors.gray} numberOfLines={2}>
        {description}
      </Typography>
    </TouchableOpacity>
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
  description: {
    marginTop: 6,
  },
});

export default BooksListItem;
