import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  ADD_TODO,
  SET_INPUT_TEXT,
  TOGGLE_ALL_TODOS,
} from '@store/todo-actions';
import './InputField.scss';

const InputField = () => {
  const items = useSelector(state => state.todos.todos);
  const inputText = useSelector(state => state.todos.inputText);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch({
      type: SET_INPUT_TEXT,
      payload: e.target.value,
    });
  };

  const addTodo = () => {
    if (inputText.trim()) {
      dispatch({
        type: ADD_TODO,
        payload: {
          id: new Date().toISOString(),
          text: inputText,
          completed: false,
          input: false,
        },
      });
    }
  };

  const handleKeyDownEnter = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const handleInputBlur = () => {
    addTodo();
  };

  const toggleAllTodos = () => {
    dispatch({
      type: TOGGLE_ALL_TODOS,
    });
  };

  const allCompleted = items.length && items.every(todo => todo.completed);

  return (
    <div>
      {items.length ? (
        <button
          className={clsx('all-btn', { completed: allCompleted })}
          onClick={toggleAllTodos}
        >
          ❯
        </button>
      ) : (
        ''
      )}

      <input
        className="main-input"
        value={inputText}
        placeholder="What needs to be done?"
        autoFocus
        onChange={handleInputChange}
        onKeyDown={handleKeyDownEnter}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default InputField;
