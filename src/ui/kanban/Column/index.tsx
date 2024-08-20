'use client';

// Libs
import { useState } from 'react';

// Components
import { Task } from '../Task';
import TaskForm from '../TaskForm';
import Add from '@/icons/Add';
import Text from '@/components/Text';
import Button from '@/components/Button';

// Types
import { TEXT_SIZE } from '@/types/text';
import { type TaskFormData } from '@/types/task';

// Models
import { STATUS } from '@/models/Task';

// Utils
import { formatStatus } from '@/utils/task';

// Hooks
import { useTask } from '@/hooks/useTask';
import { cn, Spinner } from '@nextui-org/react';

// Styles
import '@/styles/scroll.css';

interface ColumnProps {
  status: STATUS;
}

const Column = ({ status }: React.PropsWithChildren<ColumnProps>) => {
  const [isAdding, setIsAdding] = useState(false);
  const { tasks, isLoading } = useTask();

  const handleShowTaskForm = () => {
    setIsAdding(true);
  };

  const handleHiddenTaskForm = () => {
    setIsAdding(false);
  };

  // TODO: Will handle later when API ready
  const handleAddNewTask = async (_: TaskFormData) => {
    setIsAdding(false);
  };

  return (
    <div className="w-[514px] h-fit pb-4 pt-6 rounded-md bg-white dark:bg-indigo">
      <div className="flex justify-between pl-6 pr-4">
        <Text size={TEXT_SIZE.lg} as="h2" className="max-w-[90%]">
          {formatStatus(status)}
        </Text>
        <Button
          onClick={handleShowTaskForm}
          aria-label="edit-button"
          variant="light"
          data-testid="add-button"
          disabled={isLoading}
          className="bg-gray data-[hover=true]:bg-gray dark:bg-indigo-light"
        >
          <Add />
        </Button>
      </div>
      <div className={cn('pl-4 pr-2', tasks.length ? 'h-[905px]' : 'h-fit')}>
        <div className="flex flex-col gap-5 mt-6 h-full overflow-y-auto scrollbar px-2 [&>:last-child]:mb-2 [&>:first-child]:mt-2 rounded-md">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {isAdding && (
                <TaskForm
                  onClose={handleHiddenTaskForm}
                  onSubmit={handleAddNewTask}
                  status={status}
                />
              )}
              {tasks.map(({ id, ...rest }) => (
                <Task key={id} {...rest} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;
