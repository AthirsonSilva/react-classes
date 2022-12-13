import React from 'react'

import { FaEdit, FaEraser } from 'react-icons/fa'

const Todo = (props) => {
	return (
		<>
			<h3>Tasks</h3>

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
