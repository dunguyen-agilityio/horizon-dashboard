import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

import {
  colors,
  backgroundColor,
  fontSizes,
  height,
  width,
  backgroundImages,
  lineHeight,
  borderRadius,
  boxShadow,
  animation,
  keyframes,
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
      backgroundImage: backgroundImages,
      boxShadow,
      borderRadius,
      keyframes,
      animation,
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: { default: { '100': colors.gray, '200': colors.grey } },
        },
        dark: {
          colors: {
            default: {
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
