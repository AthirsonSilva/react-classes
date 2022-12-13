import React from 'react'
import '../../App.css'
import './styles.css'

import { FaEdit, FaEraser } from 'react-icons/fa'

import Form from '../Form'

export default class Main extends React.Component {
	state = {
		taskList: ['Learn React', 'Learn Redux', 'Learn React-Redux'],
		handleTaskAddition: (newTask) => {
			this.setState({ taskList: [...this.state.taskList, newTask] })
		}
	}

	render = () => {
		return (
			<div className='App'>
				<header className='App-header'>
					<h3>Todo List</h3>
				</header>
				<div className='Form-container'>
					<Form />
				</div>

				<div className='Task-container'>
					<h3>Tasks</h3>

					<ul>
						{this.state.taskList.map((task) => {
							return (
								<div key={task} className='Task-list'>
									<li>
										{task}
										<div className='Action-buttons'>
											<span className='Edit-button'>
												<FaEdit />
											</span>
											<span className='Delete-button'>
												<FaEraser />
											</span>
										</div>
									</li>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}
