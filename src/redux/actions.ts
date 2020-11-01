import { ADD_TODO, TOGGLE_COMPLETED } from "./actionTypes";

export const addTodo = (description: string) => ({
  type: ADD_TODO,
  payload: {
    description,
  },
});

export const toggleCompleted = (id: number) => ({
  type: TOGGLE_COMPLETED,
  payload: {
    id,
  },
});
