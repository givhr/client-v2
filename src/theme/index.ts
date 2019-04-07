import { font } from './fonts';
import { ITheme } from './types';
import { themeColors } from './colors';
import { themeShadows } from './globalStyles/boxShadows';

export const theme: ITheme = {
  font,
  ...themeColors,
  ...themeShadows
};
