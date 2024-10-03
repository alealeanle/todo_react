import { useSelector } from 'react-redux';
import InputField from '@pages/TodoPage/InputField';
import TodoList from '@pages/TodoPage/TodoList';
import TodoFooter from '@pages/TodoPage/TodoFooter';
import s from './TodoPage.module.scss';

const TodoPage = () => {
  const items = useSelector(state => state.todos.todos);

  return (
    <div className={s.App}>
      <h1 className={s.title}>todos</h1>
      <div className={s.todo}>
        <InputField />

        <TodoList />

        {items.length ? <TodoFooter /> : ''}
      </div>
    </div>
  );
};

export default TodoPage;
