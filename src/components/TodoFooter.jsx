import React from 'react';
import './TodoFooter.css'

export default function Footer({ todos, filter, setFilter, clearCompleted }) {
	const getActiveTodoCount = () => {
		return todos.filter(todo => !todo.completed).length;
	};

	return (
		<div className="footer">
			<div className="footer__main">
				<span className="footer__count">{getActiveTodoCount()} items left</span>
				<div className="footer__filters">
					<button 
						className={`footer__filter-btn ${filter === 'all' ? 'active' : ''}`} 
						onClick={() => setFilter('all')}
					>
						All
					</button>
					<button 
						className={`footer__filter-btn ${filter === 'active' ? 'active' : ''}`} 
						onClick={() => setFilter('active')}
					>
						Active
					</button>
					<button 
						className={`footer__filter-btn ${filter === 'completed' ? 'active' : ''}`} 
						onClick={() => setFilter('completed')}
					>
						Completed
					</button>
				</div>
			</div>
			{ todos.some(todo => todo.completed)? <button className="footer__clear" onClick={clearCompleted}>Clear completed</button> : "" }
		</div>
	);
}
