import React from 'react'
import '../../App.css'
import './styles.css'

import { FaEdit, FaEraser, FaPlus, FaSearch } from 'react-icons/fa'

export default class Main extends React.Component {
	state = {
		task: '',
		search: '',
		taskList: [
			'Learn React',
			'Learn Redux',
			'Make a Todo List App',
			'Drink coffe',
			'Go to the gym',
			'Go to the beach'
		]
	}

	handleTaskChange = (event) => {
		this.setState({ task: event.target.value })
	}

	handleSearchChange = (event) => {
		this.setState({ search: event.target.value })
	}

	handleTaskAddition = (event) => {
		event.preventDefault()

		if (this.state.taskList.includes(this.state.task)) {
			return alert('Task already exists')
		}

		this.setState({
			taskList: [...this.state.taskList, this.state.task],
			task: ''
		})
	}

	handleTaskSearch = (event) => {
		event.preventDefault()

		if (event.target.value) {
			const newData = this.state.taskList.filter((item) => {
				const itemData = item ? item.toUpperCase() : ''.toUpperCase()

				const textData = event.target.value.toUpperCase()

				return itemData.indexOf(textData) > -1
			})

			this.setState({
				taskList: newData,
				search: event.target.value
			})
		} else {
			this.setState({ taskList: this.state.taskList, search: '' })
		}
	}

	render = () => {
		return (
			<div className='App'>
				<header className='App-header'>
					<h3>Todo List</h3>
				</header>
				<div className='Elements-container'>
					<div className='Actions-container'>
						<div className='Form-container'>
							<form
								onSubmit={this.handleTaskAddition}
								className='Todo-form'
								action='#'
							>
								<h3>Add new task</h3>

								<div className='Form-body'>
									<input
										onChange={this.handleTaskChange}
										type='text'
										value={this.state.task}
										placeholder='New task'
									/>
									<button type='submit'>
										<FaPlus color='white' size={20} />
									</button>
								</div>
							</form>
						</div>
						<div className='Form-container'>
							<form className='Todo-form' action='#'>
								<h3>Seach task</h3>

								<div className='Form-body'>
									<input
										onChange={this.handleSearchChange}
										type='text'
										value={this.state.search}
										placeholder='New task'
									/>
									<button type='submit'>
										<FaSearch color='white' size={20} />
									</button>
								</div>
							</form>
						</div>
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
			</div>
		)
	}
}
