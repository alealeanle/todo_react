import { useSelector } from 'react-redux';
import InputField from '@TodoPage/InputField/InputField';
import TodoList from '@TodoPage/TodoList/TodoList';
import TodoFooter from '@TodoPage/TodoFooter/TodoFooter';
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
