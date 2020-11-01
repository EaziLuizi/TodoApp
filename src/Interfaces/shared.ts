export enum Priority {
  low = 1,
  medium = 2,
  high = 3,
}

export interface TodoItem {
  id: number;
  description: string;
  category?: string;
  priority?: Priority;
  completed: boolean;
}
