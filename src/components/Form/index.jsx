import React from 'react'

import './styles.css'

import { FaPlus } from 'react-icons/fa'

export default class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			task: '',
			handleTaskChange: (e) => {
				this.setState({ task: e.target.value })
			}
		}
	}

	render = () => {
		return (
			<form className='Todo-form' action='#'>
				<h3>{this.props.title}</h3>

				<div className='Form-body'>
					<input
						onChange={this.state.handleTaskChange}
						type='text'
						value={this.state.task}
						placeholder='New task'
					/>
					<button type='submit'>
						<FaPlus color='white' size={20} />
					</button>
				</div>
			</form>
		)
	}
}
