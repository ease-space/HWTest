import React, { FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleSheet } from 'react-native';

import Typography from '../Typography';

import useThemeScheme from '../../hooks/useThemeScheme';

const Button: FunctionComponent<TouchableOpacityProps> = (props) => {
  const { children, disabled, ...otherProps } = props;

  const themeScheme = useThemeScheme();

  const buttonStyle: ViewStyle = {
    backgroundColor: themeScheme.colors.primary,
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <TouchableOpacity {...otherProps} style={[styles.button, buttonStyle]} disabled={disabled} activeOpacity={0.8}>
      <Typography variant="body-large" fontWeight="extra-bold" color={themeScheme.colors.white}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
