import React from 'react'

import './styles.css'

import { FaPlus, FaSearch } from 'react-icons/fa'

const Form = (props) => {
	const verifyFormType = () => {
		if (props.title === 'Add new task') {
			return (
				<div className='Form-body'>
					<h3>{props.title}</h3>

					<input
						onChange={props.handleTaskChange}
						type='text'
						value={props.task}
						placeholder='New task'
					/>

					<button type='submit'>
						<FaPlus color='white' />
					</button>
				</div>
			)
		}

		return (
			<div className='Search task'>
				<h3>{props.title}</h3>

				<input
					onChange={props.handleTaskChange}
					type='text'
					value={props.task}
					placeholder='New task'
				/>

				<button type='submit'>
					<FaSearch color='white' />
				</button>
			</div>
		)
	}

	return (
		<form className='Todo-form' onSubmit={props.handleTaskAddition}>
			{verifyFormType()}
		</form>
	)
}

export default Form
