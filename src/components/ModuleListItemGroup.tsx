import React, { useContext } from "react";
import IncomeContext from "../context/IncomeContext";
import ExpenseContext from "../context/ExpenseContext";
import ModListItem from "./ModListItem";
import { useModuleContext } from "../context/OptionsContext";
import EditMenu from "./EditMenu";
import "../component-styles/ModuleList.css";
type ModuleListItemGroupProps = {
	modData: "Income" | "Expenses";
};
const ModuleListItemGroup = ({ modData }: ModuleListItemGroupProps) => {
	const optionContext = useModuleContext();
	const { showIncomeEditMenu, showExpenseEditMenu } = optionContext;

	const incomeContext = useContext(IncomeContext);
	const expenseContext = useContext(ExpenseContext);
	if (!expenseContext.expense) return null;
	if (!incomeContext.income) return null;

	if (modData === "Expenses") {
		return expenseContext.expense.map((item) => (
			<div>
				<ModListItem
					modTarget="Expenses"
					key={item._id}
					name={item.name}
					amount={item.amount}
					_id={item._id}
				/>
				{showExpenseEditMenu && (
					<EditMenu
						modData="Expenses"
						_id={item._id}
						name={item.name}
						amount={item.amount}
					/>
				)}
			</div>
		));
	}
	if (modData === "Income") {
		return incomeContext.income.map((item) => (
			<div>
				<ModListItem
					modTarget="Income"
					key={item._id}
					name={item.name}
					amount={item.amount}
					_id={item._id}
				/>
				{showIncomeEditMenu && (
					<EditMenu
						modData="Income"
						_id={item._id}
						name={item.name}
						amount={item.amount}
					/>
				)}
			</div>
		));
	}
};

export default ModuleListItemGroup;
