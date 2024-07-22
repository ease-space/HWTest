import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';

import BackIcon from '../../../../../../../assets/icons/dynamic/BackIcon';
import NextIcon from '../../../../../../../assets/icons/dynamic/NextIcon';

import useThemeScheme from '../../../../../../../hooks/useThemeScheme';

interface BottomActionsProps {
  onPressBackChapter(): void;
  onPressNextChapter(): void;
  disabledBack: boolean;
  disabledNext: boolean;
}

const BottomActions: FunctionComponent<BottomActionsProps> = (props) => {
  const { onPressBackChapter, onPressNextChapter, disabledBack, disabledNext } = props;

  const insets = useSafeAreaInsets();

  const themeScheme = useThemeScheme();

  const chapterActionsStyle: ViewStyle = {
    opacity: 0.5,
  };

  const bottomActionsStyle: ViewStyle = {
    height: 48 + insets.bottom,
    paddingBottom: insets.bottom,
    borderTopColor: themeScheme.colors.border,
  };

  return (
    <View style={[styles.bottomActions, bottomActionsStyle]}>
      <TouchableOpacity
        style={[styles.actionButton, disabledBack ? chapterActionsStyle : {}]}
        onPress={onPressBackChapter}
        disabled={disabledBack}
        activeOpacity={0.8}
      >
        <BackIcon color={themeScheme.colors.text} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.actionButton, disabledNext ? chapterActionsStyle : {}]}
        onPress={onPressNextChapter}
        disabled={disabledNext}
        activeOpacity={0.8}
      >
        <NextIcon color={themeScheme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomActions: {
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  actionButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomActions;
