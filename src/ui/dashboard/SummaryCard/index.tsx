// Libs
import { cn } from '@nextui-org/theme';

// Components
import Text from '@/components/Text';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

type LayoutVariant = 'primary' | 'secondary';

export type TrendInfo =
  | {
      trendValue: number;
      trendUnit?: string;
      trendDescription: string;
    }
  | { trendValue?: undefined };

export interface SummaryCardProps {
  variant?: LayoutVariant;
  additionalContent?: React.ReactElement;
  additionalContentWrapper?: string;
  title?: string;
  counter: number;
  unit?: string;
}

const classes = {
  primary: '',
  secondary: 'flex-row-reverse justify-between',
} as Record<LayoutVariant, string>;

const SummaryCard = ({
  variant = 'primary',
  additionalContent,
  counter,
  title,
  unit = '$',
  additionalContentWrapper,
  ...otherProps
}: SummaryCardProps & TrendInfo) => {
  const renderTrendContent = () => {
    if (otherProps.trendValue === undefined) return null;

    const { trendValue, trendDescription, trendUnit = '%' } = otherProps;

    const trendStyle = cn(
      'font-bold text-tiny',
      trendValue > 0 ? '!text-green-700' : '!text-red-700',
    );

    return (
      <Text className="text-tiny" variant={TEXT_VARIANT.SECONDARY}>
        <Text as="span" className={trendStyle} data-testid="additional-trend">
          {trendValue > 0 ? `+${trendValue}` : trendValue}
        </Text>
        <Text as="span" className={trendStyle}>
          {trendUnit}
        </Text>
        &nbsp;
        {trendDescription}
      </Text>
    );
  };

  return (
    <div
      className={cn(
        'flex gap-[18px] items-center bg-white dark:bg-indigo p-3 4xl:p-5 flex-1 rounded-md lg:min-w-[248px] 2xl:min-w-40',
        classes[variant],
      )}
    >
      {additionalContent && (
        <div
          className={cn(
            'h-14 min-w-14 rounded-full bg-gray dark:bg-indigo-light flex justify-center items-center',
            additionalContentWrapper
              ? `p-0 ${additionalContentWrapper}`
              : 'p-3',
          )}
        >
          {additionalContent}
        </div>
      )}
      <div className="flex flex-col gap-[3px]">
        <Text size={TEXT_SIZE.sm} variant={TEXT_VARIANT.SECONDARY} as="span">
          {title}
        </Text>
        <Text size={TEXT_SIZE.extra} as="b">
          &nbsp;
          {`${unit}${counter}`}
        </Text>
        {renderTrendContent()}
      </div>
    </div>
  );
};

export default SummaryCard;
