import { useContext } from "react";
import IncomeContext from "../context/IncomeContext";
import ExpenseContext from "../context/ExpenseContext";
import { deleteExpenseItem, deleteIncomeItem } from "../helpers";
type ModListItemButtonsProps = {
	modTarget: "Income" | "Expenses";
	_id: string;
};
const ModListItemButtons = ({ modTarget, _id }: ModListItemButtonsProps) => {
	const incomeContext = useContext(IncomeContext);
	const expenseContext = useContext(ExpenseContext);

	const deleteIncomeFromDom = async (itemId: string) => {
		await deleteIncomeItem(itemId);

		if (incomeContext?.income && modTarget === "Income") {
			const newList = incomeContext?.income.filter(
				(item) => item._id !== itemId
			);

			incomeContext?.setIncome(newList);
			console.log(incomeContext.income);
		}
	};
	const deleteExpenseFromDom = async (itemId: string) => {
		await deleteExpenseItem(itemId);

		if (expenseContext?.expense && modTarget === "Expenses") {
			const newList = expenseContext?.expense.filter(
				(item) => item._id !== itemId
			);

			expenseContext?.setExpense(newList);
			console.log(expenseContext.expense);
		}
	};

	return (
		<div className="actionButtons">
			<button
				onClick={
					modTarget == "Income"
						? () => deleteIncomeFromDom(_id)
						: () => deleteExpenseFromDom(_id)
				}
			>
				Delete
			</button>
		</div>
	);
};

export default ModListItemButtons;
