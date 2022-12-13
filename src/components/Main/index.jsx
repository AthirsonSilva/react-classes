import React from 'react'
import '../../App.css'
import Form from '../Form'
import './styles.css'

import Todo from '../Todo'

export default class Main extends React.Component {
	state = {
		task: '',
		search: '',
		taskList: [
			'Learn React',
			'Learn Redux',
			'Make a Todo List App',
			'Drink coffe'
		],
		filteredTaskList: []
	}

	componentDidMount = () => {
		const taskList = localStorage.getItem('taskList')

		if (taskList) {
			this.setState({
				taskList: JSON.parse(taskList),
				filteredTaskList: JSON.parse(taskList)
			})
		} else {
			this.setState({ taskList: [] })
		}
	}

	componentDidUpdate = (previousProps, previousState) => {
		if (previousState.taskList !== this.state.taskList) {
			localStorage.setItem(
				'taskList',
				JSON.stringify(this.state.taskList)
			)
		}
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

		if (this.state.search) {
			const newData = this.state.taskList.filter((item) => {
				const itemData = item ? item.toUpperCase() : ''.toUpperCase()

				const textData = this.state.search.toUpperCase()

				return itemData.indexOf(textData) > -1
			})

			this.setState({
				filteredTaskList: newData,
				search: ''
			})
		} else {
			this.setState({
				filteredTaskList: JSON.parse(localStorage.getItem('taskList')),
				search: ''
			})
		}
	}

	handleTaskDelete = (event, index) => {
		const newTaskList = this.state.taskList.filter((item, i) => {
			return i !== index
		})

		this.setState({ taskList: newTaskList })
	}

	handleTaskEdit = (event, index) => {
		const tempTaskList = [...this.state.taskList]

		this.state.taskList.filter((item, i) => {
			if (i === index) {
				const newTask = prompt('Edit task', item)

				if (newTask) {
					tempTaskList[i] = newTask

					return tempTaskList[i]
				}
			}

			return item
		})

		this.setState({ taskList: tempTaskList })
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
							<Form
								handleTaskChange={this.handleTaskChange}
								handleTaskAddition={this.handleTaskAddition}
								task={this.state.task}
								title='Add new task'
							/>
						</div>
						<div className='Form-container'>
							<Form
								handleTaskChange={this.handleSearchChange}
								handleTaskAddition={this.handleTaskSearch}
								task={this.state.search}
								title='Search task'
							/>
						</div>
					</div>

					<div className='Task-container'>
						<Todo
							taskList={this.state.filteredTaskList}
							handleTaskDelete={this.handleTaskDelete}
							handleTaskEdit={this.handleTaskEdit}
						/>
					</div>
				</div>
			</div>
		)
	}
}
