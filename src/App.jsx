import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import InputField from './components/InputField';
import TodoFooter from './components/TodoFooter';

function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');
	const [filter, setFilter] = useState('all');

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
					}
				]);
				setText('');
			}
		}
	};

	const toggleTodoComplete = (todoId) => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== todoId) return todo;

				return {
					...todo,
					completed: !todo.completed,
				};
			})
		);
	};

	const toggleAllTodos = () => {
		const allCompleted = todos.every(todo => todo.completed);
		setTodos(
			todos.map(todo => ({
				...todo,
				completed: !allCompleted,
			}))
		);
	};

	const removeTodo = (todoId) => {
		setTodos(todos.filter(todo => todo.id !== todoId));
	};

	const handleDblClick = (todoId) => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== todoId) return todo;

				return {
					...todo,
					input: !todo.input,
				};
			})
		);
	};

	const handleKeyDownEnter = (e) => {
		if (e.key === 'Enter') {
			addTodo();
		}
	};

	const handleInputBlur = () => {
		addTodo();
	};

	const clearCompleted = () => {
		setTodos(todos.filter(todo => !todo.completed));
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
		<div className="App">
			<h1 className="title">todos</h1>
			<div className="todo">
				<InputField 
					todos={todos}
					text={text}
					handleMainInput={setText}
					handleEnter={handleKeyDownEnter}
					handleBlur={handleInputBlur}
					toggleAllTodos={toggleAllTodos}
				/>

				<TodoList
					todos={getFilteredTodos()}
					setTodos={setTodos}
					toggleTodoComplete={toggleTodoComplete}
					removeTodo={removeTodo}
					handleDblClick={handleDblClick}
				/>

				{ todos.length ? <TodoFooter
						todos={todos}
						filter={filter}
						setFilter={setFilter}
						clearCompleted={clearCompleted}
					/> : ""
				}
			</div>
		</div>
	);
}

export default App;