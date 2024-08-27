interface AddProps {
  color?: 'primary' | 'secondary';
}

const classes = {
  primary: '[&>path]:stroke-primary [&>path]:dark:stroke-white',
  secondary: '[&>path]:stroke-white [&>path]:dark:stroke-primary',
};

const Add = ({ color = 'primary' }: AddProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="17"
    viewBox="0 0 19 17"
    fill="none"
    className={classes[color]}
  >
    <path
      d="M9.32703 3.71619V13.2787"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3896 8.49744H4.26459"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Add;
