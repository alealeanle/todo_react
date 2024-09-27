import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { CLEAR_COMPLETED, SET_FILTER } from '@store/todo-actions';
import './TodoFooter.scss';

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
    <div className="footer">
      <div className="footer__main">
        <span className="footer__count">{getActiveTodoCount()} items left</span>
        <div className="footer__filters">
          <button
            className={clsx('footer__filter-btn', {
              active: filter === 'all',
            })}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={clsx('footer__filter-btn', {
              active: filter === 'active',
            })}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={clsx('footer__filter-btn', {
              active: filter === 'completed',
            })}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      {items.some(todo => todo.completed) ? (
        <button className="footer__clear" onClick={clearCompleted}>
          Clear completed
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default TodoFooter;
