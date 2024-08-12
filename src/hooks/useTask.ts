import { useEffect, useState } from 'react';

// Mocks
import { MOCK_TASKS } from '@/mocks/task';

// Models
import { Task } from '@/models/Task';

// TODO: Will implement later after setup firebase
export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
      setTasks(MOCK_TASKS);
      setIsLoading(false);
    };

    getData();
  }, []);

  return { tasks, isLoading };
};
