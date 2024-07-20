import React, { FunctionComponent } from 'react';
import { View, Text, Button } from 'react-native';

interface ScreenProps {
  onPressReadBook(): void;
}

const Screen: FunctionComponent<ScreenProps> = (props) => {
  const { onPressReadBook } = props;

  return (
    <View>
      <Text>BooksScreen</Text>

      <Button title="Navigate to ReadBookScreen" onPress={onPressReadBook} />
    </View>
  );
};

export default Screen;
