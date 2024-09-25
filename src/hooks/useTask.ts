import { useEffect, useState } from 'react';
import { RawDraftContentState } from 'draft-js';

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

import { orderBy, startAt, endAt } from 'firebase/firestore';

export const getTasksInRealTime = (
  setTasks: (tasks: Task[]) => void,
  setIsLoading: (loading: boolean) => void,
  status: string,
  searchTerm: string,
): (() => void) => {
  const tasksRef = collection(fireStore, 'tasks');

  let tasksQuery;
  if (searchTerm) {
    tasksQuery = query(
      tasksRef,
      where('status', '==', status),
      orderBy('title'),
      startAt(searchTerm),
      endAt(searchTerm + '\uf8ff'),
    );
  } else {
    tasksQuery = query(tasksRef, where('status', '==', status));
  }

  const unsubscribe = onSnapshot(tasksQuery, (snapshot) => {
    const tasks: Task[] = [];
    snapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() } as Task);
    });

    setTasks(tasks);
    setIsLoading(false);
  });

  return unsubscribe;
};

export const useTask = (status: string, searchTerm: string = '') => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = getTasksInRealTime(setTasks, setIsLoading, status, '');

    return () => unsubscribe();
  }, [status]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [tasks, searchTerm]);

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
    description: RawDraftContentState | null,
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

  return {
    tasks: filteredTasks,
    isLoading,
    addTask,
    updateTask,
    removeTask,
  };
};
