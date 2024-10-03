import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import todoSlice from '@models/todoSlice';
import s from './TodoItem.module.scss';

const TodoItem = ({ id, text, completed, input }) => {
  const dispatch = useDispatch();
  const {
    toggleComplete,
    removeTodo,
    editItem,
    saveEditItem,
    cancelEdit,
    handleDblClick,
  } = todoSlice.actions;

  const handleInput = (todoId, e) => {
    dispatch(editItem({ todoId, value: e.target.value }));
  };

  const handleInputEnterOrBlur = todoId => {
    if (text.trim() === '') {
      dispatch(removeTodo({ todoId }));
    } else {
      dispatch(saveEditItem({ todoId }));
    }
  };

  const handleInputEsc = todoId => {
    dispatch(cancelEdit({ todoId }));
  };

  const toggleTodoComplete = todoId => {
    dispatch(toggleComplete({ todoId }));
  };

  const removeTodoItem = todoId => {
    dispatch(removeTodo({ todoId }));
  };

  const handleDblClickItem = todoId => {
    dispatch(handleDblClick({ todoId }));
  };

  return (
    <li key={id} className={clsx(s.item, { [s._completed]: completed })}>
      <input
        className={s.checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <label className={s.icon}></label>
      {input ? (
        <input
          className={s.inputText}
          type="text"
          value={text}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleInputEnterOrBlur(id);
            } else if (e.key === 'Escape') {
              handleInputEsc(id);
            }
          }}
          onBlur={() => handleInputEnterOrBlur(id)}
          onChange={e => handleInput(id, e)}
          autoFocus
        />
      ) : (
        <div className={s.text} onDoubleClick={() => handleDblClickItem(id)}>
          {text}
        </div>
      )}
      <span className={s.delete} onClick={() => removeTodoItem(id)}>
        ✖
      </span>
    </li>
  );
};

export default TodoItem;
