import clsx from 'clsx';
import './InputField.css';

const InputField = ({ todos, text, setTodos, setText }) => {
  const addTodo = () => {
    if (text) {
      if (text.trim()) {
        setTodos([
          ...todos,
          {
            id: new Date().toISOString(),
            text,
            completed: false,
            input: false,
          },
        ]);
        setText('');
      }
    }
  };

  const handleKeyDownEnter = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const handleInputBlur = () => {
    addTodo();
  };

  const toggleAllTodos = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(
      todos.map(todo => ({
        ...todo,
        completed: !allCompleted,
      })),
    );
  };

  const allCompleted = todos.length && todos.every(todo => todo.completed);

  return (
    <div>
      {todos.length ? (
        <button
          className={clsx('all-btn', { completed: allCompleted })}
          onClick={toggleAllTodos}
        >
          ❯
        </button>
      ) : (
        ''
      )}

      <input
        className="main-input"
        value={text}
        placeholder="What needs to be done?"
        autoFocus
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDownEnter}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default InputField;
