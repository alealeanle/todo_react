import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { clearCompleted, setFilter } from '@models/todoSlice';
import s from './TodoFooter.module.scss';

const TodoFooter = () => {
  const items = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();

  const getActiveTodoCount = () => {
    return items.filter(todo => !todo.completed).length;
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleSetFilter = filter => {
    dispatch(setFilter(filter));
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
            onClick={() => handleSetFilter('all')}
          >
            All
          </button>
          <button
            className={clsx(s.footerFilterBtn, {
              [s.active]: filter === 'active',
            })}
            onClick={() => handleSetFilter('active')}
          >
            Active
          </button>
          <button
            className={clsx(s.footerFilterBtn, {
              [s.active]: filter === 'completed',
            })}
            onClick={() => handleSetFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      {items.some(todo => todo.completed) && (
        <button className={s.footerClear} onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
