import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../../../../types/helpers';

const BackIcon: FunctionComponent<IconProps> = (props) => {
  const { size = 44, color, ...otherProps } = props;

  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" {...otherProps}>
      <Path
        fill={color}
        d="m-199.1-289-13.8-13.7 13.8-13.7 2 2-11.8 11.7 11.8 11.7-2 2"
        transform="translate(237 335)"
      />
    </Svg>
  );
};

export default BackIcon;
