import React, { useContext } from "react";
import IncomeContext from "../context/IncomeContext";
import ExpenseContext from "../context/ExpenseContext";
import ModListItem from "./ModListItem";
import "../component-styles/ModuleList.css";
type ModuleListItemGroupProps = {
	modData: "Income" | "Expenses";
};
const ModuleListItemGroup = ({ modData }: ModuleListItemGroupProps) => {
	const incomeContext = useContext(IncomeContext);
	const expenseContext = useContext(ExpenseContext);
	if (!expenseContext.expense) return null;
	if (!incomeContext.income) return null;

	if (modData === "Expenses") {
		return expenseContext.expense.map((item, key) => (
			<ModListItem
				modTarget="Expenses"
				key={key}
				name={item.name}
				amount={item.amount}
				_id={item._id}
			/>
		));
	}
	if (modData === "Income") {
		return incomeContext.income.map((item, key) => (
			<ModListItem
				modTarget="Income"
				key={key}
				name={item.name}
				amount={item.amount}
				_id={item._id}
			/>
		));
	}
};

export default ModuleListItemGroup;
