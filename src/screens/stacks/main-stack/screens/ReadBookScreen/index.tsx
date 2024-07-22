import React, { FunctionComponent, useEffect, useCallback } from 'react';

import Screen from './Screen';

import { MainStackScreens } from '../../../../../navigation/helpers/screens';

import { ReadBookScreenProps } from '../../../../../types/navigation';

const ReadBookScreen: FunctionComponent<ReadBookScreenProps> = (props) => {
  const { navigation } = props;

  const {
    route: {
      params: { chapters, chapterIndex },
    },
  } = props;

  const onPressBackChapter = useCallback(() => {
    navigation.replace(MainStackScreens.ReadBookScreen, {
      chapters,
      chapterIndex: chapterIndex - 1,
    });
  }, [navigation, chapters, chapterIndex]);

  const onPressNextChapter = useCallback(() => {
    navigation.replace(MainStackScreens.ReadBookScreen, {
      chapters,
      chapterIndex: chapterIndex + 1,
    });
  }, [navigation, chapters, chapterIndex]);

  useEffect(() => {
    navigation.setOptions({
      title: `Chapter ${chapterIndex + 1}`,
    });
  }, [navigation, chapterIndex]);

  return (
    <Screen
      chapter={chapters[chapterIndex]}
      onPressBackChapter={onPressBackChapter}
      onPressNextChapter={onPressNextChapter}
      disabledBack={chapterIndex === 0}
      disabledNext={chapterIndex === chapters.length - 1}
    />
  );
};

export default ReadBookScreen;
