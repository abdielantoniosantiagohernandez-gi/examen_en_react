import type { Task } from "../types/task";

const DELAY = { create: 250, remove: 150 };
const wait = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

export const createTaskInDB = async (text: string): Promise<Task> => {
  await wait(DELAY.create);
  return { id: crypto.randomUUID(), text, completed: false };
};

export const deleteTaskFromDB = async (id: string): Promise<string> => {
  await wait(DELAY.remove);
  return id;
};