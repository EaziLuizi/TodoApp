import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "./actionTypes";
import { TodoItem } from "../Interfaces/shared";

const getLocalStorageData = (): TodoItem[] => {
  var stored = JSON.parse(localStorage.getItem("todo-list") ?? "[]");
  if(stored.length > 0){
    return stored;
  }
  return [];
}

const updateLocalStorage = (newState) => {
  localStorage.setItem("todo-list", JSON.stringify(newState));
  console.log(newState);
}

const initialState: TodoItem[] = getLocalStorageData();

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      let newState = [...state];
      newState.push({
        id: state.length + 1,
        description: action.payload.description,
        completed: false,
      });
      updateLocalStorage(newState);
      return newState;
    }
    case TOGGLE_COMPLETED: {
      let newState = [...state];
      let item = newState.find((x) => x.id === action.payload.id);
      if (item) {
        item.completed = !item.completed;
      }
      updateLocalStorage(newState);
      return newState;
    }
    case DELETE_TODO: {
      let newState = state.filter(x => x.id !== action.payload.id);
      updateLocalStorage(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default todos;
