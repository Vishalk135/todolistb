export interface Task {
  id: number;
  name: string;
  description: string;
  status: 'Complete' | 'InComplete';
}

export let tasks: Task[] = [];
