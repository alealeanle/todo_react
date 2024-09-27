import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {
  EDIT_ITEM,
  EDIT_ITEM_ESC,
  HANDLE_DBL_CLICK,
  REMOVE_TODO,
  SAVE_EDIT_ITEM,
  TOGGLE_TODO_COMPLETE,
} from '@store/todo-actions';
import './TodoItem.scss';

const TodoItem = ({ id, text, completed, input }) => {
  const dispatch = useDispatch();

  const handleInput = (todoId, e) => {
    dispatch({
      type: EDIT_ITEM,
      payload: { todoId, e: e.target.value },
    });
  };

  const handleInputEnterOrBlur = todoId => {
    if (text.trim() === '') {
      removeTodo(id);
    } else {
      dispatch({
        type: SAVE_EDIT_ITEM,
        payload: { todoId },
      });
    }
  };

  const handleInputEsc = todoId => {
    dispatch({
      type: EDIT_ITEM_ESC,
      payload: { todoId },
    });
  };

  const toggleTodoComplete = todoId => {
    dispatch({
      type: TOGGLE_TODO_COMPLETE,
      payload: { todoId },
    });
  };

  const removeTodo = todoId => {
    dispatch({
      type: REMOVE_TODO,
      payload: { todoId },
    });
  };

  const handleDblClick = todoId => {
    dispatch({
      type: HANDLE_DBL_CLICK,
      payload: { todoId },
    });
  };

  return (
    <li key={id} className={clsx('item', { _completed: completed })}>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <label className="icon"></label>
      {input ? (
        <input
          className="input-text"
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
        <div className="text" onDoubleClick={() => handleDblClick(id)}>
          {text}
        </div>
      )}
      <span className="delete" onClick={() => removeTodo(id)}>
        ✖
      </span>
    </li>
  );
};

export default TodoItem;
