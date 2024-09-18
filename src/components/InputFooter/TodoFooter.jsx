import clsx from 'clsx';
import './TodoFooter.css';

const TodoFooter = ({ todos, filter, setFilter, setTodos }) => {
  const getActiveTodoCount = () => {
    return todos.filter(todo => !todo.completed).length;
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
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
      {todos.some(todo => todo.completed) ? (
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
