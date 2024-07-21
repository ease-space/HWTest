import React, { FunctionComponent, PropsWithChildren, ReactNode, Fragment } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface ScreenLayoutProps extends PropsWithChildren {
  header?: ReactNode;
}

const ScreenLayout: FunctionComponent<ScreenLayoutProps> = (props) => {
  const { children, header } = props;

  const safeAreaInsets = useSafeAreaInsets();

  const screenLayoutStyle: ViewStyle = {
    paddingLeft: safeAreaInsets.left,
    paddingRight: safeAreaInsets.right,
  };

  return (
    <Fragment>
      {header}

      <View style={[styles.screenLayout, screenLayoutStyle]}>{children}</View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screenLayout: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default ScreenLayout;
