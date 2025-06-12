import { Request, Response } from 'express';
import { Task } from '../models/taskModel';

let tasks: Task[] = [
  {
    id: 1,
    name: 'Buy Grocery',
    description: 'Milk, eggs, vegetables',
    status: 'InComplete',
  },
  {
    id: 2,
    name: 'Send Email',
    description: 'Follow up on internship offer',
    status: 'Complete',
  },
];

export const getAllTasks = (_req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  const { name, description, status } = req.body;
  
  const newTask: Task = {
    id: Date.now(),
    name,
    description,
    status,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, status } = req.body;

  tasks = tasks.map(task =>
    task.id === Number(id)
      ? { ...task, name, description, status }
      : task
  );

  res.json({ message: 'Task updated successfully' });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== Number(id));
  res.json({ message: 'Task deleted successfully' });
};
