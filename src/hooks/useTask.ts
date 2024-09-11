import { useEffect, useState } from 'react';

// context
import useToast from '@/contexts/toast';

// Models
import { Task } from '@/models/Task';
import { type TaskFormData } from '@/types/task';

// Mocks
import { ADD_TASK__SUCCESS, ADD_TASK_ERROR } from '@/mocks/toast';

// Firebase
import {
  fireStore,
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
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
  const { showToast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = getTasksInRealTime((tasks) => {
      setTasks(tasks);
      setIsLoading(false);
    }, status);

    return () => unsubscribe();
  }, [status]);

  const addTask = async (task: TaskFormData) => {
    try {
      await addDoc(collection(fireStore, 'tasks'), task);
      showToast(ADD_TASK__SUCCESS);
    } catch (error) {
      showToast(ADD_TASK_ERROR);
    }
  };

  return { tasks, isLoading, addTask };
};
