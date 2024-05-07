import ExpenseContext from "../context/ExpenseContext";
import IncomeContext from "../context/IncomeContext";
import { useContext, useMemo, useState } from "react";
import { convertToUsd } from "../helpers";

const NetModule = () => {
	const { income } = useContext(IncomeContext);
	const { expense } = useContext(ExpenseContext);
	const [netIncome, setNetIncome] = useState<number>(0);
	const calculateNetIncome = () => {
		if (!income || !expense) return;
		const incomeTotal = income.reduce((acc, income) => acc + income.amount, 0);
		const expenseTotal = expense.reduce(
			(acc, expense) => acc + expense.amount,
			0
		);
		setNetIncome(incomeTotal - expenseTotal);
	};

	const netIncomeColor = netIncome >= 0 ? "green" : "red";
	useMemo(() => {
		calculateNetIncome();
	}, [income, expense]);
	return (
		<div className="moduleContainer">
			<div className="amount" style={{ color: netIncomeColor }}>
				{convertToUsd(netIncome)}
			</div>
			<hr />
			<div className="header">
				<h4 className="title">Net Income</h4>
			</div>
		</div>
	);
};

export default NetModule;
