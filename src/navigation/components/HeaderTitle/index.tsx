import React, { FunctionComponent } from 'react';
import { HeaderTitleProps } from '@react-navigation/elements';

import Typography from '../../../components/Typography';

const HeaderTitle: FunctionComponent<HeaderTitleProps> = (props) => {
  const { children, tintColor, onLayout } = props;

  return (
    <Typography variant="title-large" fontWeight="extra-bold" color={tintColor} numberOfLines={1} onLayout={onLayout}>
      {children}
    </Typography>
  );
};

export default HeaderTitle;
