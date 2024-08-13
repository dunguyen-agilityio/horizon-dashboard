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
      boxShadow: {
        'light-card': '0px 18px 40px 0px rgba(112, 144, 176, 0.12)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
