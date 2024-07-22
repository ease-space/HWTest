import React, { FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

const HeaderButton: FunctionComponent<TouchableOpacityProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <TouchableOpacity {...otherProps} style={styles.headerButton}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderButton;
