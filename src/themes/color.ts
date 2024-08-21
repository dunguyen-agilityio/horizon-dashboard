export const colors = {
  white: '#fff',
  black: '#000',
  primary: '#2b3674',
  secondary: '#a3aed0',
  warning: '#ffb547',
  success: '#01b574',
  error: '#e31a1a',
  gray: '#f4f7fe',
  grayest: '#fafcfe',
  'indigo-dark': '#0b1437',
  'indigo-light': '#1b254b',
  foreground: '#707eae',
  indigo: '#111C44',
  amber: {
    450: '#E0E5F2',
  },
  blue: {
    450: '#4318ff',
  },
  purple: {
    50: '#8f9bba',
    150: '#e3daff',
    650: '#868cff',
    750: '#7551ff',
  },
  green: {
    700: '#05cd99',
  },
  red: { 50: '#feefee', 750: '#ee5d50' },
};

export const backgroundColor = {
  light: colors.gray,
  dark: colors['indigo-dark'],
  primary: '#3965ff',
  content1: colors['indigo-light'],
};

export const backgroundImages = {
  'gradient-primary': `linear-gradient(135deg, ${colors.purple[650]}, ${colors.blue[450]})`,
  'gradient-gray':
    'linear-gradient(113deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0) 110%)',
};
