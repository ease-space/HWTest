import React, { FunctionComponent } from 'react';
import { HeaderButtonProps } from '@react-navigation/elements';
import { TouchableOpacityProps } from 'react-native';

import HeaderButton from '../HeaderButton';

import CloseIcon from '../../../assets/icons/dynamic/CloseIcon';

const CloseButton: FunctionComponent<TouchableOpacityProps & HeaderButtonProps> = (props) => {
  const { tintColor, ...otherProps } = props;

  return (
    <HeaderButton {...otherProps}>
      <CloseIcon color={tintColor} />
    </HeaderButton>
  );
};

export default CloseButton;
