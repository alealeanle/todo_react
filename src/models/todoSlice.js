import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    saveEditItem: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.itemText;
        todo.input = false;
      }
    },
    cancelEdit: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.input = false;
      }
    },
    handleDblClick: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.input = true;
      }
    },
    toggleAllTodos: state => {
      const allCompleted = state.todos.every(todo => todo.completed);
      state.todos.forEach(todo => {
        todo.completed = !allCompleted;
      });
    },
    clearCompleted: state => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
  editItem,
  saveEditItem,
  cancelEdit,
  handleDblClick,
  setInputText,
  toggleAllTodos,
  clearCompleted,
  setFilter,
} = todoSlice.actions;

export default todoSlice;
