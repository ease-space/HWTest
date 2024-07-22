import React, { FunctionComponent } from 'react';

import Screen from './Screen';

import { ReadBookScreenProps } from '../../../../../types/navigation';

const ReadBookScreen: FunctionComponent<ReadBookScreenProps> = (props) => {
  const {
    route: {
      params: { chapters, currentChapterIndex },
    },
  } = props;

  console.log('ReadBookScreen', chapters, currentChapterIndex);

  return <Screen />;
};

export default ReadBookScreen;
