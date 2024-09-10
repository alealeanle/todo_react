import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({
  id,
  text,
  completed,
  input,
  todos,
  setTodos,
  removeTodo,
  toggleTodoComplete,
  handleDblClick,
}) {
  const [backupText, setBackupText] = useState(text);

  const handleInput = e =>
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          text: e.target.value,
        };
      }),
    );

  const handleInputEnterOrBlur = () => {
    if (text.trim() === '') {
      removeTodo(id);
    } else {
      setTodos(
        todos.map(todo => {
          if (todo.id !== id) return todo;
          setBackupText(text);
          return {
            ...todo,
            input: !todo.input,
          };
        }),
      );
    }
  };

  const handleInputEsc = () => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          text: backupText,
          input: !todo.input,
        };
      }),
    );
  };

  return (
    <li key={id} className={`item ${completed ? '_completed' : ''}`}>
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
              handleInputEnterOrBlur();
            } else if (e.key === 'Escape') {
              handleInputEsc();
            }
          }}
          onBlur={handleInputEnterOrBlur}
          onChange={handleInput}
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
}
