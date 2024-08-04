import React from 'react'
import './InputField.css'

export default function InputField ({ todos, text, handleMainInput, handleEnter, handleBlur, toggleAllTodos }) {
	const allCompleted = todos.length && todos.every(todo => todo.completed);

	return (
		<div>
			{ todos.length ? (<button
				className={`all-btn ${allCompleted ? 'completed' : ''}`}
				onClick={toggleAllTodos}
					>❯</button>) : ""
			}

			<input
				className='main-input'
				value={ text }
				placeholder="What needs to be done?"
				autoFocus
				onChange={ (e) => handleMainInput(e.target.value) }
				onKeyDown={handleEnter}
				onBlur={handleBlur}
			/>
		</div>
	)
}
