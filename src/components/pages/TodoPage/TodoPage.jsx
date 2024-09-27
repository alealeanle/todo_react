import { useSelector } from 'react-redux';
import InputField from '@TodoPage/InputField/InputField';
import TodoList from '@TodoPage/TodoList/TodoList';
import TodoFooter from '@TodoPage/TodoFooter/TodoFooter';
import './TodoPage.scss';

const TodoPage = () => {
  const items = useSelector(state => state.todos.todos);

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <div className="todo">
        <InputField />

        <TodoList />

        {items.length ? <TodoFooter /> : ''}
      </div>
    </div>
  );
};

export default TodoPage;
