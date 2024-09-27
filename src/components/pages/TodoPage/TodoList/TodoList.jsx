import { useSelector } from 'react-redux';
import TodoItem from '@TodoPage/TodoItem/TodoItem';
import './TodoList.scss';

export const TodoList = () => {
  const items = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return items.filter(todo => !todo.completed);
      case 'completed':
        return items.filter(todo => todo.completed);
      default:
        return items;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <ul className="list">
      {filteredTodos
        .map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            input={todo.input}
          />
        ))
        .reverse()}
    </ul>
  );
};

export default TodoList;
