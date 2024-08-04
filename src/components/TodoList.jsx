import TodoItem from "./TodoItem";
import './TodoList.css'

export default function TodoList({ todos, setTodos, removeTodo, toggleTodoComplete, handleDblClick }) {
	return (
		<ul className="list">
			{
				todos.map((todo) => <TodoItem
					key={todo.id}
					todos={todos}
					setTodos={setTodos}
					removeTodo={removeTodo}
					toggleTodoComplete={toggleTodoComplete}
					handleDblClick={handleDblClick}
					{...todo}
				/>).reverse()
			}
		</ul>
	)
}
