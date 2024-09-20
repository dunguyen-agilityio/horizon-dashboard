//Models
import { STATUS } from '@/models/Task';

// Components
import Column from '../Column';

const TaskBoard = () => (
  <div className="flex gap-6 w-full xl:max-w-[950px] 2.5xl:max-w-[1090px] 3xl:max-w-[1300px] 4xl:max-w-[1580px] overflow-x-auto">
    <Column status={STATUS.BACKLOG} />
    <Column status={STATUS.IN_PROGRESS} />
    <Column status={STATUS.DONE} />
  </div>
);

export default TaskBoard;
