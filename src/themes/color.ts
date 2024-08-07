export const colors = {
  white: '#fff',
  black: '#000',
  primary: '#2b3674',
  secondary: '#a3aed0',
  warning: '#ffb547',
  success: '#01b574',
  error: '#e31a1a',
  gray: '#f4f7fe',
  'indigo-dark': '#0b1437',
  'indigo-light': '#1b254b',
  blue: {
    450: '#4318ff',
  },
  purple: {
    650: '#868cff',
    750: '#7551ff',
  },
};

export const backgroundColor = {
  light: colors.gray,
  dark: colors['indigo-dark'],
};

export const backgroundImages = {
  'gradient-primary': `linear-gradient(135deg, ${colors.purple[650]}, ${colors.blue[450]})`,
};
