import React from 'react'
import ExpenseItem from './ExpenseItem'

import { styled } from 'styled-components'

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
	// const content =
	// 	expenses.length === 0 ? (
	// 		<h1 className='expenses-list__fallback'>No Expenses</h1>
	// 	) : (
	// <ul className='expenses-list'>
	// 	{expenses.map((expense) => {
	// 		return (
	// 			<ExpenseItem
	// 				onDeleteExpense={onDeleteExpense}
	// 				date={expense.date}
	// 				title={expense.title}
	// 				id={expense.id}
	// 				amount={expense.amount}
	// 			/>
	// 		)
	// 	})}
	// </ul>
	// 	)
	// return content

	return (
		<div>
			{expenses.length === 0 && (
				<H1Styled>No Expenses</H1Styled>
			)}
			{expenses.length > 0 && (
				<UlStyled>
					{expenses.map((expense) => {
						return (
							<ExpenseItem
								key={expense.id}
								onDeleteExpense={onDeleteExpense}
								date={expense.date}
								title={expense.title}
								id={expense.id}
								amount={expense.amount}
							/>
						)
					})}
				</UlStyled>
			)}
		</div>
	)
}

export default ExpenseList

const H1Styled = styled.h1`
	color: white;
	text-align: center;

`
const UlStyled = styled.ul`
list-style: none;
	padding: 0;
`
