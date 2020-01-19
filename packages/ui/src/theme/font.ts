export enum FONT_SIZES {
  px48 = '2.5rem',
  px36 = '2rem',
  px24 = '1.5rem',
  px16 = '1rem',
  px12 = '0.75rem'
}

interface ThemeFontSizes {
  px48: FONT_SIZES.px48;
  px36: FONT_SIZES.px36;
  px24: FONT_SIZES.px24;
  px16: FONT_SIZES.px16;
  px12: FONT_SIZES.px12;
}

export enum FONT_WEIGHTS {
  bold = '900',
  medium = '500',
  retina = '400',
}

interface ThemeFontWeights {
  retina: FONT_WEIGHTS.retina;
  medium: FONT_WEIGHTS.medium;
  bold: FONT_WEIGHTS.bold;
}

export interface ThemeFont {
  sizes: ThemeFontSizes;
  weights: ThemeFontWeights;
  family: ThemeFontFamily;
}

enum FONT_FAMILIES {
  primary = 'Fira Code',
}

interface ThemeFontFamily {
  primary: FONT_FAMILIES.primary;
}

export const FONT: ThemeFont = {
  sizes: FONT_SIZES,
  weights: FONT_WEIGHTS,
  family: FONT_FAMILIES
};
