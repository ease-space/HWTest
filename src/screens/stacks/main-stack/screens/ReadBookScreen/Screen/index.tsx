import React, { FunctionComponent } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import ScreenLayout from '../../../../../../navigation/components/ScreenLayout';
import Typography from '../../../../../../components/Typography';
import Button from '../../../../../../components/Button';

import BottomActions from './BottomActions';

interface ScreenProps {
  chapter: string;
  onPressBackChapter(): void;
  onPressNextChapter(): void;
  disabledBack: boolean;
  disabledNext: boolean;
}

const Screen: FunctionComponent<ScreenProps> = (props) => {
  const { chapter, onPressBackChapter, onPressNextChapter, disabledBack, disabledNext } = props;

  return (
    <ScreenLayout
      footer={
        <BottomActions
          onPressBackChapter={onPressBackChapter}
          onPressNextChapter={onPressNextChapter}
          disabledBack={disabledBack}
          disabledNext={disabledNext}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.scrollContentContainerStyle}>
        <Typography variant="body-large">{chapter}</Typography>

        <View style={styles.nextChapterContainer}>
          <Button onPress={onPressNextChapter} disabled={disabledNext}>
            Next Chapter
          </Button>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  scrollContentContainerStyle: {
    flexGrow: 1,
    padding: 16,
  },
  nextChapterContainer: {
    height: 150,
    paddingTop: 45,
    marginTop: 'auto',
  },
});

export default Screen;
