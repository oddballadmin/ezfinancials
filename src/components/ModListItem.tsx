import React, { useState, useContext } from "react";
import "../component-styles/ModListItem.css";
import { convertToUsd } from "../helpers";
import IncomeContext from "../context/IncomeContext";
import ExpenseContext from "../context/ExpenseContext";
type ModListItemProps = {
	name: string;
	amount: number;
	modTarget: "Income" | "Expenses";
	_id: string;
};
const ModListItem = ({ name, amount, _id, modTarget }: ModListItemProps) => {
	const incomeContext = useContext(IncomeContext);
	const expenseContext = useContext(ExpenseContext);

	const [filteredIncomeList, setFilteredIncomeList] = useState(
		incomeContext.income
	);
	const [filteredExpenseList, setFilteredExpenseList] = useState(
		expenseContext.expense
	);
	const deleteIncomeItem = (itemId: string) => {
		console.log("delete");
		console.log(_id);
		if (incomeContext?.income && modTarget === "Income") {
			const newList = incomeContext?.income.filter(
				(item) => item._id !== itemId
			);

			incomeContext?.setIncome(newList);
			console.log(incomeContext.income);
		}
	};
	const deleteExpenseItem = (itemId: string) => {
		console.log("delete");
		console.log(_id);
		if (expenseContext?.expense && modTarget === "Expenses") {
			const newList = expenseContext?.expense.filter(
				(item) => item._id !== itemId
			);

			expenseContext?.setExpense(newList);
			console.log(expenseContext.expense);
		}
	};
	const editItem = () => {};

	return (
		<div key={_id} className="ModListItem">
			<div className="info">
				<h4>{name}</h4>:<p>{convertToUsd(amount)}</p>
			</div>
			<div className="actionButtons">
				<button>Edit</button>
				<button
					onClick={
						modTarget == "Income"
							? () => deleteIncomeItem(_id)
							: () => deleteExpenseItem(_id)
					}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ModListItem;
