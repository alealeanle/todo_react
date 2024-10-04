import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import todoSlice from '@models/todoSlice';
import s from './TodoItem.module.scss';

const TodoItem = ({ id, text, completed, input }) => {
  const [inputText, setInputText] = useState(text.trim());
  const dispatch = useDispatch();
  const {
    toggleComplete,
    removeTodo,
    saveEditItem,
    cancelEdit,
    handleDblClick,
  } = todoSlice.actions;

  const handleInput = e => {
    setInputText(e.target.value);
  };

  const handleInputEnterOrBlur = () => {
    if (inputText.trim() === '') {
      dispatch(removeTodo({ id }));
    } else {
      dispatch(saveEditItem({ id, itemText: inputText }));
    }
  };

  const handleInputEsc = () => {
    setInputText(text);
    dispatch(cancelEdit({ id }));
  };

  const toggleTodoComplete = () => {
    dispatch(toggleComplete({ id }));
  };

  const removeTodoItem = () => {
    dispatch(removeTodo({ id }));
  };

  const handleDblClickItem = () => {
    dispatch(handleDblClick({ id }));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleInputEnterOrBlur();
    } else if (e.key === 'Escape') {
      handleInputEsc();
    }
  };

  return (
    <li className={clsx(s.item, { [s._completed]: completed })}>
      <input
        className={s.checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete()}
      />
      <label className={s.icon}></label>
      {input ? (
        <input
          className={s.inputText}
          type="text"
          value={inputText}
          onKeyDown={handleKeyDown}
          onBlur={handleInputEnterOrBlur}
          onChange={handleInput}
          autoFocus
        />
      ) : (
        <div className={s.text} onDoubleClick={handleDblClickItem}>
          {text}
        </div>
      )}
      <span className={s.delete} onClick={removeTodoItem}>
        ✖
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  input: PropTypes.bool.isRequired,
};

export default memo(TodoItem);
