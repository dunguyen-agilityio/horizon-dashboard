import { Text } from '@/components';
import { TEXT_SIZE } from '@/types/text';

interface CourseLabelProps {
  label: string;
  icon: React.ReactElement;
}

export const CourseLabel = ({ icon, label }: CourseLabelProps) => (
  <div className="flex gap-[6px] items-center">
    {icon}
    <Text as="span" size={TEXT_SIZE.sm}>
      {label}
    </Text>
  </div>
);
