export enum COLORS {
  gray = '#D4D4D4',
  background = '#1E1E1E',
  primary = '#9CDCFE',
  primaryAccessory = '#569CD6',
  secondary = '#C586C0 ',
  secondaryAccessory = '#4EC9B0',
  highlight1 = '#DCDCAA',
  highlight2 = '#CE9178',
  comment = '#6A9955',
  commentAccessory = '#B5CEA8',
  gray1 = '#858585',
  gray2 = '#2D2D2D',
  gray3 = '#252525'
}

export enum TEXT_STYLES_PROPERTIES {
  primaryFontFamily = 'Fira Code',
  baseFontSizeDesktop = '16px',
}

// It's easier to use a hardcoded interface, instead of a infered type based on an enum.
interface ThemeColors {
  gray: COLORS.gray;
  background: COLORS.background;
  primary: COLORS.primary;
  primaryAccessory: COLORS.primaryAccessory;
  secondary: COLORS.secondary;
  secondaryAccessory: COLORS.secondaryAccessory;
  highlight1: COLORS.highlight1;
  highlight2: COLORS.highlight2;
  comment: COLORS.comment;
  commentAccessory: COLORS.commentAccessory;
  gray1: COLORS.gray1;
  gray2: COLORS.gray2;
  gray3: COLORS.gray3;
}

export interface Theme {
  colors: ThemeColors;
}

const theme: Theme = {
  colors: COLORS
};

export default theme;
