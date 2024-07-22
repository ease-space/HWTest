import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../../../../types/helpers';

const CloseIcon: FunctionComponent<IconProps> = (props) => {
  const { size = 24, color, ...otherProps } = props;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 4.5 12 12m7.5 7.5L12 12m0 0-7.5 7.5 15-15"
      />
    </Svg>
  );
};

export default CloseIcon;
