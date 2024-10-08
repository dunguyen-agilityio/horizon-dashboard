import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

import {
  colors,
  backgroundColor,
  fontSizes,
  height,
  width,
  maxWidth,
  backgroundImages,
  lineHeight,
  borderRadius,
  boxShadow,
  animation,
  keyframes,
  screens,
} from './src/themes';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      backgroundColor,
      fontSize: fontSizes,
      lineHeight,
      height,
      width,
      maxWidth,
      backgroundImage: backgroundImages,
      boxShadow,
      borderRadius,
      keyframes,
      animation,
      screens,
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              '100': colors.gray,
              '200': colors.grey,
            },
            foreground: { 500: colors.secondary },
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: colors['indigo-light'],
            },
            default: {
              DEFAULT: colors['army-green'],
              '100': colors['indigo-light'],
              '200': colors['army-green'],
            },
          },
        },
      },
    }),
  ],
};
export default config;
