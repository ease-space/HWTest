import { Keys } from '../../types/utils';

type FontName = 'AlbertSans';

const fontWeightMap = {
  ['thin']: 'Thin',
  ['thin-italic']: 'ThinItalic',
  ['extra-light']: 'ExtraLight',
  ['extra-light-italic']: 'ExtraLightItalic',
  ['light']: 'Light',
  ['light-italic']: 'LightItalic',
  ['regular']: 'Regular',
  ['regular-italic']: 'RegularItalic',
  ['medium']: 'Medium',
  ['medium-italic']: 'MediumItalic',
  ['semi-bold']: 'SemiBold',
  ['semi-bold-italic']: 'SemiBoldItalic',
  ['bold']: 'Bold',
  ['bold-italic']: 'BoldItalic',
  ['extra-bold']: 'ExtraBold',
  ['extra-bold-italic']: 'ExtraBoldItalic',
  ['black']: 'Black',
  ['black-italic']: 'BlackItalic',
};

export type FontWeight = Keys<typeof fontWeightMap>;

export const getFontFamily = (fontWeight: FontWeight, fontName: FontName = 'AlbertSans') => {
  return fontName.concat('-', fontWeightMap[fontWeight]);
};
