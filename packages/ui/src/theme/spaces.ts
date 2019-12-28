export enum THEME_SPACES {
  px48 = '48px',
  px36 = '36px',
  px24 = '24px',
  px16 = '16px',
  px12 = '12px',
  px8 = '8px',
  px4 = '4px',
  px2 = '2px',
  px0 = '0'
}

export const SPACES = [
  THEME_SPACES.px48,
  THEME_SPACES.px36,
  THEME_SPACES.px24,
  THEME_SPACES.px16,
  THEME_SPACES.px12,
  THEME_SPACES.px8,
  THEME_SPACES.px4,
  THEME_SPACES.px2,
  THEME_SPACES.px0
];

export type ThemeSpaces = typeof SPACES;
