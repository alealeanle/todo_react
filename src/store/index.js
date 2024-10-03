import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '@models/todoSlice';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
