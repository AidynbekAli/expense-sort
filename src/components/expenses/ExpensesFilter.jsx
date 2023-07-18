import React from "react";

import { styled } from "styled-components";

const ExpensesFilter = ({
  selectedYear,
  onSelectedYearChange,
  goDown,
  ascending,
}) => {
  return (
    <FilterStyled>
      <div className="expenses-filter__control">
        <label style={{ fontSize: "30px" }} htmlFor="filter">
          Filter by year:
        </label>

        <BtnStyle onClick={goDown}>По возрастанию</BtnStyle>
        <BtnStyle onClick={ascending}>По убыванию</BtnStyle>
        <select
          id="filter"
          value={selectedYear}
          onChange={onSelectedYearChange}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </select>
      </div>
    </FilterStyled>
  );
};

export default ExpensesFilter;

const BtnStyle = styled.button`
  background-color: #371139;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 9px;

  :hover {
    background-color: #fff;
    color: #242222;
  }
`;
const FilterStyled = styled.div`
color: white;
	padding: 0 1rem;

	.expenses-filter__control {
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0;
}
.expenses-filter label {
	font-weight: bold;
	margin-bottom: 0.5rem;
}
.expenses-filter select {
	font: inherit;
	padding: 0.5rem 3rem;
	font-weight: bold;
	border-radius: 6px;
}
`