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
import { TASK_MESSAGE } from '@/constants/messages';

interface TaskFormProps {
  onClose: () => void;
  onSubmit: (data: TaskFormData) => Promise<void>;
  status: STATUS;
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
      console.log(data);
      await onSubmit(data);
    });
  });

  return (
    <div className="relative h-[155px] pt-[18px] pl-[23px] pb-[23px] pr-[21px] rounded-[15px] bg-white dark:bg-indigo-light overflow-hidden">
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
              message: TASK_MESSAGE.MIN_LENGTH,
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
            Create task
          </Button>
          <Button variant="faded" onClick={onClose} className="bg-transparent">
            Cancel
          </Button>
        </div>
      </form>
      {isPending && (
        <div className="absolute inset-0 bg-gray/60 cursor-not-allowed flex justify-center items-center">
          <Spinner color="primary" />
        </div>
      )}
    </div>
  );
};

export default TaskForm;
