import React, { FunctionComponent, PropsWithChildren, ReactNode, Fragment } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ViewStyle, StyleSheet } from 'react-native';

import useThemeScheme from '../../../hooks/useThemeScheme';

interface ScreenLayoutProps extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
}

const ScreenLayout: FunctionComponent<ScreenLayoutProps> = (props) => {
  const { children, header, footer } = props;

  const insets = useSafeAreaInsets();

  const themeScheme = useThemeScheme();

  const screenLayoutStyle: ViewStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
    borderTopColor: themeScheme.colors.border,
  };

  return (
    <Fragment>
      {header}

      <View style={[styles.screenLayout, screenLayoutStyle]}>{children}</View>

      {footer}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screenLayout: {
    flexGrow: 1,
    flexShrink: 1,
    borderTopWidth: 1,
  },
});

export default ScreenLayout;
