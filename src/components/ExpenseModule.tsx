import { useEffect, useMemo, useState, useContext } from "react";
import axios from "axios";
import ModuleOptions from "./ModuleOptions";
import { useModuleContext } from "../context/OptionsContext";
import ExpenseContext from "../context/ExpenseContext";
import { convertToUsd } from "../helpers";
import ModuleList from "./ModuleList";
import ModuleListItemGroup from "./ModuleListItemGroup";

const IncomeModule = () => {
	const { expense, setExpense } = useContext(ExpenseContext);
	const [expenseTotal, setExpenseTotal] = useState<number>(0);

	const fetchData = async () => {
		try {
			const res = await axios.get("/api/expenses", { withCredentials: true });
			console.log(res.data);
			setExpense(res.data);
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
	}, []);

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
				{context?.showAllExpense && expense && (
					<ModuleList>
						<ModuleListItemGroup modData="Expenses" />
					</ModuleList>
				)}
			</div>
		</div>
	);
};

export default IncomeModule;
