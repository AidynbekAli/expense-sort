import React from 'react'
import Card from '../UI/card/Card'

import ExpenseDate from './ExpenseDate'
import Button from '../UI/button/Button'
import { styled } from 'styled-components'

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
	return (
		<CardStyled>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>{' '}
			</div>
			<Button
				style={{ marginLeft: '1rem' }}
				onClick={() => {
					onDeleteExpense(id)
				}}
			>
				Delete
			</Button>
		</CardStyled>
	)
}

export default ExpenseItem

const CardStyled = styled(Card)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	margin: 1rem 0;
	background-color: #4b4b4b;

	.expense-item__description {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-end;
	flex-flow: column-reverse;
	justify-content: flex-start;
	flex: 1;
}

.expense-item h2 {
	color: #514f4f;
	font-size: 1rem;
	flex: 1;
	color: white;
}

.expense-item__price {
	font-size: 1rem;
	font-weight: bold;
	color: white;
	background-color: #40005d;
	border: 1px solid white;
	padding: 0.5rem;
	border-radius: 12px;
}

@media (min-width: 580px) {
	.expense-item__description {
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex: 1;
	}

	.expense-item__description h2 {
		font-size: 1.25rem;
	}

	.expense-item__price {
		font-size: 1.25rem;
		padding: 0.5rem 1.5rem;
	}
}
`
