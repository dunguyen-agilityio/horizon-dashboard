import { LABEL } from '@/models/Task';
import { CHIP_COLOR } from '@/types/Chip';

export const formatStatus = (status: string) =>
  status
    .split('-')
    .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(' ');

export const getColorByLabel = (label: LABEL): CHIP_COLOR => {
  switch (label) {
    case LABEL.ERRORS:
      return 'danger';
    case LABEL.UPDATES:
      return 'primary';
    case LABEL.DONE:
      return 'success';
    case LABEL.PENDING:
      return 'warning';

    default:
      return 'default';
  }
};
