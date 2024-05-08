import { useEffect, useMemo, useState, useContext } from "react";
import ModuleOptions from "./ModuleOptions";
import { useModuleContext } from "../context/OptionsContext";
import ExpenseContext from "../context/ExpenseContext";
import { convertToUsd, getExpense } from "../helpers";
import ModuleList from "./ModuleList";
import ModuleListItemGroup from "./ModuleListItemGroup";
import AddExpenseMenu from "./AddExpenseMenu";
import { UserContext } from "../context/UserContext";

const ExpenseModule = () => {
	const { expense, setExpense } = useContext(ExpenseContext);
	const [expenseTotal, setExpenseTotal] = useState<number>(0);
	const { user } = useContext(UserContext);

	const fetchData = async () => {
		try {
			setExpense(await getExpense());
			// Change the type to IncomeType[]
		} catch (error) {
			console.log(error);
		}
	};
	const context = useModuleContext();

	// This effect sets the module target whenever parentTarget changes
	useEffect(() => {
		if (context) {
			context.setModuleTarget("Expenses");
		}
	}, [context]);

	useEffect(() => {
		fetchData();
	}, [user?._id]);

	useMemo(() => {
		if (!expense) return;
		setExpenseTotal(expense.reduce((acc, expense) => acc + expense.amount, 0));
	}, [expense]);

	return (
		<div className="moduleContainer">
			<div className="amount">{convertToUsd(expenseTotal)}</div>
			<hr />
			<div className="header">
				<h4 className="title">Expenses</h4>
				<ModuleOptions mTarget="Expenses" />
			</div>
			<div className="content">
				{context?.showAddExpenseMenu && <AddExpenseMenu />}
				{context?.showAllExpense && expense && (
					<ModuleList>
						<ModuleListItemGroup modData="Expenses" />
					</ModuleList>
				)}
			</div>
		</div>
	);
};

export default ExpenseModule;
