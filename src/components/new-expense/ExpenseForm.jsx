import React, { useState } from 'react'
import FormInput from '../UI/input/FormInput'
import Button from '../UI/button/Button'

import { styled } from 'styled-components'

const ExpenseForm = ({ onCloseForm, onAddNewExpense }) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const isFormValid =
		title.trim().length !== 0 &&
		amount.trim().length !== 0 &&
		date.trim().length !== 0

	const titleChangeHandler = (e) => {
		setTitle(e.target.value)
	}

	const amountChangeHandler = (e) => {
		setAmount(e.target.value)
	}

	const dateChangeHandler = (e) => {
		setDate(e.target.value)
	}

	// const titleRef = useRef()

	const submitHandler = (e) => {
		e.preventDefault()
		if (isFormValid) {
			const expense = {
				date: new Date(date),
				title,
				amount: Number(amount),
				id: Date.now().toString(),
			}
			onAddNewExpense(expense)

			setTitle('')
			setAmount('')
			setDate('')
			onCloseForm()
			// state batching => пакетирование setState
		} else {
			alert('Заполните все поля!')
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<ExpControls>
				<FormInput
					label={'Заголовок'}
					type='text'
					onChange={titleChangeHandler}
					value={title}
					// ref={titleRef}
				/>
				<FormInput
					label={'Количество'}
					inputType='number'
					value={amount}
					onChange={amountChangeHandler}
				/>
				<FormInput
					label={'Датировать'}
					inputType='date'
					onChange={dateChangeHandler}
					value={date}
				/>
			</ExpControls>
			<div className='new-expense__actions'>
				<Button type='button' onClick={onCloseForm}>
					Отмена
				</Button>
				<Button type='submit'>Добавить расходы</Button>
			</div>
		</form>
	)
}

export default ExpenseForm

const ExpControls = styled.div`
		display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 1rem;
	text-align: left;

	.new-expense__actions {
	text-align: right;
	display: flex;
	gap: 1rem;
	justify-content: flex-end;
}

button:disabled {
	background-color: rgb(171, 170, 170);
	cursor: not-allowed;
}

`

// git init
// git add .
// git commit -m "message"
// git branch -M feature/old-name feature/new-name

// git checkout
//
