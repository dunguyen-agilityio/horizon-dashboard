'use client';
import { useSearchParams } from 'next/navigation';

//Models
import { STATUS } from '@/models/Task';

// Components
import Column from '../Column';

// Constants
import { PARAMS } from '@/constants/params';

const TaskBoard = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get(PARAMS.SEARCH) ?? '';

  return (
    <div className="flex gap-6 w-full xl:max-w-[950px] 2.5xl:max-w-[1090px] 3xl:max-w-[1300px] 4xl:max-w-[1580px] overflow-x-auto">
      <Column status={STATUS.BACKLOG} query={query} />
      <Column status={STATUS.IN_PROGRESS} query={query} />
      <Column status={STATUS.DONE} query={query} />
    </div>
  );
};

export default TaskBoard;
