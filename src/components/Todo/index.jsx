import React from 'react'

import './styles.css'

import { FaEdit, FaEraser, FaTasks } from 'react-icons/fa'

const Todo = (props) => {
	return (
		<>
			<div className='Todo-header'>
				<h3>Tasks</h3>

				<span onClick={props.refreshTaskList}>
					<FaTasks />
				</span>
			</div>

			<ul>
				{props.taskList.map((task, index) => {
					return (
						<div key={task} className='Task-list'>
							<li>
								{task}
								<div className='Action-buttons'>
									<span
										onClick={(e) =>
											props.handleTaskEdit(e, index)
										}
										className='Edit-button'
									>
										<FaEdit />
									</span>
									<span
										onClick={(e) =>
											props.handleTaskDelete(e, index)
										}
										className='Delete-button'
									>
										<FaEraser />
									</span>
								</div>
							</li>
						</div>
					)
				})}
			</ul>
		</>
	)
}

export default Todo
