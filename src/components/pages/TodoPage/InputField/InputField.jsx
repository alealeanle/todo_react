import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { addTodo, toggleAllTodos } from '@models/todoSlice';
import s from './InputField.module.scss';

const InputField = () => {
  const [inputText, setInputText] = useState('');
  const items = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const handleAddTodo = value => {
    if (value.trim()) {
      dispatch(
        addTodo({
          id: new Date().toISOString(),
          text: value.trim(),
          completed: false,
          input: false,
        }),
      );
    }
    setInputText('');
  };

  const handleKeyDownEnter = e => {
    if (e.key === 'Enter') {
      handleAddTodo(e.currentTarget.value);
    }
  };

  const handleInputBlur = e => {
    handleAddTodo(e.currentTarget.value);
  };

  const handleToggleAllTodos = () => {
    dispatch(toggleAllTodos());
  };

  const allCompleted = items.length && items.every(todo => todo.completed);

  return (
    <div>
      {items.length ? (
        <button
          className={clsx(s.allBtn, { [s.completed]: allCompleted })}
          onClick={handleToggleAllTodos}
        >
          ❯
        </button>
      ) : (
        ''
      )}

      <input
        className={s.mainInput}
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
