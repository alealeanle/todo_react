import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { setInputText, addTodo, toggleAllTodos } from '@models/todoSlice';
import s from './InputField.module.scss';

const InputField = () => {
  const items = useSelector(state => state.todos.todos);
  const inputText = useSelector(state => state.todos.inputText);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setInputText(e.target.value));
  };

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(
        addTodo({
          id: new Date().toISOString(),
          text: inputText,
          completed: false,
          input: false,
        }),
      );
    }
  };

  const handleKeyDownEnter = e => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleInputBlur = () => {
    handleAddTodo();
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
