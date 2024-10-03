import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '@store/reducers';
import TodoPage from '@TodoPage';
import './index.scss';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todosState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosState', serializedState);
  } catch (err) {}
};

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoPage />
    </Provider>
  </React.StrictMode>,
);
