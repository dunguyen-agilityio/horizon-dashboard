import { cn } from '@nextui-org/theme';

interface IBoxIconProps {
  icon: JSX.Element;
  customClass?: string;
  onClick?: () => void;
}

const BoxIcon = ({
  icon,
  customClass = 'fill-secondary dark:fill-white',
  onClick,
}: IBoxIconProps) => (
  <i
    className={cn(
      'w-6 h-6 flex justify-center items-center hover:cursor-pointer',
      customClass,
    )}
    onClick={onClick}
  >
    {icon}
  </i>
);

export default BoxIcon;
