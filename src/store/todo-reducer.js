import {
  ADD_TODO,
  CLEAR_COMPLETED,
  EDIT_ITEM,
  EDIT_ITEM_ESC,
  HANDLE_DBL_CLICK,
  REMOVE_TODO,
  SAVE_EDIT_ITEM,
  SET_FILTER,
  SET_INPUT_TEXT,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO_COMPLETE,
} from './todo-actions';

const initialState = {
  todos: [],
  inputText: '',
  filter: 'all',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const item = action.payload;
      return {
        ...state,
        todos: [...state.todos, item],
        inputText: '',
      };
    }
    case TOGGLE_ALL_TODOS: {
      const allCompleted = state.todos.every(todo => todo.completed);
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed: !allCompleted,
        })),
      };
    }
    case TOGGLE_TODO_COMPLETE: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) return todo;
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case SET_INPUT_TEXT: {
      return {
        ...state,
        inputText: action.payload,
      };
    }
    case CLEAR_COMPLETED: {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.todoId),
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload.filter,
      };
    }
    case HANDLE_DBL_CLICK: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) return todo;
          return {
            ...todo,
            input: !todo.input,
            backupText: todo.text,
          };
        }),
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) return todo;
          return {
            ...todo,
            text: action.payload.e,
          };
        }),
      };
    }
    case SAVE_EDIT_ITEM: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) return todo;
          return {
            ...todo,
            input: !todo.input,
          };
        }),
      };
    }
    case EDIT_ITEM_ESC: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) return todo;
          return {
            ...todo,
            text: todo.backupText,
            input: !todo.input,
          };
        }),
      };
    }
    default:
      return state;
  }
};
