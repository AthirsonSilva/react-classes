import React from 'react'
import '../../App.css'
import './styles.css'

import Form from '../Form'

export default class Main extends React.Component {
	state = {
		task: '',
		handleTaskChange: (e) => {
			this.setState({ newTask: e.target.value })
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
			</div>
		)
	}
}
