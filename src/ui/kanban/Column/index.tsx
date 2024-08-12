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
import { Spinner } from '@nextui-org/react';

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
  const handleAddNewTask = async (data: TaskFormData) => {
    console.log('data', data);
    setIsAdding(false);
  };

  return (
    <div className="flex-1 max-w-[514px] p-6">
      <div className="flex justify-between">
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
      <div className="flex flex-col gap-5 mt-6">
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
  );
};

export default Column;
