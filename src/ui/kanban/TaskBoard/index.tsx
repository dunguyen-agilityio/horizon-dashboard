//Models
import { STATUS } from '@/models/Task';

// Components
import Column from '../Column';

const TaskBoard = () => (
  <div className="flex gap-6 xl:max-w-[1590px]">
    <Column status={STATUS.BACKLOG} />
    <Column status={STATUS.IN_PROGRESS} />
    <Column status={STATUS.DONE} />
  </div>
);

export default TaskBoard;
