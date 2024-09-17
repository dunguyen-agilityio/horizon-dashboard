import { useEffect, useState } from 'react';

// context
import useToast from '@/contexts/toast';

// Models
import { LABEL, STATUS, Task } from '@/models/Task';
import { type TaskFormData } from '@/types/task';
import { User } from '@/models/User';

// Mocks
import {
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_ERROR,
} from '@/mocks/toast';

// Firebase
import {
  fireStore,
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
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
      showToast(ADD_TASK_SUCCESS);
    } catch (error) {
      showToast(ADD_TASK_ERROR);
    }
  };

  const updateTask = async (
    taskId: string,
    title: string,
    status: STATUS,
    description: string,
    labels: LABEL[],
    assignMembers: User[],
    startedDate?: string | null,
    dueDate?: string | null,
  ) => {
    try {
      const taskDocRef = doc(fireStore, 'tasks', taskId);
      await updateDoc(taskDocRef, {
        title,
        status,
        description,
        labels,
        assignees: assignMembers,
        startedDate,
        dueDate,
      });
      showToast(UPDATE_TASK_SUCCESS);
    } catch (error) {
      showToast(UPDATE_TASK_ERROR);
    }
  };

  const removeTask = async (taskId: string) => {
    try {
      const taskRef = doc(fireStore, 'tasks', taskId);
      await deleteDoc(taskRef);
      showToast(REMOVE_TASK_SUCCESS);
    } catch (error) {
      showToast(REMOVE_TASK_ERROR);
    }
  };

  return { tasks, isLoading, addTask, updateTask, removeTask };
};
