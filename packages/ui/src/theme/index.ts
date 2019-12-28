import { ThemeColors, COLORS } from './colors';
import { ThemeFont, FONT } from './font';
import { ThemeSpaces, SPACES } from './spaces';

export interface Theme {
  colors: ThemeColors;
  font: ThemeFont;
  spaces: ThemeSpaces;
}

const theme: Theme = {
  colors: COLORS,
  font: FONT,
  spaces: SPACES
};

export default theme;
