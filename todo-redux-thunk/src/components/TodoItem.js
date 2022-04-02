import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteTodo, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteChange = () => {
		dispatch(toggleCompleteTodo({ id: id, completed: !completed}))
	}

	const handleDeleteClick = () => {
		const confirmed = window.confirm("Are you sure want to perform the action?");
		if(confirmed) {
			dispatch(deleteTodo({id: id}));
		}
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleCompleteChange}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
