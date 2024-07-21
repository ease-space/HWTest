import React, { FunctionComponent } from 'react';
import { Text, TextProps, TextStyle, StyleSheet } from 'react-native';
import { camelCase } from 'lodash';
import { CamelCase } from 'type-fest';

import useThemeScheme from '../../hooks/useThemeScheme';

import { getFontFamily, FontWeight } from '../../assets/fonts';

export type TypographyVariant =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small';

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  fontWeight?: FontWeight;
  color?: string;
}

const Typography: FunctionComponent<TypographyProps> = (props) => {
  const { children, style, variant = 'body-medium', fontWeight, color, ...otherProps } = props;

  const themeScheme = useThemeScheme();

  const typographyVariantStyle = getTypographyVariantStyle(variant);

  const typographyFontFamily = fontWeight ? getFontFamily(fontWeight) : undefined;

  const typographyColor = color || themeScheme.colors.text;

  const typographyStyle: TextStyle = {
    fontFamily: typographyFontFamily,
    color: typographyColor,
  };

  return (
    <Text {...otherProps} style={[typographyVariantStyle, typographyStyle, style]}>
      {children}
    </Text>
  );
};

const getTypographyVariantStyle = (variant: TypographyVariant) => {
  const typographyVariant = camelCase(variant) as CamelCase<TypographyVariant>;

  return styles[typographyVariant];
};

const styles = StyleSheet.create({
  displayLarge: {
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
    fontFamily: getFontFamily('regular'),
  },
  displayMedium: {
    fontSize: 45,
    lineHeight: 52,
    fontFamily: getFontFamily('regular'),
  },
  displaySmall: {
    fontSize: 36,
    lineHeight: 44,
    fontFamily: getFontFamily('regular'),
  },
  headlineLarge: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: getFontFamily('regular'),
  },
  headlineMedium: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: getFontFamily('regular'),
  },
  headlineSmall: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: getFontFamily('regular'),
  },
  titleLarge: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: getFontFamily('regular'),
  },
  titleMedium: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: getFontFamily('medium'),
  },
  titleSmall: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: getFontFamily('medium'),
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: getFontFamily('regular'),
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontFamily: getFontFamily('regular'),
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontFamily: getFontFamily('regular'),
  },
  labelLarge: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: getFontFamily('medium'),
  },
  labelMedium: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontFamily: getFontFamily('medium'),
  },
  labelSmall: {
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontFamily: getFontFamily('medium'),
  },
});

export default Typography;
