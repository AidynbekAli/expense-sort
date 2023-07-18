import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/card/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { styled } from "styled-components";

const Expenses = ({ expenses = [], onDeleteExpense, setExpenses }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const selectedYearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === selectedYear) {
      return true;
    }
    return false;
  });

  const renderedExpenses = selectedYear === "All" ? expenses : filteredExpenses;

  const descending = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return a.amount - b.amount;
      }),
    ]);
  };

  const ascending = () => {
    const dd = expenses.sort((a, b) => {
      return b.amount - a.amount;
    });
    setExpenses([...dd]);
  };
  return (
    <ExpensesCard>
      <ExpensesFilter
        ascending={ascending}
        goDown={descending}
        selectedYear={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
      />
      <ExpensesChart expenses={renderedExpenses} />
      <ExpenseList
        onDeleteExpense={onDeleteExpense}
        expenses={renderedExpenses}
      />
    </ExpensesCard>
  );
};

export default Expenses;


const ExpensesCard = styled(Card)`
	padding: 1rem;
	
	background-color: rgb(31, 31, 31);
	margin: 2rem auto;
	width: 50rem;
	max-width: 95%;
`
