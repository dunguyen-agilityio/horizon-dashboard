export type IconProps = { size?: number } & React.SVGProps<SVGSVGElement>;

export type TColumn = {
  key: string;
  label: string;
  allowsSorting?: boolean;
  visibleOnMobile?: boolean;
};
