import React, { FunctionComponent } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import ScreenLayout from '../../../../../../navigation/components/ScreenLayout';
import Typography from '../../../../../../components/Typography';

interface ScreenProps {
  onPressReadBook(): void;
}

const Screen: FunctionComponent<ScreenProps> = (props) => {
  const { onPressReadBook } = props;

  return (
    <ScreenLayout
      header={
        <View style={styles.header}>
          <Typography variant="display-small" fontWeight="extra-bold" numberOfLines={1}>
            Discover
          </Typography>
        </View>
      }
    >
      <Text>BooksScreen</Text>

      <Button title="Navigate to ReadBookScreen" onPress={onPressReadBook} />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 52,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default Screen;
