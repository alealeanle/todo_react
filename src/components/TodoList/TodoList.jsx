import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

export const TodoList = ({ filter, todos, setTodos }) => {
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
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
            todos={filteredTodos}
            setTodos={setTodos}
          />
        ))
        .reverse()}
    </ul>
  );
};

export default TodoList;
