'use client';

// Libs
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Components
import Button from '@/components/Button';
import { Input } from '@nextui-org/input';
import { Spinner } from '@nextui-org/spinner';

// Types
import { STATUS } from '@/models/Task';
import { type TaskFormData } from '@/types/task';

// Constants
import { MESSAGES } from '@/constants/messages';

interface TaskFormProps {
  status: STATUS;
  onClose: () => void;
  onSubmit: (data: TaskFormData) => Promise<void>;
}

const TaskForm = ({ onClose, onSubmit, status }: TaskFormProps) => {
  const [isPending, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<TaskFormData>({
    mode: 'onBlur',
    defaultValues: { title: '', status },
  });

  const handleSubmitData = handleSubmit(async (data: TaskFormData) => {
    startTransition(async () => {
      await onSubmit(data);
    });
  });

  return (
    <div className="relative pt-[18px] pl-[23px] pb-[23px] pr-[21px] rounded-[15px] bg-white shadow-light-card dark:shadow-none dark:bg-indigo-light max-w-[466px]">
      <form
        onSubmit={handleSubmitData}
        className="flex flex-col gap-4"
        data-testid="add-new-task-form"
      >
        <Controller
          control={control}
          name="title"
          rules={{
            minLength: {
              message: MESSAGES.TASK.MIN_LENGTH,
              value: 6,
            },
          }}
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              {...field}
              label="Title"
              labelPlacement="outside"
              placeholder="Enter title"
              isInvalid={invalid}
              errorMessage={error?.message}
              size="md"
              data-testid="title-field"
            />
          )}
        />
        <div className="flex justify-between">
          <Button
            variant="faded"
            type="submit"
            isDisabled={!isDirty}
            className="bg-transparent"
          >
            {isPending ? <Spinner size="sm" color="success" /> : 'Create task'}
          </Button>
          <Button variant="faded" onClick={onClose} className="bg-transparent">
            Cancel
          </Button>
        </div>
      </form>
      {isPending && (
        <div className="absolute inset-0 cursor-not-allowed flex justify-center items-center" />
      )}
    </div>
  );
};

export default TaskForm;
