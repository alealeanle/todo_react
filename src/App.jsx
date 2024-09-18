import { useState } from 'react';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import TodoFooter from './components/InputFooter/TodoFooter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <div className="todo">
        <InputField
          todos={todos}
          text={text}
          setTodos={setTodos}
          setText={setText}
        />

        <TodoList filter={filter} todos={todos} setTodos={setTodos} />

        {todos.length ? (
          <TodoFooter
            todos={todos}
            filter={filter}
            setTodos={setTodos}
            setFilter={setFilter}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default App;
