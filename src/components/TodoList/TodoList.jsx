import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

export const TodoList = ({ filter, todos, setTodos }) => {
  const toggleTodoComplete = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const handleDblClick = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          input: !todo.input,
        };
      }),
    );
  };

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

  return (
    <ul className="list">
      {todos
        .map(todo => (
          <TodoItem
            key={todo.id}
            todos={getFilteredTodos}
            setTodos={setTodos}
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
            handleDblClick={handleDblClick}
            {...todo}
          />
        ))
        .reverse()}
    </ul>
  );
};
