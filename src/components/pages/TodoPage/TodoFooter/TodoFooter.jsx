import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { CLEAR_COMPLETED, SET_FILTER } from '@store/todo-actions';
import s from './TodoFooter.module.scss';

const TodoFooter = () => {
  const items = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();

  const getActiveTodoCount = () => {
    return items.filter(todo => !todo.completed).length;
  };

  const clearCompleted = () => {
    dispatch({
      type: CLEAR_COMPLETED,
    });
  };

  const setFilter = filter => {
    dispatch({
      type: SET_FILTER,
      payload: { filter },
    });
  };

  return (
    <div className={s.footer}>
      <div className={s.footerMain}>
        <span className={s.footerCount}>{getActiveTodoCount()} items left</span>
        <div className={s.footerFilters}>
          <button
            className={clsx(s.footerFilterBtn, {
              [s.active]: filter === 'all',
            })}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={clsx(s.footerFilterBtn, {
              [s.active]: filter === 'active',
            })}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={clsx(s.footerFilterBtn, {
              [s.active]: filter === 'completed',
            })}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      {items.some(todo => todo.completed) && (
        <button className={s.footerClear} onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
