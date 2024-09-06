import { useEffect, useState } from 'react';

// Models
import { Task } from '@/models/Task';

// Firebase
import {
  fireStore,
  collection,
  onSnapshot,
  query,
  where,
} from '@/config/firebaseConfig';

export const getTasksInRealTime = (
  setTasks: (tasks: Task[]) => void,
  status: string,
): (() => void) => {
  const tasksRef = collection(fireStore, 'tasks');

  const tasksQuery = query(tasksRef, where('status', '==', status));

  const unsubscribe = onSnapshot(tasksQuery, (snapshot) => {
    const tasks: Task[] = [];
    snapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() } as Task);
    });
    setTasks(tasks);
  });

  return unsubscribe;
};

export const useTask = (status: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = getTasksInRealTime((tasks) => {
      setTasks(tasks);
      setIsLoading(false);
    }, status);

    return () => unsubscribe();
  }, [status]);

  return { tasks, isLoading };
};
